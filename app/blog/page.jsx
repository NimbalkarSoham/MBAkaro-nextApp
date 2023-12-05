import BlogCard from '@/components/BlogCard';
import ImageSlider from '@/components/ImageSlider';
import React from 'react'

const images = [
  {
    src: 'https://images.pexels.com/photos/19220566/pexels-photo-19220566/free-photo-of-war-of-independence-museum-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Image 1',
    title: 'This is the first image.',
    description: 'This is a short description of the blog',
  },
  {
    src: 'https://images.pexels.com/photos/19199263/pexels-photo-19199263/free-photo-of-rows-of-desks-and-chairs-in-a-classroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Image 2',
    title: 'This is the second image.',
    description: 'This is a short description of the blog',
  },
  {
    src: 'https://images.pexels.com/photos/19191592/pexels-photo-19191592/free-photo-of-tower-of-the-phanar-greek-orthodox-college.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Image 3',
    title: 'This is the third image.',
    description: 'This is a short description of the blog',
  },
  {
    src: 'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Image 4',
    title: 'This is the fourth image.',
    description: 'This is a short description of the blog',
  },
  {
    src: 'https://images.pexels.com/photos/6177604/pexels-photo-6177604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Image 5',
    title: 'This is the fifth image.',
    description: 'This is a short description of the blog',
  },
  
];


const posts = [
  { 
    key: 0,
    image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '08.10.2023',
    title: 'What collectors need to know about authenticity',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
  },
  {
    key: 1,
    image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '08.10.2023',
    title: 'What collectors need to know about authenticity',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
  },
  {
    key: 2,
    image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '08.10.2023',
    title: 'What collectors need to know about authenticity',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
  },
  {
    key: 3,
    image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '08.10.2023',
    title: 'What collectors need to know about authenticity',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
  },
  {
    key: 4,
    image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '08.10.2023',
    title: 'What collectors need to know about authenticity',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
  },
  {
    key: 5,
    image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '08.10.2023',
    title: 'What collectors need to know about authenticity',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
  },
  {
    key: 6,
    image:'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '08.10.2023',
    title: 'What collectors need to know about authenticity',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities.'
  },
];

const blogs = () => {
  return (
    <div>
      <ImageSlider images={images} />
      <div className="feed flex flex-col px-16 pt-16">
        <div className="title m-2">
          <h2 className='text-6xl font-bold'>Latest Blogs</h2>
        </div>
        <div className="filters bg-slate-200 w-fit px-9 py-2 rounded-lg">
          <ul className='flex flex-row gap-12'>
            <li>All</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat3</li>
            <li>Cat4</li>
          </ul>
        </div>
        <div className="feedList grid grid-cols-4 mt-10 gap-12">
          {posts.map((post) => (
            <BlogCard post={post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default blogs