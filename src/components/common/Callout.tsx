import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface CalloutProps {
  inputEmail?: boolean
}

export function Callout({ inputEmail = true }: CalloutProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
      <div className="flex items-center justify-center gap-4 w-full">
        {inputEmail && (
          <Input placeholder="Digite seu e-mail" className="flex-1" />
        )}
        <Button className={cn(!inputEmail && 'w-full')}>Assine agora</Button>
      </div>
      <span className="text-xs md:text-sm text-muted-foreground">
        Comece sua assinatura agora mesmo. Cancele quando quiser.
      </span>
    </div>
  )
}
