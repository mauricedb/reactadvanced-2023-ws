import React, { FC } from 'react'

import { MovieForm } from '@/components/movie-form'
import { prisma } from '@/lib/db'

type Props = {
  params: {
    id: string
  }
}

export const dynamic = 'force-dynamic'

async function getMovie(id: string) {
  const movie = await prisma.movie.findFirstOrThrow({
    where: { id: +id },
  })

  return movie
}

const MoviePage: FC<Props> = async ({ params: { id } }) => {
  const movie = await getMovie(id)

  if (!movie) {
    return (
      <main className="flex flex-grow items-center justify-center">
        Loading movie ...
      </main>
    )
  }

  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">
        Movie details for: {movie.title}
      </h2>

      <MovieForm initialMovie={movie} />
    </main>
  )
}

export default MoviePage
