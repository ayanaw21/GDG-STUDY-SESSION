import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h2>404 | page not found</h2>
        <button className='cursor-pointer border-sky-100 text-center rounded-2xl bg-gray-300 border-solid px-3 py-1  hover:bg-gray-200' onClick={()=>navigate('/')}>contact form</button>
    </div>
  )
}

export default NotFound