import type { Meta, StoryObj } from '@storybook/react-vite'
import Icon from '~/assets/images/icon.jpg'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'base components/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={Icon} />
      <AvatarFallback>Default</AvatarFallback>
    </Avatar>
  ),
}
export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>FB</AvatarFallback>
    </Avatar>
  ),
}
