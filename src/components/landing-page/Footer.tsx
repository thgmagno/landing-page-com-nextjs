import { Callout } from '@/components/common/Callout'

export function Footer() {
  return (
    <div className="content">
      <div className="flex flex-col space-y-6">
        <h1>Pronto Para Mudar Sua Vida?</h1>
        <p className="text-lg text-muted-foreground">
          Faça como milhares de pessoas. Assine nosso produto e tenha garantido
          seus estudos.
        </p>
      </div>
      <Callout inputEmail={false} />
    </div>
  )
}
