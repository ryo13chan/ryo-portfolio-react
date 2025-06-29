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
    description:
      '千葉県にて生まれる\nすぐ北海道に引っ越したので北海道出身だと思っている',
  },
  {
    date: '2011年',
    title: '大学',
    description:
      '道内の大学に進学し一人暮らし\n授業でプログラミングを学びエンジニアに興味を持つ',
  },
  {
    date: '2015年',
    title: '就職',
    description:
      '道内の金融系SIerへ入社\n研修のため4月から上京\n都内の多くの現場に常駐し業務経験を積む',
  },
  {
    date: '2017年',
    title: '転職',
    description:
      '元々興味があったWeb業界への転職活動\n独学でWebアプリ開発を学ぶ\n自社サービス開発のWebエンジニアとして転職',
  },
  {
    date: '2018年',
    title: '独立',
    description:
      '自分らしい生き方を模索し個人事業主になる\nWebアプリ開発をメインに定める\nフリーランスエンジニアとして活動を開始',
  },
  {
    date: '2021年',
    title: '移住',
    description: '以前からの夢だった札幌へ移住\nリモートワークを中心に活動中',
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
                  'text-base font-normal text-gray-500 dark:text-gray-400 whitespace-pre-wrap',
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
