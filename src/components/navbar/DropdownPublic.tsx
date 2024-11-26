'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CircleDollarSign, InfoIcon, LogInIcon, MenuIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function DropdownPublic() {
  const { push } = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden">
        <MenuIcon size={32} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-48 space-y-2 md:hidden">
        <DropdownMenuItem onClick={() => push('/how-it-works')}>
          <InfoIcon size={16} />
          Como funciona
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => push('/pricing')}>
          <CircleDollarSign size={16} />
          Preço
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => push('/login')}>
          <LogInIcon size={16} />
          Login
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
