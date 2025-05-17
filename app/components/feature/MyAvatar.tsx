import Icon from '~/assets/images/icon.jpg'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/base/Avatar'
import { cn } from '~/lib/utils'

type Props = {
  className?: string
}

export const MyAvatar = ({ className }: Props) => {
  return (
    <Avatar className={cn('size-12', className)}>
      <AvatarImage src={Icon} />
      <AvatarFallback>Ryo</AvatarFallback>
    </Avatar>
  )
}
