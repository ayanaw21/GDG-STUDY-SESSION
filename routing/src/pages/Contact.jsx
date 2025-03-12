import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const formNavigate = useNavigate()
  return (
    <div>
			<h1 className="font-bold text-4xl">Contact</h1>
      <div className='flex items-center justify-center w-full pb-5 gap-5 mt-4'>
        <button className='cursor-pointer border-sky-100 rounded-2xl text-center bg-gray-300 border-solid px-3 py-1 hover:bg-gray-200'  onClick={()=>formNavigate('info')}>contact info</button>
        
        <button className='cursor-pointer border-sky-100 text-center rounded-2xl bg-gray-300 border-solid px-3 py-1  hover:bg-gray-200' onClick={()=>formNavigate('form')}>contact form</button>
      </div>
		</div>
  )
}

export default Contact