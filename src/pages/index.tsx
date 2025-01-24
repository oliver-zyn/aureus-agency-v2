import AboutSection from '@/components/AboutSection'
import ArrowButton from '@/components/ArrowButton'
import BackgroundBlur from '@/components/BackgroundBlur'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'
import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import MessageSection from '@/components/MessageSection'
import ServicesSection from '@/components/ServicesSection'
import rocketImg from '../assets/rocketDraw.svg'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex items-center justify-between gap-24 h-[calc(90vh-7rem)] lg:h-[calc(100vh-6rem)] z-10 relative">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-1">
          <h1 className="max-w-4xl text-5xl font-bold lg:text-6xl text-white-aureus !leading-[1.1]">
            Decole sua presença digital, impulsione suas{' '}
            <span className="text-yellow-aureus">vendas</span>
          </h1>
          <p className="mt-5 max-w-4xl text-primary/90 sm:text-lg text-white-aureus">
            A <strong>Aureus Marketing</strong> está aqui para elevar sua marca,
            alcançar novos patamares e conquistar o sucesso que você merece.
            Vamos voar juntos!
          </p>
          <ArrowButton
            text="Ver serviços"
            url="#services"
            className="text-zinc-950 bg-white-aureus hover:bg-white-aureus/95"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={rocketImg}
            width={537}
            height={580}
            alt=""
            className="drop-shadow-lg"
          />
        </div>
      </MaxWidthWrapper>

      <BackgroundBlur />

      <div id="about" className="bg-white-aureus z-10 relative mt-8">
        <AboutSection />
      </div>

      <div className="z-10 relative gradient">
        <div id="services">
          <ServicesSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <MessageSection />

        <BackgroundBlur />
      </div>

      <div className="bg-white-aureus relative z-10">
        <FooterSection />
      </div>
    </>
  )
}
