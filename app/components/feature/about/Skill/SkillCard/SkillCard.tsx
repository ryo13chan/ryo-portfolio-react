import type { FC } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/components/base/Card'
import { Heading } from '~/components/base/Heading'
import { SkillBadge } from '~/components/feature/about/Skill'
import type { SkillName } from '~/components/feature/about/Skill/skill'

type Props = {
  title: string
  names: SkillName[]
}

export const SkillCard: FC<Props> = ({ title, names }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <Heading text={title} level={3} className="mb-0" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {names.map((name) => (
            <SkillBadge key={name} name={name} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
