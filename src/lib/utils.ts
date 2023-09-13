import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function sleep(duration = 1_000) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export const formatAsEuro =
  typeof window === 'object'
    ? new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        currency: 'EUR',
      }).format
    : (value: number) => `€ ${value}`
