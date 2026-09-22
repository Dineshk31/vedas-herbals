import { SITE } from "@/config/site";
import type { Product } from "@/data/products";

export interface CartLine {
  product: Product;
  quantity: number;
}

function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function generateProductEnquiry(product: Product): string {
  return [
    "Hello Ourva Herbal Teas 🌿",
    `I'm interested in:`,
    product.name,
    `Quantity: 1`,
    "",
    "Please share the price and delivery details.",
  ].join("\n");
}

export function generateWhatsAppOrder(product: Product, quantity: number): string {
  return [
    "Hello Ourva Herbal Teas 🌿",
    "I'm interested in:",
    product.name,
    `Quantity: ${quantity}`,
    "",
    "Please share the price and delivery details.",
  ].join("\n");
}

export function generateCartMessage(lines: CartLine[]): string {
  if (lines.length === 0) {
    return "Hello Ourva Herbal Teas 🌿\nI'd like to know more about your teas.";
  }
  const items = lines.map((l) => `${l.product.name} × ${l.quantity}`).join("\n");
  return [
    "Hello Ourva Herbal Teas 🌿",
    "I'd like to order:",
    items,
    "",
    "Please share the total amount and delivery details.",
    "Thank you.",
  ].join("\n");
}

export function whatsappLinkForProduct(product: Product, phone: string = SITE.whatsapp.primary) {
  return buildWhatsAppUrl(phone, generateProductEnquiry(product));
}

export function whatsappLinkForOrder(product: Product, quantity: number, phone: string = SITE.whatsapp.primary) {
  return buildWhatsAppUrl(phone, generateWhatsAppOrder(product, quantity));
}

export function whatsappLinkForCart(lines: CartLine[], phone: string = SITE.whatsapp.primary) {
  return buildWhatsAppUrl(phone, generateCartMessage(lines));
}

export function whatsappLinkGeneral(phone: string = SITE.whatsapp.primary) {
  return buildWhatsAppUrl(phone, "Hello Ourva Herbal Teas 🌿\nI'd like to know more about your teas.");
}
