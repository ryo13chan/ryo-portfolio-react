import { Outlet } from 'react-router'
import { Header } from '~/components/Header'

export default function layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* TODO: フッター */}
    </div>
  )
}
