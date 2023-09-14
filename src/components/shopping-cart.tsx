import {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'

import { CheckoutDialog } from '@/components/checkout-dialog'

type ShoppingCartMovies = ComponentProps<typeof CheckoutDialog>['movies']
type ShoppingCartMovie = ShoppingCartMovies[0]

const ShoppingCartContext = createContext({
  addMovie: (movie: ShoppingCartMovie) => {},
  checkout: () => {},
  itemCount: 0,
})

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: PropsWithChildren) {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [movies, setMovies] = useState<ShoppingCartMovies>([])

  return (
    <ShoppingCartContext.Provider
      value={{
        addMovie: (movie: ShoppingCartMovie) => {
          setMovies((movies) => [...movies, movie])
        },
        checkout: () => {
          setCheckoutOpen(true)
        },
        itemCount: movies.length,
      }}
    >
      {children}
      <CheckoutDialog
        checkoutOpen={checkoutOpen}
        setCheckoutOpen={setCheckoutOpen}
        movies={movies}
        clearCart={() => setMovies([])}
      />
    </ShoppingCartContext.Provider>
  )
}
