import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])


  const addToCart = (item, quantity) => {

    if (isInCart(item.productId)) {
      if (isInStock(item.productId, quantity))
        return setCartList(
          cartList.map(
            product => {
              if (product.productId === item.productId) {
                return { ...product, quantity: product.quantity + quantity }
              }
            }
          )
        )
    }
    if (!isInCart(item.productId)) {
      setCartList([...cartList, { ...item, quantity }])
    }
  }

  const isInCart = id => cartList.some(item => item.productId === id)
  const isInStock = ( id, quantity ) => {
    let item = cartList.find(i => i.productId === id);
    return item.quantity+quantity <= item.stock
  }
  const remove = id => setCartList(cartList.filter(i=> i.productId !== id))
  const eraseCart = () => setCartList([])

  return (
    <CartContext.Provider value={{ addToCart, cartList, eraseCart, remove }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider