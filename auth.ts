import { actions } from '@/actions'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        return actions.auth.findUserByCredentials({
          email: credentials.email as string,
          password: credentials.password as string,
        })
      },
    }),
  ],
})
