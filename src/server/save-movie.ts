import { prisma } from '@/lib/db'
import { Movie } from '@prisma/client'

export async function saveMovie(movie: Movie) {
  await prisma.movie.update({
    data: movie,
    where: { id: movie.id },
  })
}
