import type { Meta, StoryObj } from '@storybook/react-vite'
import { Timeline } from './Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'feature components/About/Timeline',
  component: Timeline,
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
