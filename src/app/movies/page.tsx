import { Prisma } from '@prisma/client'

import { MovieCard } from '@/components/movie-card'
import { prisma } from '@/lib/db'

type Props = {
  searchParams: {
    genre?: string
  }
}

export const dynamic = 'force-dynamic'

async function getMovies(genreId: string | undefined) {
  const orderBy: Prisma.MovieOrderByWithRelationInput = {
    voteAverage: 'desc',
  } as const

  if (genreId) {
    const genre = await prisma.genre.findFirst({
      where: { id: +genreId },
      include: {
        movies: {
          orderBy,
        },
      },
    })

    return genre?.movies ?? []
  } else {
    const movies = await prisma.movie.findMany({
      orderBy,
    })

    return movies
  }
}

export default async function MoviesPage({ searchParams: { genre } }: Props) {
  const movies = await getMovies(genre)

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
