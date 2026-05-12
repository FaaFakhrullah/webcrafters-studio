import { db } from "@/lib/db";

type RateLimitInput = {
  key: string;
  windowMs: number;
  maxRequests: number;
};

export async function checkRateLimit({ key, windowMs, maxRequests }: RateLimitInput) {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + windowMs);

  await db.rateLimit.deleteMany({
    where: { expiresAt: { lt: now } }
  });

  const existing = await db.rateLimit.findUnique({ where: { key } });

  if (!existing) {
    await db.rateLimit.create({
      data: { key, count: 1, expiresAt }
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (existing.expiresAt < now) {
    await db.rateLimit.update({
      where: { key },
      data: { count: 1, expiresAt }
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (existing.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  await db.rateLimit.update({
    where: { key },
    data: { count: { increment: 1 } }
  });

  return { allowed: true, remaining: maxRequests - (existing.count + 1) };
}