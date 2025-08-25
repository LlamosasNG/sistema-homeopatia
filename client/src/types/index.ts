import { z } from 'zod'

// Autenticación y Usuarios
export const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
})

type Auth = z.infer<typeof authSchema>
export type LoginFormValues = Pick<Auth, 'email' | 'password'>
export type RegisterFormValues = Pick<
  Auth,
  'name' | 'email' | 'password' | 'password_confirmation'
>
