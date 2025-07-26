import { addDays } from 'date-fns/addDays'
import { format } from 'date-fns/format'
import { formatDuration } from 'date-fns/formatDuration'
import { intervalToDuration } from 'date-fns/intervalToDuration'
import { ja } from 'date-fns/locale/ja'
import type { FC } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/base/Accordion'
import { Card, CardContent } from '~/components/base/Card'
import { cn } from '~/lib/utils'
import { type CareerData, careerDataList } from './careerData'

type Props = {
  className?: string
}

export const Career: FC<Props> = ({ className }) => {
  const dateLabel = (data: CareerData) => {
    const start = format(data.startDate, 'yyyy年MM月')
    const end = data.endDate ? format(data.endDate, 'yyyy年MM月') : '現在'
    const duration = formatDuration(
      intervalToDuration({
        start: data.startDate,
        end: addDays(data.endDate || new Date(), 1),
      }),
      {
        format: ['years', 'months'],
        locale: ja,
      },
    )
    return `${start} - ${end} (${duration})`
  }

  return (
    <Card className={className}>
      <CardContent>
        {careerDataList.map((career, index) => (
          <div
            key={career.title}
            className={cn('text-sm border-b', {
              'mb-4': index < careerDataList.length - 1,
            })}
          >
            <span>{dateLabel(career)}</span>
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="pt-2">
                  <span className="font-bold text-xl">{career.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-base">
                  <div className="font-bold mb-4">担当業務</div>
                  <ul className="mb-4 list-disc list-inside">
                    {career.tasks.map((task) => (
                      <li key={task} className="pb-2 pl-4">
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="font-bold mb-4">使用技術</div>
                  <ul className="list-disc list-inside">
                    {career.skills.map((skill) => (
                      <li key={skill} className="pb-2 pl-4">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
