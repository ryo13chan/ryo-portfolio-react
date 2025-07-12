import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'base components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'default',
    children: 'Default',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Variant: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}
