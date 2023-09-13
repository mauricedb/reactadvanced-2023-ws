'use client'

import { useEffect, useState } from 'react'
import { Movie } from '@prisma/client'

import { MovieCard } from '@/components/movie-card'

type Props = {
  searchParams: {
    genre?: string
  }
}

export default function MoviesPage({ searchParams: { genre } }: Props) {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function fetchMovies() {
      const rsp = await fetch(`/api/movies?genre=${genre ?? ''}`)
      const movies = await rsp.json()
      setMovies(movies)
    }

    fetchMovies()
  }, [genre])

  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </div>
    </main>
  )
}
