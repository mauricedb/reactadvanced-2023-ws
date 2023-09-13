import * as z from 'zod'

export const checkoutFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
  account: z.string().length(4, {
    message: 'Account number must be 4 characters long',
  }),
})

export type CheckoutForm = z.infer<typeof checkoutFormSchema>
