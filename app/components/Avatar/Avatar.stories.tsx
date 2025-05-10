import type { Meta, StoryObj } from '@storybook/react'
import Icon from '~/assets/images/icon.jpg'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
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
