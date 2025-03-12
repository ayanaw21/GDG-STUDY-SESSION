import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Job opening</h1>
        <p>List of current job opening in our company.</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout

