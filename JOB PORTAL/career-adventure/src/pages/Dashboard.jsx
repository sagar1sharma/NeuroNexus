import React, { useContext } from 'react'
import Navbar from '../componenets/Navbar'
import myContext from '../context/MyContext'
import { collection, getDocs } from 'firebase/firestore'
import { fireDB } from '../firebase/FirebaseConfig'

function Dashboard() {
    const context = useContext(myContext)
    const { product } = context
  return (
    <div>
      <Navbar section="Applied Jobs" location="saved"/>
    <div className=' flex justify-center items-center h-screen'>
        {product.map((job, index)=>{
            return (<div className='m-5 bg-gray-800 px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>{job.title}</h1>
            </div>
            <div className="">
                <h2 className='text-center text-white text-xl mb-4 font-bold'>{job.profile}</h2>
            </div>
            <div className=' flex justify-center mb-3'>
                <button
                    onClick={()=>{window.location.href=`/productinfo/${job.id}`}}
                    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                    Apply
                </button>
            </div>
        </div>)
        })}
    </div>
    </div>
  )
}

export default Dashboard