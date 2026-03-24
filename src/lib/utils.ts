import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function decodeHtmlEntities(text: string) {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(text, 'text/html');
  return decoded.documentElement.textContent;
}
