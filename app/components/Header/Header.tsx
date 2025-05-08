import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Badge } from '~/components/Badge'
import { ModeToggle } from '~/components/ModeToggle'
import { MyAvatar } from '~/components/MyAvatar'
import { cn } from '~/lib/utils'
import type { CommitData } from '~/types/git'

//  1週間以内のcommitか
const isRecentCommit = (date: string) => {
  const commitDate = dayjs(date)
  const now = dayjs()
  return commitDate.isAfter(now.subtract(7, 'day'))
}

// メニュー一覧
const menus = [
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
  { to: '/blog', label: 'Blog' },
]

export const Header = () => {
  const [commitData, setCommitData] = useState<CommitData | null>(null)

  useEffect(() => {
    const fetchGitCommitData = async () => {
      const response = await fetch(
        'https://api.github.com/repos/ryo13chan/ryo-portfolio-react/commits/main',
      )
      const result: CommitData = await response.json()
      setCommitData(result)
    }
    fetchGitCommitData()
  }, [])

  return (
    <header className="flex justify-between items-center h-20 px-4 border-b sticky top-0 bg-white dark:bg-gray-950">
      <div className="flex items-center gap-8">
        <Link to="/">
          <MyAvatar />
        </Link>
        {commitData && (
          <div className="hidden md:flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span>
                {dayjs(commitData.commit.author.date).format('YYYY-MM-DD')}
              </span>
              {isRecentCommit(commitData.commit.author.date) && (
                <Badge>New</Badge>
              )}
            </div>
            <a
              href={commitData.html_url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {commitData.commit.message}
            </a>
          </div>
        )}
      </div>
      <div className="flex items-center gap-8">
        <nav>
          <ul className="flex gap-8">
            {menus.map((menu) => (
              <li key={menu.to}>
                <NavLink
                  to={menu.to}
                  className={({ isActive }) => cn({ 'font-bold': isActive })}
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
