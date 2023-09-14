import { Button } from '@/components/ui/button'
import { Genre } from '@prisma/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { prisma } from '@/lib/db'

type Props = {
  genres: Genre[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const genres = await prisma.genre.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return {
    props: {
      genres,
    },
  }
}

function GenresPage({ genres }: Props) {
  const router = useRouter()

  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Genres</h2>
      <div className="flex w-72 flex-col gap-6 px-6">
        {genres.map((genre) => {
          return (
            <div key={genre.id} className="flex items-center justify-between">
              <div className="xxw-52">{genre.name}</div>
              <Button
                variant="link"
                onClick={() => {
                  router.push(`/genres/${genre.id}`)
                }}
              >
                Details
              </Button>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default GenresPage
