import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { DropdownMenu } from '@/components/common/DropdownMenu'

export function Navbar() {
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
      <div className="hidden items-center gap-4 md:flex">
        <Link href="/#how-it-works">Como funciona</Link>
        <Link href="/#pricing">Preço</Link>
        <Link href="/login" className={buttonVariants({ variant: 'outline' })}>
          Login
        </Link>
      </div>
      <DropdownMenu />
    </nav>
  )
}
