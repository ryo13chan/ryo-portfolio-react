import { Link, type MetaFunction } from 'react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/components/base/Card'
import { Heading } from '~/components/base/Heading'
import { ToolCard } from '~/components/feature/tools/ToolCard'
import { ToolCategory } from '~/components/feature/tools/ToolCategory'

const title = 'Tools'
export const meta: MetaFunction = () => [
  { title: `${title} | Ryo's Portfolio` },
  { name: 'description', content: 'Tools Page' },
]

export default function Index() {
  return (
    <>
      <Heading text="Tools" />
      <div className="grid grid-cols-1 gap-8">
        <ToolCategory name="カテゴリ">
          <ToolCard
            title="テストツール"
            description="説明説明説明説明説明説明説明説明説明説明"
          />
          <ToolCard
            title="テストツール"
            description="説明説明説明説明説明説明説明説明説明説明"
            to="test"
          />
          <ToolCard
            title="テストツール"
            description="説明説明説明説明説明説明説明説明説明説明"
            to="test"
          />
        </ToolCategory>
      </div>
    </>
  )
}
