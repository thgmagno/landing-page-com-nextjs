import LoginForm from '@/components/auth/forms/LoginForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6">
      <Image src="/assets/logo.svg" alt="Logo" width={150} height={150} />
      <Card className="w-[96%] max-w-sm">
        <CardHeader>
          <CardTitle>Boas vindas!</CardTitle>
          <CardDescription>Faça seu login com email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>

      <Link href="/register" className="text-sm text-muted-foreground">
        Não possui cadastro? <span className="underline">Registre-se!</span>
      </Link>
    </div>
  )
}
