import type { Meta, StoryObj } from '@storybook/react'
import { SkillList } from './SkillList'

const meta: Meta<typeof SkillList> = {
  title: 'feature components/About/Skill/SkillList',
  component: SkillList,
} satisfies Meta<typeof SkillList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
