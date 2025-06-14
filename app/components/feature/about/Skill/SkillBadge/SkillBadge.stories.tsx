import type { Meta, StoryObj } from '@storybook/react'
import { SkillBadge } from './SkillBadge'

const meta: Meta<typeof SkillBadge> = {
  title: 'feature components/About/Skill/SkillBadge',
  component: SkillBadge,
} satisfies Meta<typeof SkillBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <SkillBadge name="javascript" />,
}
