import { FacebookLogo, InstagramLogo, TiktokLogo } from 'phosphor-react'

import IconLink from './IconLink'
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import WhatsAppButton from './WhatsAppButton'
import contactImg from '../assets/contactDraw.svg'

export default function ContactSection() {
  return (
    <MaxWidthWrapper className="pt-60 lg:pt-80">
      <div className="flex justify-between items-center text-center gap-20 flex-col lg:text-left lg:flex-row">
        <div>
          <h1 className="max-w-2xl text-3xl font-normal lg:text-5xl text-white-aureus">
            Construa seu{' '}
            <span className="font-semibold text-yellow-aureus">
              futuro digital
            </span>{' '}
            conosco!
          </h1>
          <p className="mt-10 max-w-xl text-white-aureus/95 sm:text-lg">
            Estamos{' '}
            <span className="font-semibold text-yellow-aureus">ansiosos</span>{' '}
            para ouvir suas ideias, entre em contato! Juntos, podemos construir
            um{' '}
            <span className="font-semibold text-yellow-aureus">
              futuro digital extraordinário
            </span>{' '}
            para a sua marca. Estamos apenas a uma mensagem de distância!
          </p>
          <div className="flex items-center justify-center flex-col gap-5 mt-5 lg:flex-row lg:justify-start">
            <WhatsAppButton
              size="lg"
              className="bg-white-aureus hover:bg-white-aureus/95 text-zinc-950"
            />
            <div className="flex items-center gap-5 text-white-aureus">
              <IconLink
                icon={<InstagramLogo size={28} />}
                url="https://instagram.com/aureus_marketing_"
              />
              <IconLink
                icon={<FacebookLogo size={28} />}
                url="https://www.facebook.com/profile.php?id=100093401006980&mibextid=ZbWKwL"
              />
              <IconLink
                icon={<TiktokLogo size={28} />}
                url="https://www.tiktok.com/@aureusagency"
              />
            </div>
          </div>
        </div>
        <div className="max-w-96">
          <Image src={contactImg} width={537} height={580} alt="" />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
