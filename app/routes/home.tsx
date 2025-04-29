import type { MetaFunction } from 'react-router'
import { Button } from '~/components/ui/button'

export const meta: MetaFunction = () => [
  { title: "Home | Ryo's Portfolio" },
  { name: 'description', content: 'Home' },
]

export default function Home() {
  return (
    <>
      <Button variant="default">ボタン</Button>
    </>
  )
}
