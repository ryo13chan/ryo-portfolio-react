import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
