'use client'

import { actions } from '@/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useActionState } from 'react'

export default function LoginForm() {
  const [formState, action, isPending] = useActionState(
    actions.auth.loginUser,
    {
      errors: {},
    },
  )

  return (
    <form action={action} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="Digite seu email" name="email" />
        {formState.errors.email && (
          <p className="text-sm text-red-500">{formState.errors.email}</p>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <Label>Senha</Label>
        <Input type="password" placeholder="Digite sua senha" name="password" />
        {formState.errors.password && (
          <p className="text-sm text-red-500">{formState.errors.password}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Aguarde...' : 'Entrar'}
      </Button>
    </form>
  )
}
