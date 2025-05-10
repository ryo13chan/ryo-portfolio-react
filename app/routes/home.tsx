import type { MetaFunction } from 'react-router'
import { Button } from '~/components/Button'

export const meta: MetaFunction = () => [
  { title: "Home | Ryo's Portfolio" },
  { name: 'description', content: 'Home' },
]

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Button variant="default">ボタン</Button>
      </div>
    </>
  )
}
