import { MessageCircle } from "lucide-react";

type FloatingWhatsAppButtonProps = {
  whatsappLink: string;
};

export function FloatingWhatsAppButton({ whatsappLink }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-soft transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
