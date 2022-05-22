import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContextProvider'
import { currency } from '../../helpers/currency';


const CartWidget = () => {
  const { cartList } = useCartContext()
  const { eraseCart } = useCartContext()
  const { remove } = useCartContext()
  let totalPrice = 0;
  let totalItems = 0
  cartList.map(i => { totalPrice = i.price * i.quantity + totalPrice; totalItems = i.quantity + totalItems });

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
        <div tabIndex={0} className="mt-3 card card-compact dropdown-content bg-base-300 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{cartList.length} Items</span>
            {cartList.map(i => (
              <NavLink className='flex justify-between rounded p-2 my-2 items-center w-72 bg-white' to={`/products/${i.category}/${i.id}`} key={i.id}>
                <section>
                  <img className='h-12 rounded-full' src={i.image} />
                  <div className='ml-2' >
                    <h3 className='font-bold text-primary' >{i.title}</h3>
                    <p>Cantidad: {i.quantity}</p>
                  </div>
                  <button onClick={() => remove(i.id)} className='card-actions btn btn-circle btn-error btn-outline btn-xs'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                  </button>
                </section>
                <span className='text-info text-lg my-2'>{currency(i.price)}</span>
              </NavLink>))}
            <span className="text-info">
              {currency(totalPrice)}
            </span>
            <div className="card-actions">
              <Link className="btn btn-primary btn-block" to={'/cart'}>
                <button>View cart</button>
              </Link>
              <button onClick={eraseCart} className="btn btn-warning btn-outline btn-block">Erase cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartWidget