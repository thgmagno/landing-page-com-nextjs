'use client'

import {
  DropdownMenu as DropdownMenuUI,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { InfoIcon, MenuIcon, LogInIcon, CircleDollarSign } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function DropdownMenu() {
  const { push } = useRouter()

  return (
    <DropdownMenuUI>
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
    </DropdownMenuUI>
  )
}
