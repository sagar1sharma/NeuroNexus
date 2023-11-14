import React from 'react'
import { Link } from 'react-router-dom'

function navbar(props) {
  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.clear('user')
    window.location.href = "/"
  }

  return (
    <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(62 64 66)' }}>
          Your friend for guiding through the adventure of your career
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: '#282c34' }} >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                 style={{ backgroundColor:'rgb(80 82 87)' }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href='https://github.com/sagar1sharma/NeuroNexus' className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: 'white' }}>Career Adventure</h1>
                  </div>
                </a>
              </div>

              <div className="ml-auto flex items-center">

              <a onClick={logout} className="text-sm font-medium text-white cursor-pointer  " >Logout</a>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: 'white' }}>INDIA</span>
                  </a>
                </div>

                {/* Saved */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={`/${props.location}`} className="group -m-2 flex items-center p-2" style={{ color: 'white' }}>
                  <span className="ml-3 block text-sm font-medium" style={{ color: 'white' }}>{props.section}</span>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: 'white' }}></span>
                    <span className="sr-only">saved jobs, view saved jobs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default navbar