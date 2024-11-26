import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { CheckIcon } from 'lucide-react'

export function PlanCard() {
  const Item = ({ label }: { label: string }) => (
    <li className="flex items-center gap-2 text-sm text-muted-foreground">
      <CheckIcon className="h-4 w-4 text-green-500" strokeWidth={3} />
      {label}
    </li>
  )

  return (
    <Card className="w-[90%] md:w-[420px] lg:p-6">
      <CardHeader>
        <CardTitle>Plano Pro Premium VIP</CardTitle>
        <CardDescription>
          Tudo que você precisa para seus estudos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-4xl font-bold">
          R$ 29,00{' '}
          <span className="text-lg font-light text-muted-foreground">/mês</span>
        </h1>
        <ul className="my-4 space-y-2">
          <Item label="1 ebook por mês" />
          <Item label="Curadoria especial" />
          <Item label="Acesso ilimitado" />
          <Item label="Cancele a qualquer momento" />
        </ul>
        <Button className="mt-4 w-full">Assine agora</Button>
      </CardContent>
    </Card>
  )
}
