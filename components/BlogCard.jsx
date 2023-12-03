import Image from 'next/image'
import React from 'react'

const BlogCard = ({ post }) => {
  return (
    <div className='flex flex-col w-72 rounded-lg hover:scale-105 duration-200 ease-in-out'>
        <img src={post.image} alt="not found" className='w-72 rounded-t-lg hover:brightness-75 duration-200'/>
        {/* <Image src={post.image} alt='not found' height={30} width={30}/> */}
        <p className='font-extralight px-2 pt-2'>{post.date}</p>
        <h2 className='font-bold text-lg px-2'>{post.title}</h2>
        <p className='font-extralight px-2'>{post.description}</p>
    </div>
  )
}

export default BlogCard