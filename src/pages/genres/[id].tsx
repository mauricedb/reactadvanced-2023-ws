import { prisma } from '@/lib/db'
import { Genre } from '@prisma/client'
import { GetServerSideProps } from 'next'

type Params = {
  id: string
}

type Props = {
  genre: Genre
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const genre = await prisma.genre.findFirstOrThrow({
    where: { id: Number(params?.id) },
  })

  return {
    props: {
      genre,
    },
  }
}

function GenresPage({ genre }: Props) {
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

export default GenresPage
