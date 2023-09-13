import { prisma } from '@/lib/db'
import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

async function getMovies(genreId: string | null) {
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

export async function GET(request: NextRequest) {
  const genreId = request.nextUrl.searchParams.get('genre')
  const movies = await getMovies(genreId)

  return NextResponse.json(movies)
}
