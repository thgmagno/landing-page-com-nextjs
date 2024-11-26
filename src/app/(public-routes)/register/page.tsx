import RegisterForm from '@/components/auth/forms/RegisterForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="my-20 flex h-screen flex-col items-center justify-center space-y-6">
      <Image src="/assets/logo.svg" alt="Logo" width={150} height={150} />
      <Card className="w-[96%] max-w-sm">
        <CardHeader>
          <CardTitle>Boas vindas!</CardTitle>
          <CardDescription>Faça seu cadastro com email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>

      <Link href="/login" className="text-sm text-muted-foreground">
        Já possui cadastro? <span className="underline">Faça login!</span>
      </Link>
    </div>
  )
}
