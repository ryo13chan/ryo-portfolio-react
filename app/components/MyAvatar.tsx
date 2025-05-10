import Icon from '~/assets/images/icon.jpg'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/Avatar'

export const MyAvatar = () => {
  return (
    <Avatar className="size-12">
      <AvatarImage src={Icon} />
      <AvatarFallback>Ryo</AvatarFallback>
    </Avatar>
  )
}
