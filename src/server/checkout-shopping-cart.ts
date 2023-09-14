import { Movie } from '@prisma/client'

type ShoppingCartMovie = Pick<Movie, 'id' | 'title'>

type Cart = {
  account: string
  customerName: string
  movies: ShoppingCartMovie[]
}

export function checkoutShoppingCart({ account, customerName, movies }: Cart) {
  const totalAmount = movies.length * 9.99
  console.group(`checkout for ${customerName}`)
  console.log(
    `Charging account '${account}' for ${totalAmount.toLocaleString('en', {
      style: 'currency',
      currency: 'EUR',
    })}`,
  )
  console.table(movies)
  console.groupEnd()
}
