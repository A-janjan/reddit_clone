import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'
import { CameraIcon, LinkIcon } from '@heroicons/react/24/outline'


function PostBox() {
  
  const { data: session} = useSession()

  return (
    <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
      <div className='flex items-center space-x-3'>
        {/* avatar */}
        <Avatar />

        <input type="text" 
        disabled={!session}
        className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
        placeholder={
          session ? `Create a post by entering a title!`:`sign in to post`
          } 
        /> 

        <CameraIcon className='h-6 cursor-pointer text-gray-300' />
        <LinkIcon className='h-6 cursor-pointer text-gray-300' />

      </div>
    </form>
  )
}

export default PostBox