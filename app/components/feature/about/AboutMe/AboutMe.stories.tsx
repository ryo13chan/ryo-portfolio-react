import type { Meta, StoryObj } from '@storybook/react'
import { AboutMe } from './AboutMe'

const meta: Meta<typeof AboutMe> = {
  title: 'feature components/About/AboutMe',
  component: AboutMe,
} satisfies Meta<typeof AboutMe>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
