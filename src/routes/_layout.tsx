import { createFileRoute, Outlet } from '@tanstack/react-router'
import Sidebar from '../components/Sidebar.jsx'

export const Route = createFileRoute('/_layout')({
  component: () => <Layout />
})

function Layout() {
  return (
    <div className='flex flex-row flex-1 justify-start items-start h-screen overflow-auto'>
      <div className='flex-[0.15]'>
        <Sidebar />
      </div>
      <div className='flex-[0.85] p-2'>
        <Outlet />
      </div>
    </div>
  )
}