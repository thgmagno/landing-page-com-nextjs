'use client'

import { actions } from '@/actions'
import { FormErrors } from '@/components/common/FormErrors'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useActionState } from 'react'

export default function RegisterForm() {
  const [formState, action, isPending] = useActionState(
    actions.auth.registerUser,
    {
      errors: {},
    },
  )

  return (
    <form action={action} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <Label>Nome</Label>
        <Input type="text" placeholder="Digite seu nome" name="name" />
        {formState.errors.name && (
          <p className="text-sm text-red-500">{formState.errors.name}</p>
        )}
      </div>
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
      <div className="flex flex-col space-y-2">
        <Label>Confirmar email</Label>
        <Input
          type="password"
          placeholder="Confirme sua senha"
          name="confirmPassword"
        />
        {formState.errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {formState.errors.confirmPassword}
          </p>
        )}
      </div>
      {formState.errors._form && <FormErrors errors={formState.errors._form} />}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Aguarde...' : 'Cadastrar'}
      </Button>
    </form>
  )
}
