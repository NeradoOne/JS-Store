import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContextProvider'
import { currency } from '../../helpers/currency';
import GoBackButton from '../Layout/GoBackButton';

const Cart = () => {

  const { cartList } = useCartContext()
  const { eraseCart } = useCartContext()
  const { remove } = useCartContext()
  let totalPrice = 0;
  let totalItems = 0
  cartList.map(i => { totalPrice = i.price * i.quantity + totalPrice; return totalItems = i.quantity + totalItems });

  return (
    <main className='container mx-auto'>
      <GoBackButton/>
      <div className='max-w-xl grid grid-cols-1'>
        {cartList.map(i => (
          <section className={'mt-5 bg-base-300 shadow rounded p-4 my-2'} key={i.id} >
            <section className='mx-auto flex justify-between items-center'  >
            <NavLink to={`/products/${i.category}/${i.id}`}>
              <img className='h-12 w-12 rounded-full' src={i.image} alt={i.title} />
              <div className='ml-2' >
                <h3 className='font-bold text-primary' >{i.title}</h3>
                <p>Cantidad: {i.quantity}</p>
              </div>
            </NavLink>
              <button onClick={() => remove(i.id)} className='card-actions btn btn-circle btn-error btn-outline btn-xs'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
              </button>
            </section>
            <span className='text-info text-lg my-2'>Price: {currency(i.price)}</span>
          </section>))}
      </div>
      <h3 className=" mt-8 text-info font-bold text-lg">
        Total: {currency(totalPrice)}
      </h3>
      <div className="mt-5 max-w-xl btn-group flex justify-around">
        <button className="btn btn-success w-60" >Proceed To Checkout</button>
        <button onClick={eraseCart} className="btn btn-warning btn-outline  w-60">Erase cart</button>
      </div>
    </main>
  )
}

export default Cart