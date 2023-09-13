'use client'

import React, { FC, useEffect, useState } from 'react'

import { MovieForm } from '@/components/movie-form'
import { Movie } from '@prisma/client'

type Props = {
  params: {
    id: string
  }
}

async function saveMovie(movie: Movie) {
  const rsp = await fetch(`/api/movies/${movie.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })

  if (!rsp.ok) {
    throw new Error('Something went wrong saving the movie')
  }
}

const MoviePage: FC<Props> = ({ params: { id } }) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    async function fetchMovie() {
      const rsp = await fetch(`/api/movies/${id}`)
      const movie = await rsp.json()
      setMovie(movie)
    }

    fetchMovie()
  }, [id])

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

      <MovieForm initialMovie={movie} saveMovie={saveMovie} />
    </main>
  )
}

export default MoviePage
