import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'base components/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Heading text="Heading 1" />
      <Heading level={2} text="Heading 2" />
      <Heading level={3} text="Heading 3" />
      <Heading level={4} text="Heading 4" />
      <Heading level={5} text="Heading 5" />
      <Heading level={6} text="Heading 6" />
    </div>
  ),
}
