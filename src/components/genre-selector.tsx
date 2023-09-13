'use client'

import { useEffect, useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Genre } from '@prisma/client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function GenreSelector() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams()
  const selectedGenre = searchParams.get('genre') ?? ''
  const { push } = useRouter()
  const items = genres.map((genre) => ({
    value: genre.id.toString(),
    label: genre.name,
  }))

  useEffect(() => {
    async function fetchGenres() {
      const rsp = await fetch('/api/genres')
      const genres = await rsp.json()
      setGenres(genres)
    }

    fetchGenres()
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-[200px] justify-between', {
            'text-foreground': !!selectedGenre,
            'text-foreground/60 hover:text-foreground/80': !selectedGenre,
          })}
        >
          {selectedGenre
            ? items.find((item) => item.value === selectedGenre)?.label
            : 'Movies by genre...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setOpen(false)
                  push(`/movies?genre=${currentValue}`)
                }}
              >
                <Check
                  className={cn('mr-2 h-4 w-4', {
                    'opacity-100': selectedGenre === item.value,
                    'opacity-0': selectedGenre !== item.value,
                  })}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
