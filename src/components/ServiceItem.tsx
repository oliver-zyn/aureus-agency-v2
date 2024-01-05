import { IconProps } from 'phosphor-react'

interface ServiceItemProps {
  icon: IconProps
  title: string
  description: string
}

export default function ServiceItem({
  icon,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="flex gap-3 flex-col items-start lg:gap-8 lg:items-center lg:flex-row">
      <>{icon}</>
      <div className="max-w-96">
        <h2 className="text-xl font-semibold text-white-aureus">{title}</h2>
        <p className="pt-2 text-white-aureus/80">{description}</p>
      </div>
    </div>
  )
}
