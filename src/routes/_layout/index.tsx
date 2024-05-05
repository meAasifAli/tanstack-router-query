import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: () => <Index />
})

function Index() {
  return (
    <div className='flex'>
      <h1>Welcome to the Dashboard</h1>
    </div>
  )
}