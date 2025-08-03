import type { MetaFunction } from 'react-router'
import { Heading } from '~/components/base/Heading'

const title = 'テストツール'
export const meta: MetaFunction = () => [
  { title: `${title} | Ryo's Portfolio` },
  { name: 'description', content: 'Tools Page' },
]

export default function Test() {
  return (
    <>
      <Heading text={title} level={2} />
    </>
  )
}
