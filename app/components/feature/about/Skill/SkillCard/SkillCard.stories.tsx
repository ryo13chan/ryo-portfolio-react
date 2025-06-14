import type { Meta, StoryObj } from '@storybook/react'
import { SkillCard } from './SkillCard'

const meta: Meta<typeof SkillCard> = {
  title: 'feature components/About/Skill/SkillCard',
  component: SkillCard,
} satisfies Meta<typeof SkillCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SkillCard title="Frontend" names={['javascript', 'typescript', 'vuejs']} />
  ),
}
