import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const Post = [

  {
    id: '1',
    title: 'Post 1',
    content: 'This is post 1'
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'This is post 2'
  }
  ,
  {
    id: '2',
    title: 'Post 3',
    content: 'This is post 3'
  }
  ,
  {
    id: '4',
    title: 'Post 4',
    content: 'This is post 4'
  }
  ,

]


export const Route = createFileRoute('/_layout/posts/$postId')({
  component: () => <PostComponent />,

})

type Post = {
  id: string,
  title: string,
  content: string
}

function PostComponent() {
  const { postId } = Route.useParams()
  const [postData, setPostData] = useState<Post[]>(Post)

  useEffect(() => {
    const findPostById = (postId: number): Post[] => {
      const foundPost = postData.filter(post => post.id.toString() === postId.toString());
      return foundPost ? foundPost : [];
    };

    const foundPosts = findPostById(JSON.parse(postId))
    setPostData(foundPosts);
  }, [postId])


  console.log(postData);


  return <div>
    <h1>id : {postData[0].id}</h1>
    <h3>Title : {postData[0].title}</h3>
    <p>Content: {postData[0].content}</p>
  </div>
}