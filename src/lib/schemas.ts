import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email inválido').max(64),
  password: z
    .string()
    .min(6, 'Senha deve conter no mínimo 6 caracteres')
    .max(32),
})

export const registerSchema = z
  .object({
    name: z.string().min(3, 'Nome deve conter no mínimo 3 caracteres').max(32),
    email: z.string().email('Email inválido').max(64),
    password: z
      .string()
      .min(6, 'Senha deve conter no mínimo 6 caracteres')
      .max(32),
    confirmPassword: z
      .string()
      .min(6, 'Senha deve conter no mínimo 6 caracteres')
      .max(32),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não correspondem',
  })
