import React, { useContext, useState } from 'react'
import {Link, Navigate} from 'react-router-dom'
import myContext from '../context/MyContext';

function Landing() {
    const context = useContext(myContext)


  return (
    <div className=' flex justify-center items-center h-screen'>
        <div className=' bg-black px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-5xl mb-4 font-bold logo'>Career Adventure</h1>
            </div>
            <div className=' flex justify-center mb-3'>
                <Link to={'/signup'} state={{role: "user"}}
                    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                    I want a Job
                </Link>
            </div>
            <div className=' flex justify-center mb-3'>
                <Link to={'/signup'} state={{role: "admin"}}
                    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                    I want to hire
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Landing