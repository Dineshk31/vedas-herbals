import { MessageCircle } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

interface WhatsAppButtonProps {
  href: string;
  label?: string;
  variant?: "solid" | "outline" | "light";
  size?: "md" | "lg";
  className?: string;
}

const VARIANT_CLASSES: Record<string, string> = {
  solid: "bg-rust-600 text-cream-light hover:bg-rust-700",
  outline: "border border-ink/30 text-ink hover:border-rust-600 hover:text-rust-600",
  light: "bg-cream text-ink hover:bg-cream-light",
};

export function WhatsAppButton({
  href,
  label = "Order on WhatsApp",
  variant = "solid",
  size = "md",
  className = "",
}: WhatsAppButtonProps) {
  const sizeClasses = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  return (
    <MagneticButton
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full font-semibold tracking-wide transition-colors duration-300 ${sizeClasses} ${VARIANT_CLASSES[variant]} ${className}`}
      data-cursor="pointer"
    >
      <MessageCircle size={size === "lg" ? 20 : 17} strokeWidth={2} />
      <span>{label}</span>
    </MagneticButton>
  );
}
