import { SkillCard } from '~/components/feature/about/Skill/SkillCard'

export const SkillList = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <SkillCard
        title="Frontend"
        names={['javascript', 'typescript', 'vuejs']}
      />
      <SkillCard
        title="Frontend"
        names={['javascript', 'typescript', 'vuejs']}
      />
    </div>
  )
}
