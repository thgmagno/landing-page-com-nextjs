import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </>
  )
}
