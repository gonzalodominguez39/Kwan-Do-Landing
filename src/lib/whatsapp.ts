declare const process: {
  env: {
    NEXT_PUBLIC_WPP_NUMBER?: string;
  };
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WPP_NUMBER?.replace(/\D/g, "") ?? "";

export const whatsappDisplayNumber = process.env.NEXT_PUBLIC_WPP_NUMBER ?? "";

export function createWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hola KWAN-DO, quiero consultar sobre clases y horarios.";

export const defaultWhatsappUrl = createWhatsappUrl(defaultWhatsappMessage);
