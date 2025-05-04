import Icon from '~/assets/images/icon.jpg'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

export const MyAvatar = () => {
  return (
    <Avatar className="size-12">
      <AvatarImage src={Icon} />
      <AvatarFallback>Ryo</AvatarFallback>
    </Avatar>
  )
}
