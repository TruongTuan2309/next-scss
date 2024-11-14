import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Please enter a correct email'),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[A-Z]).{8,30}/,
      'Password must be at least 8 characters long, contain at least one uppercase letter, and one number.'
    )
})
