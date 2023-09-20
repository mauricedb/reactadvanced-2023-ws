'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from './shopping-cart'
import { GenreSelector } from './genre-selector'

export function MainNav() {
  const { itemCount, checkout } = useShoppingCart()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasGenreParam = searchParams?.has('genre')

  const menuItem = [{ label: 'Movies', href: '/movies' }]

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="inline-block font-bold">React Advanced London</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {menuItem.map((item) => {
          const active = pathname === item.href && !hasGenreParam

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn('transition-colors', {
                'text-foreground': active,
                'text-foreground/60 hover:text-foreground/80': !active,
              })}
            >
              {item.label}
            </Link>
          )
        })}
        <GenreSelector />

        <Link
          href="/genres"
          className="text-foreground/60 transition-colors hover:text-foreground/80"
        >
          Genres
        </Link>

        <Link
          href="/server-or-client"
          className="text-foreground/60 transition-colors hover:text-foreground/80"
        >
          Server/Client
        </Link>

        <Button
          onClick={checkout}
          disabled={!itemCount}
          variant="default"
          className="text-sm"
        >
          Checkout
        </Button>
      </nav>
    </div>
  )
}
