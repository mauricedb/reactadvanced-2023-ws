import 'server-only'

import { prisma } from '@/lib/db'

type Props = {
  params: {
    id: string
  }
}

async function GenrePage({ params: { id } }: Props) {
  const genre = await prisma.genre.findFirstOrThrow({
    where: { id: Number(id) },
  })

  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Genre</h2>
      <div className="flex w-72 flex-col gap-6 px-6">
        <div>ID: {genre.id}</div>
        <div>Name: {genre.name}</div>
      </div>
    </main>
  )
}

export default GenrePage
