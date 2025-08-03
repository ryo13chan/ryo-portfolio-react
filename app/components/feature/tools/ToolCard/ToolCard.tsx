import type { FC } from 'react'
import { Link } from 'react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/components/base/Card'
import { Heading } from '~/components/base/Heading'

type Props = {
  title: string
  description: string
  to?: string
}

export const ToolCard: FC<Props> = ({ title, description, to }) => {
  const cardContent = (
    <Card>
      <CardHeader>
        <CardTitle>
          <Heading text={title} level={3} />
        </CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  )

  return to ? (
    <Link to={`/tools/${to}`}>{cardContent}</Link>
  ) : (
    cardContent
  )
}
