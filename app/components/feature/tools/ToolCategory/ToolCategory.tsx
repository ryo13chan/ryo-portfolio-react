import type { FC, ReactNode } from 'react'
import { Heading } from '~/components/base/Heading'

type Props = {
  name: string
  children?: ReactNode
}

export const ToolCategory: FC<Props> = ({ name, children }) => {
  return (
    <div>
      <Heading text={name} level={3} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  )
}
