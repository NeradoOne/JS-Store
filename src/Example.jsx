import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from 'react'

const Example = () => {

  const [cartList, setCartList] = useState([])

  useEffect(() => {
    getItems()
  }, [])


  const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
  }

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Get a list of cities from your database
  const getItems = async () => {
    const itemsCol = collection(db, 'items');
    console.log('1',itemsCol)
    const itemsSnapshot = await getDocs(itemsCol);
    console.log('2',itemsSnapshot)
    const itemsList =  itemsSnapshot.docs.map(doc => doc.data())
    console.log('3',itemsList)
    setCartList(itemsList)
  }

  console.log('4',cartList)

  return (
    <div>
      <button className='btn btn-primary'>Push to getApp</button>
      <button className='btn btn-primary'>Push to getItems</button>
      <div>
        {cartList.map(i => (<h1 key={i.id}>{i.title}</h1>))}
      </div>
    </div>
  )
}

export default Example