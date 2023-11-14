import React, { useContext } from 'react'
import Navbar from '../componenets/Navbar'
import myContext from '../context/MyContext'
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';

function Saved() {
    
    const context = useContext(myContext);
    const { order, product } = context;

  return (
    <div><Navbar section={"Dashboard"} location="dashboard"/>
    <div className=' flex flex-wrap justify-center items-center h-screen'>
        {order.filter((ele)=>{return ele.userId == JSON.parse(localStorage.getItem("user")).user.uid}).map((item, index) => {
           const details = product.filter((ele) => {return ele.id == item.productId})[0]
           const {title, description, profile} = details
           return(
           <div className='m-5 bg-gray-800 px-10 py-10 rounded-xl '>
           <div className="">
               <h1 className='text-center text-white text-xl mb-4 font-bold'>{title}</h1>
           </div>
           <div className="">
               <h2 className='text-center text-white text-xl mb-4 font-bold'>{description}</h2>
           </div>
       </div> )
        })}
    </div>
    </div>
  )
}

export default Saved