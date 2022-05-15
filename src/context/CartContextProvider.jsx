import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
        console.log({ item, quantity})
        if (isInCart(item.id)) {
            return setCartList(
                cartList.map(product => product.id === item.id ?
                    {...product, quantity: product.quantity + quantity } :
                    product
                    )
            )
        }
        setCartList([...cartList, {...item, quantity}])
    }

    const isInCart = id => cartList.some(item => item.id === id)

  return (
    <CartContext.Provider value= {{addToCart,}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider