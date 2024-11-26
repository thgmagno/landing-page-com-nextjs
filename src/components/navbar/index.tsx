import { DropdownPrivate } from '@/components/navbar/DropdownPrivate'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from 'root/auth'
import { DropdownPublic } from './DropdownPublic'

export async function Navbar() {
  const session = await auth()

  return (
    <nav className="flex items-center justify-between p-6">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Livro SaaS"
          width={139}
          height={32}
        />
      </Link>
      {session ? (
        <div className="flex items-center gap-4">
          <Link href="/books" className="hidden md:flex">
            Livro do mês
          </Link>
          <Link href="/subscription" className="hidden md:flex">
            Minha assinatura
          </Link>
          <DropdownPrivate username={session?.user?.name} />
        </div>
      ) : (
        <>
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/#how-it-works">Como funciona</Link>
            <Link href="/#pricing">Preço</Link>
            <Link
              href="/login"
              className={buttonVariants({ variant: 'outline' })}
            >
              Login
            </Link>
          </div>
          <DropdownPublic />
        </>
      )}
    </nav>
  )
}
