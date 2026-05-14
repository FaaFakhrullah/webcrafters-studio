"use client";

import { Children, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "fade" | "scale";
};

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("motion-reveal", `motion-reveal-${variant}`, isVisible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

type StaggeredRevealProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  variant?: RevealProps["variant"];
};

export function StaggeredReveal({ children, className, itemClassName, stagger = 80, variant = "up" }: StaggeredRevealProps) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => (
        <Reveal className={cn("h-full", itemClassName)} delay={index * stagger} variant={variant}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
