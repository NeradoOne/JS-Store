import { isEditable } from '@testing-library/user-event/dist/utils'
import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])


  const addToCart = (item, quantity) => {

    if (isInCart(item.id)) {
      if (isInStock(item.id, quantity)) {
        
        const newCart = cartList.map(i => i.id == item.id ? { ...i, quantity: i.quantity + quantity } : i)
        setCartList(newCart)
        
      } else {
        console.error('Not enoght stock')
      }


      // cartList.map( (i) => {
      //   if (i.id === item.id) { 
      //     setCartList([{ ...i, quantity: i.quantity + quantity }])
      //     console.warn(i)
      //   } else{
      //     console.error(i) 
      //   }})
    } else {
      setCartList([...cartList, { ...item, quantity: quantity }])
    }




    // if (!isInCart(item.id)) {
    //   setCartList([...cartList, { ...item, quantity }])
    // } else if (isInStock(item.id, quantity)) {
    //   cartList.map(p=> p.id===item.id ?  setCartList({...p, quantity: p.quantity + quantity}) :
    //     console.error('Item not added'))
    //     // return setCartList(
    //     //   cartList.map(
    //     //     product => {
    //     //       if (product.id === item.id) {
    //     //         return { ...product, quantity: product.quantity + quantity }
    //     //       }
    //     //     }
    //     //   ))
    // } console.error('Not enoght stock')
  }


  const isInCart = id => cartList.some(item => item.id === id)
  const isInStock = (id, quantity) => {
    let item = cartList.find(i => i.id === id);
    return item.quantity + quantity <= item.stock
  }
  const remove = id => setCartList(cartList.filter(i => i.id !== id))
  const eraseCart = () => setCartList([])

  return (
    <CartContext.Provider value={{ addToCart, cartList, eraseCart, remove }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider