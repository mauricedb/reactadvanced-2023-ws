import './globals.css'

import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { SiteHeader } from '@/components/site-header'
import { ShoppingCartProvider } from '@/components/shopping-cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Advanced London',
  description:
    'React Server Components Unleashed: A Deep Dive into Next-Gen Web Development',
  authors: [
    { name: 'Maurice de Beijer', url: 'https://www.theproblemsolver.dev' },
  ],
}

type Props = PropsWithChildren

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          inter.className,
        )}
      >
        <div className="container relative flex min-h-screen flex-col">
          <ShoppingCartProvider>
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Toaster />
          </ShoppingCartProvider>
        </div>
      </body>
    </html>
  )
}
