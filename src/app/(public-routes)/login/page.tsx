import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import Form from 'next/form'
import { loginUser } from '@/actions'

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-6">
      <Image src="/assets/logo.svg" alt="Logo" width={150} height={150} />
      <Card className="w-[96%] max-w-sm">
        <CardHeader>
          <CardTitle>Boas vindas!</CardTitle>
          <CardDescription>Faça seu login com email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={loginUser} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Digite seu email" name="email" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                name="password"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </Form>
        </CardContent>
      </Card>

      <Link href="/register" className="text-sm text-muted-foreground">
        Não possui cadastro? <span className="underline">Registre-se!</span>
      </Link>
    </div>
  )
}
