import React from 'react'
import { useCartContext } from '../../context/CartContextProvider'
import { currency } from '../../helpers/currency';


const CartWidget = () => {
  const { cartList } = useCartContext()
  const { eraseCart } = useCartContext()
  const { remove } = useCartContext()
  let totalPrice = 0;
  let totalItems = 0
  cartList.map(i => {totalPrice = i.price * i.quantity + totalPrice; totalItems = i.quantity + totalItems});

  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost text-primary-content btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm bg-secondary indicator-item">{totalItems}</span>
          </div>
        </label>
        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-300 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{cartList.length} Items</span>
            {cartList.map(i => (
              <div key={i.productId}>
                <h2>{i.title}</h2>
                <button onClick={() => remove(i.productId)} className='card-actions btn btn-circle btn-error btn-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                <h4>{i.price}<span>x{i.quantity}</span></h4>
              </div>))}
            <span className="text-info">
              {currency(totalPrice)}
            </span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
              <button onClick={eraseCart} className="btn btn-warning btn-block">Erase cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartWidget