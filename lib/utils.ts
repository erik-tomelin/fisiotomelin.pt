import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function whatsAppRedirection() {
  return "https://api.whatsapp.com/send?phone=351911587398&text=Ol%C3%A1%2C%20quero%20agendar%20uma%20consulta%20com%20o%20fisioterapeuta%20Evandro%20Tomelin.%20%0A%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F%20Obrigado(a)!";
}