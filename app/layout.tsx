import { Outlet } from 'react-router'

export default function layout() {
  return (
    <>
      {/* TODO: ヘッダー */}
      <main>
        <Outlet />
      </main>
      {/* TODO: フッター */}
    </>
  )
}
