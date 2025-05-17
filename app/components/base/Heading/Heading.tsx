import type { ElementType, FC } from 'react'
import { cn } from '~/lib/utils'

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  text: string
}

export const Heading: FC<Props> = ({ level = 1, text }) => {
  const HeadingTag = `h${level}` as ElementType
  const className = cn(
    'font-bold',
    level === 1 && 'text-4xl mb-8',
    level === 2 && 'text-3xl mb-6',
    level === 3 && 'text-2xl mb-4',
    level === 4 && 'text-xl mb-2',
    level === 5 && 'text-lg mb-2',
    level === 6 && 'text-base mb-2',
  )

  return <HeadingTag className={className}>{text}</HeadingTag>
}
