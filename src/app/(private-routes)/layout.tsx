import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'

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
