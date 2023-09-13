import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const genres = await prisma.genre.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return NextResponse.json(genres)
}
