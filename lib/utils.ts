import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import qs from 'query-string'
import { UrlQueryParams } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toCapitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

export const replaceDanToAmpersand = (str: string): string => {
  return str.replace(/\bdan\b/g, '&')
}

export const formatDate = (
  date: string
): { tanggalFormat: string; hari: string; tanggal: number; bulan: string; tahun: number } => {
  const tanggalTanpaTimezone = date.split(' ')[0]

  const tanggalObject = new Date(tanggalTanpaTimezone)
  const tanggalFormat = tanggalObject.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const hari = tanggalObject.toLocaleDateString('id-ID', { weekday: 'long' })
  const tanggal = tanggalObject.getDate()
  const bulan = tanggalObject.toLocaleDateString('id-ID', { month: 'long' })
  const tahun = tanggalObject.getFullYear()

  return { tanggalFormat, hari, tanggal, bulan, tahun }
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params)
  currentUrl[key] = value

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl
    },
    { skipNull: true }
  )
}

/* export function removeKeysFromQuery({ params, keysToRemove }: UrlQueryParams) {
  const currentUrl = qs.parse(params)

  keysToRemove.forEach((key: any) => {
    delete currentUrl[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl
    },
    { skipNull: true }
  )
}
 */
export function handleError(error: Error): void {
  console.error('Error occurred:', error.message)
}
