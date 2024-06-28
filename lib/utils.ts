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

export const formatDate = (date: string): string => {
  const tanggalTanpaTimezone = date.split(' ')[0]

  const tanggalObjek = new Date(tanggalTanpaTimezone)
  const tanggalFormat = tanggalObjek.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return tanggalFormat
}
