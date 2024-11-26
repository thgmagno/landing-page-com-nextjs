import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface CalloutProps {
  inputEmail?: boolean
}

export function Callout({ inputEmail = true }: CalloutProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4">
      <div className="flex w-full items-center justify-center gap-4">
        {inputEmail && (
          <Input placeholder="Digite seu e-mail" className="flex-1" />
        )}
        <Button className={cn(!inputEmail && 'w-full')}>Assine agora</Button>
      </div>
      <span className="text-xs text-muted-foreground md:text-sm">
        Comece sua assinatura agora mesmo. Cancele quando quiser.
      </span>
    </div>
  )
}
