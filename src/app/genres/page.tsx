import 'server-only'

import { prisma } from '@/lib/db'
import { GenresList } from './genres-list'

async function GenresPage() {
  const genres = await prisma.genre.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return <GenresList genres={genres} />
}

export default GenresPage
