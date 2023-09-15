import React, { FC } from 'react'

import { MovieForm } from '@/components/movie-form'
import { Movie } from '@prisma/client'

type Props = {
  params: {
    id: string
  }
}

const MoviePage: FC<Props> = async ({ params: { id } }) => {
  async function fetchMovie() {
    const rsp = await fetch(`http://localhost:3000/api/movies/${id}`)
    const movie = await rsp.json()
    return movie as Movie
  }

  const movie = await fetchMovie()

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
