import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

function GitRepoStats() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return <div>
    <h2> GitHub stats for the React Query GitHub project</h2>
    <h1>{data.name}</h1>
    <p>{data.description}</p>
    <strong>👀 {data.subscribers_count}</strong>{' '}
    <strong>✨ {data.stargazers_count}</strong > {' '}
    <strong>🍴 {data.forks_count}</strong >
  </div >
}


export const Route = createFileRoute('/_layout/stats')({
  component: GitRepoStats
})