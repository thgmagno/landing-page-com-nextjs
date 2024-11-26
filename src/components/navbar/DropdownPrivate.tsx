'use client'

import { logoutUser } from '@/actions/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BookA, CreditCard, LogOutIcon, User, UserIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface DropdownPrivateProps {
  username?: string | null
}

export function DropdownPrivate({
  username = 'Usuário',
}: DropdownPrivateProps) {
  const { push } = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User className="cursor-pointer" size={28} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-48 space-y-2">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutUser} className="cursor-pointer">
          <UserIcon size={16} />
          {username}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => push('/books')}
          className="cursor-pointer md:hidden"
        >
          <BookA size={16} />
          Livro do mês
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => push('/subscription')}
          className="cursor-pointer md:hidden"
        >
          <CreditCard size={16} />
          Minha assinatura
        </DropdownMenuItem>
        <DropdownMenuSeparator className="md:hidden" />
        <DropdownMenuItem onClick={logoutUser} className="cursor-pointer">
          <LogOutIcon size={16} />
          Finalizar sessão
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
