import { createFileRoute, Link } from '@tanstack/react-router'

const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is post 1'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is post 2'
  }
  ,
  {
    id: 2,
    title: 'Post 3',
    content: 'This is post 3'
  }
  ,
  {
    id: 4,
    title: 'Post 4',
    content: 'This is post 4'
  }
  ,
]


export const Route = createFileRoute('/_layout/posts/')({
  component: () => <PostsComponent />,

})

function PostsComponent() {
  return <div className='w-2/3 mx-auto'>
    <table className='border-2 border-green-500 w-full'>
      <thead className='border-2 border-green-500 w-full'>
        <tr className='border-2 border-green-500'>
          <th className='border-2 border-green-500'>id</th>
          <th className='border-2 border-green-500'>title</th>
          <th className='border-2 border-green-500'>content</th>
          <th className='border-2 border-green-500'>actions</th>
        </tr>
      </thead>
      <tbody className='border-2 border-green-500'>
        {
          posts?.map((post, id) => (
            <tr className='border-2 border-green-500 p-2' key={id}>
              <td className='border-2 border-green-500 text-center p-2'>{post.id}</td>
              <td className='border-2 border-green-500 text-center'>{post.title}</td>
              <td className='border-2 border-green-500 text-center'>{post.content}</td>
              <td className='border-2 border-green-500 text-center'>
                <Link to="/posts/$postId"
                  params={{
                    postId: post.id.toString(),
                  }} className='p-2 bg-green-600 text-white'>check</Link>
              </td>
            </tr>
          ))
        }
      </tbody>

    </table>
  </div >
}