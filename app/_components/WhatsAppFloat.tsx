"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  phone: string;
  message?: string;
}

export function WhatsAppFloat({
  phone,
  message = "Hi, I'm interested in getting a quote.",
}: WhatsAppFloatProps) {
  const [mounted, setMounted] = useState(false);

  // ✅ Prevent SSR / hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366] text-white
        shadow-lg
        hover:scale-110 transition-transform
      "
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  );
}
