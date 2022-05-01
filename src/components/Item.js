import React from 'react'

const Item = (prop) => {
    let product = prop.product;
    return (
        <div class="card bg-base-300 shadow-xl">
            <figure className='px-10 pt-10'>
                <img src={product.thumbnail} alt={product.title} className='rounded-xl' />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title ">{product.title}</h2>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">{product.price +' $'+ product.currency_id}</button>
                </div>
            </div>
        </div>
    )
}

export default Item