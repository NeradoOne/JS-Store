import React, { useState } from 'react'

function ItemCount({ init, stock, onAdd }) {
  

  const [count, setCount] = useState(init);
  const classErrorTimer = (e) => {
    e.target.classList.toggle("btn-error");
    setTimeout(() => {
      e.target.classList.toggle("btn-error")
  }, 200);}

  const handleSubs = (e) => count > 1 ? 
  setCount(counter => counter - 1) : classErrorTimer(e);

  const handleAdd = (e) => count < stock ? 
  setCount(counter => counter + 1) : classErrorTimer(e);


  return (
    <>
      <div className="cursor-default mx-auto badge text-secondary-content badge-secondary">
        Last {stock} in stock
      </div>
      <div className=" mx-auto my-1 btn-group grid grid-cols-3">
        <button onClick={handleSubs} className="btn btn-info btn-circle text-primary-content">-</button>
        <button className="btn btn-outline btn-info pointer-events-none">{count}</button>
        <button onClick={handleAdd} className="btn btn-info btn-circle text-primary-content">+</button>
      </div>
      <button onClick={()=>onAdd(count)} className="btn btn-outline btn-success">
              Add to cart
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
    </>
  )
}

export default ItemCount