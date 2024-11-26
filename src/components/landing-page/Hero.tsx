import { Callout } from '../common/Callout'

export function Hero() {
  return (
    <div className="content">
      <div className="flex flex-col space-y-6">
        <h1>Simplifique Seus Estudos</h1>
        <p>
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </p>
      </div>
      <Callout />
    </div>
  )
}
