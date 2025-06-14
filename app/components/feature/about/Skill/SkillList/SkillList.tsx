import { SkillBadge } from '~/components/feature/about/Skill'

export const SkillList = () => {
  return (
    <>
      <div>Skill List</div>
      <SkillBadge name="javascript" />
      <SkillBadge name="typescript" />
      <SkillBadge name="vuejs" />
    </>
  )
}
