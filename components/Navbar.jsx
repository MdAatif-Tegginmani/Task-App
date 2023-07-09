import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav>
        <Link href={'/'} className='bg-black'>Vectiqa</Link>
        <Link href={'/addTask'}>Add Task</Link>
   </nav>
  )
}

export default Navbar