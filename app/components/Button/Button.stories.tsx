import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: true },
    variant: {
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Variant: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}
export const Size: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <Button size="icon">Icon</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
export const withIcon: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <Button variant="outline">
        <ChevronLeft />
        Back
      </Button>
      <Button>
        Next
        <ChevronRight />
      </Button>
    </div>
  ),
}
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}
