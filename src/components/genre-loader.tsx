import 'server-only'

import { prisma } from '@/lib/db'
import { GenreSelector } from './genre-selector'
import { sleep } from '@/lib/utils'

export async function GenreLoader() {
  // await sleep(2500)

  const genres = await prisma.genre.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return <GenreSelector genres={genres} />
}
