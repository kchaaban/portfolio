import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export async function parseBibFile(file: File): Promise<any[]> {
  const text = await file.text();
  const bibtexParse = require('bibtex-parse');
  return bibtexParse.entries(text);
}
