import { Github, Twitter } from 'lucide-react'
import { Button } from '~/components/base/Button'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 h-20">
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
