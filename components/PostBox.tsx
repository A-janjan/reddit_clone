import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { CameraIcon, LinkIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'


type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}


function PostBox() {

  const { data: session } = useSession()
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData)
  })

  return (
    <form onSubmit={onSubmit} 
    className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
      <div className='flex items-center space-x-3'>
        {/* avatar */}
        <Avatar />

        <input type="text"
          {...register('postTitle', { required: true })}
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          placeholder={
            session ? `Create a post by entering a title!` : `sign in to post`
          }
        />

        <CameraIcon onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 cursor-pointer text-gray-300 ${imageBoxOpen && 'text-blue-300'}`} />
        <LinkIcon className='h-6 cursor-pointer text-gray-300' />

      </div>

      {!!watch('postTitle') && (
        <><div className='flex flex-col py-2'>
          {/* BODY */}
          <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Body :</p>
            <input className='m-2 flex-1 bg-blue-50 p-2 outline-none'
              {...register('postBody')}
              type="text" placeholder='Text (optional)' />
          </div>
        </div><div className='flex flex-col py-2'>
            {/* BODY */}
            <div className='flex items-center px-2'>
              <p className='min-w-[90px]'>SubReddit :</p>
              <input className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                {...register('subreddit', { required: true })}
                type="text" placeholder='i.e. reactjs' />
            </div>
          </div></>
      )}

      {imageBoxOpen && (
        <div className='flex items-center px-2'>
          <p className='min-w-[90px]'>Image URL :</p>
          <input className='m-2 flex-1 bg-blue-50 p-2 outline-none'
            {...register('postImage')}
            type="text" placeholder='optional...' />
        </div>
      )}

      {/* errors */}
      {Object.keys(errors).length > 0 && (
        <div>
          {errors.postTitle?.type === 'required' && (
            <p>- A Post Title is required</p>
          )}
          {errors.subreddit?.type === 'required' && (
            <p>- A Subreddit is required</p>
          )}

        </div>
      )}

      {!!watch('postTitle') && (
        <button type='submit'
          className='w-full rounded-full bg-blue-400 p-2 text-white'>
          Create Post
        </button>
      )}

    </form>
  )
}

export default PostBox