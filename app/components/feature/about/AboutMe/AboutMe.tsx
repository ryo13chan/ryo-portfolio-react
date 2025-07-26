import type { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import materialOceanic from 'react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic'
import { cn } from '~/lib/utils'

type Props = {
  className?: string
}

export const AboutMe: FC<Props> = ({ className }) => {
  const codeString = `{
  名前: "Ryo（りょう）"
  生年月日: "1992-10-20"
  性別: "男"
  出身地: "北海道"
  所在地: "北海道"
  好きなもの: ["お笑い", "漫画", "ゲーム", "ラジオ", "YouTube", "散歩", "サウナ"]
  仕事: {
    職業: "Webエンジニア"
    得意: "フロントエンド開発"
    その他: ["フリーランス", "リモートワーク"]
  }
}
`

  return (
    <SyntaxHighlighter
      language="json"
      style={materialOceanic}
      className={cn('rounded-2xl', className)}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
