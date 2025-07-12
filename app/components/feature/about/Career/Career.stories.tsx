import type { Meta, StoryObj } from '@storybook/react-vite'
import { Career } from './Career'

const meta: Meta<typeof Career> = {
  title: 'feature components/About/Career',
  component: Career,
} satisfies Meta<typeof Career>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
