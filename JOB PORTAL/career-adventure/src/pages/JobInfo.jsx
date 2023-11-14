import React, { useContext, useEffect, useState } from 'react'
import myContext from '../context/MyContext';
import { useParams } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import Navbar from '../componenets/Navbar'
import { Link } from 'react-router-dom';

function ProductInfo() {

    const context = useContext(myContext);
    const { loading, setLoading, order,  myOrder, setMyOrder, addOrder } = context;
    
    const [products, setProducts] = useState('')
    const params = useParams()
    console.log(order)

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductData()

    }, [])
    
    return (
        <div>
            <Navbar location="dashboard" section="Dashboard" />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {products && 
                    <div className="justify-center lg:w-4/5 mx-auto flex flex-wrap">
                        
                        <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-white mb-8 text-3xl title-font font-medium mb-1">
                                {products.profile}
                            </h1>
                            
                            <p className=" text-white leading-relaxed border-b-2 mb-5 pb-5">
                                {products.description}
                            </p>

                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-white">
                                {products.title}
                                </span>
                                <button onClick={addOrder} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>}
                    <textarea cols="80" rows="8" placeholder='Paste resume here in text'
                        className='m-6'
                        name='resume'
                        onChange={(e) => setMyOrder({ ...myOrder, resume: e.target.value})}
                    ></textarea>
                    <br></br>
                    <input type='text' className='mr-5' onChange={(e) => setMyOrder({ ...myOrder, productId: params.id})} placeholder=' Full Name'></input>
                    <input type='text' className='ml-5' onChange={(e) => setMyOrder({ ...myOrder, userId: JSON.parse(localStorage.getItem("user")).user.uid })} placeholder='Please type Confirm'></input>
                </div>
            </section>

        </div>
    )
}

export default ProductInfo