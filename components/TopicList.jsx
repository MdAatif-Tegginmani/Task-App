import React from 'react'
import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'

const TopicList = () => {
  return (
    <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>Topic Title</h2>
            <div>Topic Description</div>
        </div>
        <div className='flex gap-2'>
            <RemoveBtn />
            <Link href={'/editTask/123'} ></Link>
            <HiPencilAlt size={24} />
        </div>
    </div>
    
    </>
  )
}

export default TopicList