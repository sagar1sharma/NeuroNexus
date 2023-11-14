import React, { useEffect, useState } from 'react'
import MyContext from './MyContext';
import { fireDB } from '../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';


function MyState(props) {
  const [loading, setLoading] = useState(false);
  const [myOrder, setMyOrder] = useState({
    userId: null,
    productId: null,
    resume: null
  })

  const addOrder = async () => {
    const productRef = collection(fireDB, "orders")

    await addDoc(productRef, myOrder)
    window.location.href="/saved"
  }

  const [products, setProducts] = useState({
    title: null,
    profile: null,
    description: null,
    adminId: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    // if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
    //   return toast.error('Please fill all fields')
    // }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {

      await addDoc(productRef, products)
      getProductData()
      window.location.href="/auth/dashboard"
      setLoading(false)
    } catch (error) {
      alert(error)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      setLoading(false);
      alert(error)
    }
  }


  const edithandle = (item) => {
    setProducts(item)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      getProductData();
      setLoading(false)
      window.location.href = '/dashboard'
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }


  const [order, setOrder] = useState([]);

  

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      // console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }




  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);


  return (
    <MyContext.Provider value={{
      loading, setLoading,
      products, setProducts, addProduct, product,
      updateProduct,edithandle,deleteProduct,order,user, myOrder, setMyOrder, addOrder
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState