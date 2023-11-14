import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/MyContext';
import DashboardTab from './DashboardTab';
import Navbar from '../../../componenets/Navbar'

function Dashboard() {
    const context = useContext(myContext)
  return (
    <div>
      <Navbar />
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    
                </div>
            </div>
        </section>
        <DashboardTab />
    </div>
  )
}

export default Dashboard