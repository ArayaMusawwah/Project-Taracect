import useMediaQuery from '@/hooks/useMediaQuery'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toCapitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

export const replaceDanToAmpersand = (str: string): string => {
  return str.replace(/\bdan\b/g, '&')
}
