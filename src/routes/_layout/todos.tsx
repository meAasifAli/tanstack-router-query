import { createFileRoute } from '@tanstack/react-router'
import { useMutation, useQuery } from '@tanstack/react-query'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { FormEvent, useState } from 'react'



export const Route = createFileRoute('/_layout/todos')({
  component: () => <TodoComponent />
})

function TodoComponent() {


  const [text, setText] = useState<string>('')
  const { data, isPending } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, 'todos'))
      return querySnapshot.docs.map((doc) => doc.data())
    }
  })





  const handleAddTodo = async (ev: FormEvent) => {
    ev.preventDefault()
    const docRef = doc(collection(db, 'todos'))
    await setDoc(docRef, {
      title: text,
      isCompleted: false
    })
    setText('')
  }

  const mutation = useMutation({
    mutationFn: handleAddTodo,
  })



  return <div className='w-2/3 mx-auto flex flex-col gap-4  justify-center items-center h-screen'>
    <form className='w-1/2 mx-auto flex items-center gap-2 '>
      <input value={text} onChange={(ev) => setText(ev.target.value)} type="text" placeholder='add todo' className='w-full rounded-lg p-2 bg-slate-200 border-0 outline-none' />
      <button type='submit' onClick={(ev) => mutation.mutate(ev)} className='p-2 bg-sky-700 text-white rounded-lg'>Add</button>
    </form>
    <hr className='bg-red-300 w-1/2' />
    <div className='flex flex-col gap-4 justify-start items-start w-1/2 mx-auto'>
      {
        isPending && <div>fetching todos....</div>
      }
      {data?.map((todo, id) => <div key={id} className='flex items-start justify-between w-full gap-2'>
        <p>{todo.title}</p>
      </div>)}
    </div>
  </div>
}