import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrowserRouter } from 'react-router'
import { ToolCard } from './ToolCard'

const meta: Meta<typeof ToolCard> = {
  title: 'feature components/Tools/ToolCard',
  component: ToolCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof ToolCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToolCard
      title="Title"
      description="description description description description description"
      to="test"
    />
  ),
}
