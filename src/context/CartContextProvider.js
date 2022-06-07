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

    } else {
      setCartList([...cartList, { ...item, quantity: quantity }])
    }
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