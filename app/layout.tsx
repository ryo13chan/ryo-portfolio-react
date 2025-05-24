import { Outlet } from 'react-router'
import { Footer } from '~/components/feature/Footer'
import { Header } from '~/components/feature/Header'

export default function layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-8 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
