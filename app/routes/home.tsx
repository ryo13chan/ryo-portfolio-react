import type { MetaFunction } from 'react-router'
import { Heading } from '~/components/base/Heading'
import { MyAvatar } from '~/components/feature/MyAvatar'

export const meta: MetaFunction = () => [
  { title: "Home | Ryo's Portfolio" },
  { name: 'description', content: 'ホーム画面' },
]

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem-5rem-2rem)]">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
          <div>
            <Heading text="Welcome to Ryo's Portfolio!" className="text-6xl" />
            <div className="leading-10">
              はじめまして。
              <br />
              Webフロントエンドエンジニアの
              <span className="font-bold text-3xl px-2">Ryo</span>
              と申します。
              <br />
              当サイトはエンジニアとしてのポートフォリオです。
              <br />
              是非ご覧下さい！
            </div>
          </div>
          <MyAvatar className="size-48 lg:size-64" />
        </div>
      </div>
    </>
  )
}
