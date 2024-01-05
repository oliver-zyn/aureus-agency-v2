import ArrowButton from './ArrowButton'
import MaxWidthWrapper from './MaxWidthWrapper'

export default function MessageSection() {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center items-center text-center pt-60 lg:pt-80 z-10 relative">
      <h1 className="max-w-4xl text-2xl font-semibold pb-12 !leading-[1.6] lg:text-4xl text-white-aureus">
        Em nosso universo digital, somos seu{' '}
        <span className="text-yellow-aureus">foguete para o sucesso</span>.
        Impulsione sua marca com a{' '}
        <span className="text-yellow-aureus">Aureus Agency</span> e alcance{' '}
        <span className="text-yellow-aureus">novas alturas</span>!
      </h1>
      <ArrowButton
        text="Iniciar minha jornada"
        url="https://wa.me/554691163405"
        target="_blank"
        className="text-zinc-950 bg-white-aureus hover:bg-white-aureus/95"
      />
    </MaxWidthWrapper>
  )
}
