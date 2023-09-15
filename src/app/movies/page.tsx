import { Movie } from '@prisma/client'

import { MovieCard } from '@/components/movie-card'

type Props = {
  searchParams: {
    genre?: string
  }
}

export default async function MoviesPage({ searchParams: { genre } }: Props) {
  async function fetchMovies() {
    const url = genre ? `/api/movies?genre=${genre}` : '/api/movies'
    const rsp = await fetch(`http://localhost:3000${url}`)
    const movies = await rsp.json()
    return movies as Movie[]
  }

  const movies = await fetchMovies()

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
