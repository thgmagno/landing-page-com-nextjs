import Image from 'next/image'

export function HowItWorks() {
  return (
    <div id="how-it-works" className="content">
      <Image
        src="/assets/how-it-works.svg"
        alt="Como funciona"
        width={700}
        height={700}
      />
    </div>
  )
}
