import type { FC } from 'react'
import { type SkillName, skills } from '~/components/feature/about/Skill/skill'
import { Badge } from '~/components/ui/badge'

type Props = {
  name: SkillName
}

export const SkillBadge: FC<Props> = ({ name }) => {
  const skill = skills[name]
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`

  return (
    <Badge
      variant="secondary"
      className="rounded-3xl text-md font-normal pr-4 shadow"
    >
      <img
        src={iconUrl}
        aria-label={skill.label}
        className="w-8 h-auto rounded-xl mr-1"
        loading="lazy"
        width="32"
        height="32"
      />
      {skill.label}
    </Badge>
  )
}
