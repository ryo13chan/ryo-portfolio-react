import type { FC } from 'react'
import { Card, CardContent } from '~/components/base/Card'
import { cn } from '~/lib/utils'

type Props = {
  className?: string
}

type TimelineData = {
  date: string
  title: string
  description: string
}

const timelineDataList: TimelineData[] = [
  {
    date: '1992年',
    title: '誕生',
    description: '誕生',
  },
  {
    date: '1992',
    title: '誕生',
    description: '誕生\nああああ',
  },
  {
    date: '1992',
    title: '誕生',
    description: '誕生',
  },
]

export const Timeline: FC<Props> = ({ className }) => {
  return (
    <Card className={className}>
      <CardContent>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {timelineDataList.map((item, index) => (
            <li
              key={item.date}
              className={cn('ms-4', {
                'mb-10': index < timelineDataList.length - 1,
              })}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p
                className={cn(
                  'text-base font-normal text-gray-500 dark:text-gray-400',
                  {
                    'mb-4': index < timelineDataList.length - 1,
                  },
                )}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
