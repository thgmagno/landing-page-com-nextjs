import Image from 'next/image'

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <Image src="/assets/logo.svg" alt="LivroSaaS" width={160} height={160} />
      <span className="text-sm text-muted-foreground">
        © 2024 LivroSaaS. Todos os direitos reservados.
      </span>
    </div>
  )
}
