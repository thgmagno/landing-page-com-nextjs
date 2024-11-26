'use server'

import { capitalize } from '@/lib/helpers'
import { prisma } from '@/lib/prisma'
import { loginSchema, registerSchema } from '@/lib/schemas'
import { LoginFormState, RegisterFormState } from '@/lib/states'
import { User } from '@prisma/client'
import { compareSync, hashSync } from 'bcrypt-ts'

export async function loginUser(
  formState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  try {
    console.log(parsed)
  } catch (error) {
    console.log(error)
    return { errors: { _form: 'Erro ao validar o formulário' } }
  }

  return { errors: {} }
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

export async function findUserByCredentials(credentials: {
  email: string
  password: string
}): Promise<Omit<User, 'password'> | null> {
  const { email, password } = credentials

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (!user) return null

  const passwordMatch = compareSync(password, user.password)

  return passwordMatch
    ? {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    : null
}
