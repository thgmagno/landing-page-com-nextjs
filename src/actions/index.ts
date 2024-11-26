'use server'

import { capitalize } from '@/lib/helpers'
import { prisma } from '@/lib/prisma'
import { registerSchema } from '@/lib/schemas'
import { RegisterFormState } from '@/lib/states'
import { hashSync } from 'bcrypt-ts'

export async function loginUser(formData: FormData) {
  const entries = Array.from(formData.entries())
  const data = Object.fromEntries(entries)

  // validar email e senha
  // criar sessão do usuário
  console.log(data)
}

export async function registerUser(
  formState: RegisterFormState,
  formData: FormData,
): Promise<RegisterFormState> {
  const parsed = registerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: parsed.data.email,
      },
    })

    if (userExists) {
      return {
        errors: {
          email: ['Email já cadastrado'],
        },
      }
    }
    // criar o usuário no banco de dados
    await prisma.user.create({
      data: {
        name: capitalize(parsed.data.name),
        email: parsed.data.email,
        password: hashSync(parsed.data.password),
      },
    })
  } catch (error) {
    console.log(error)
    return { errors: {} }
  }

  return { errors: {} }
}
