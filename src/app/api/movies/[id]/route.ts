import { prisma } from '@/lib/db'
import { saveMovie } from '@/server/save-movie'
import { Movie } from '@prisma/client'
import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

async function getMovie(id: string) {
  const movie = await prisma.movie.findFirst({
    where: { id: +id },
  })

  return movie
}

type Context = {
  params: {
    id: string
  }
}

export async function GET(_: NextRequest, context: Context) {
  const movie = await getMovie(context.params.id)

  if (movie === null) {
    return notFound()
  } else {
    return NextResponse.json(movie)
  }
}

export async function PUT(request: NextRequest) {
  try {
    const movie = (await request.json()) as Movie

    await saveMovie(movie)

    return new NextResponse(null, {
      status: 204,
    })
  } catch (error) {
    console.error(error)

    return new NextResponse(null, {
      status: 400,
    })
  }
}
