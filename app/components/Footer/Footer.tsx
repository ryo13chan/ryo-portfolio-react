import dayjs from 'dayjs'
import { Github, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Badge } from '~/components/Badge'
import { Button } from '~/components/Button'
import { ModeToggle } from '~/components/ModeToggle'
import { MyAvatar } from '~/components/MyAvatar'
import { cn } from '~/lib/utils'
import type { CommitData } from '~/types/git'

// メニュー一覧
const menus = [
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
  { to: '/blog', label: 'Blog' },
]

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 py-4">
      <div className="flex gap-4">
        <a href="https://github.com/ryo13chan" target="_blank" rel="noreferrer">
          <Button variant="outline" size="icon">
            <Github />
          </Button>
        </a>
        <a
          href="https://twitter.com/ryo_chan_13"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline" size="icon">
            <Twitter />
          </Button>
        </a>
      </div>
      <div>© Ryo 2025</div>
    </footer>
  )
}
