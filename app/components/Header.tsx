import { Link } from 'react-router'
import { ModeToggle } from '~/components/ModeToggle'
import { MyAvatar } from '~/components/MyAvatar'

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-4 shadow sticky top-0 bg-white dark:bg-gray-950">
      <Link to="/">
        <MyAvatar />
      </Link>
      <div className="flex items-center gap-8">
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
