import React from 'react'
import ban from '../../public/Untitled.png'
import '../index.css'
export default function 
() {
  return (
    <div>
    
    <div className='mt-10'></div>
    <div className='max-w-screen-2xl   container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
       <div   className="w-full md:w-1/2 mt-15 md:mt-100">
       <div className='space-y-12'>
       <h1 className='text-3xl font-bold text-green-400'>
        hello this is new application using tailwind and react
       </h1>
       <p> fdfdsfdsfdgdgdgd</p>
       </div>
       </div>
       <div className='w-full md:w-1/2  mt-15 md:mt-50'>
       
       <img src={ban} className=" mt-100 w-200 h-200"/>
       </div>
       </div>
      
    </div>
  )
}

