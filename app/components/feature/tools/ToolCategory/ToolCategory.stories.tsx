import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrowserRouter } from 'react-router'
import { ToolCard } from '../ToolCard'
import { ToolCategory } from './ToolCategory'

const meta: Meta<typeof ToolCategory> = {
  title: 'feature components/Tools/ToolCategory',
  component: ToolCategory,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof ToolCategory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToolCategory name="Category">
      <ToolCard
        title="Title"
        description="description description description description description"
        to="test"
      />
      <ToolCard
        title="Title"
        description="description description description description description"
        to="test"
      />
      <ToolCard
        title="Title"
        description="description description description description description"
        to="test"
      />
      <ToolCard
        title="Title"
        description="description description description description description"
        to="test"
      />
    </ToolCategory>
  ),
}
