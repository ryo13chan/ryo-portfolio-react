import type { MetaFunction } from 'react-router'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/base/Accordion'
import { Heading } from '~/components/base/Heading'
import { AboutMe } from '~/components/feature/about/AboutMe'
import { SkillList } from '~/components/feature/about/Skill'
import { Timeline } from '~/components/feature/about/Timeline'

export const meta: MetaFunction = () => [
  { title: "About | Ryo's Portfolio" },
  { name: 'description', content: 'About画面' },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <Heading text="About" />
      <AboutMe className="!mb-8" />
      <Heading text="Timeline" level={2} />
      <Timeline className="mb-8" />
      <Heading text="Career" level={2} />
      {/* TODO: 経歴のリスト  */}
      {/* TODO:  Gitの草*/}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Heading text="Skills" level={2} className="mb-2" />
          </AccordionTrigger>
          <AccordionContent>
            <SkillList />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
