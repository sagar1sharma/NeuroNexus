import React, { useContext } from 'react'
import myContext from '../../../context/MyContext'

function AddProduct() {
    const context = useContext(myContext);
    const {products,setProducts,addProduct, user} = context
    function handleClick(){
        const userId = JSON.parse(localStorage.getItem("user")).user.uid
        console.log(userId)
        console.log(typeof(userId))
        setProducts({ ...products, adminId: userId})
        addProduct()
        console.log(products.adminId)
    }
    // setProducts({...products, adminId: user.uid})
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Post Job</h1>
                    </div>
                    <div>
                        <input type="text"
                       onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Company Name'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='profile'
                            onChange={(e) => setProducts({ ...products, profile: e.target.value })} value={products.profile}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Job Profile Name'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="8" 
                       name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Job Description'>

                       </textarea>
                    </div>
                    <div>
                       <input type='text' 
                       name='description' onChange={(e) => setProducts({ ...products, adminId: JSON.parse(localStorage.getItem("user")).user.uid })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Type Admin to add'>

                       </input>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct