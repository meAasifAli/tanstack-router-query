import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/Admin')({
  component: () => <Admin />
})

function Admin() {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  )
}