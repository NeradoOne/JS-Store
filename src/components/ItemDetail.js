const ItemDetail = ({product}) => {

    return (
        <div key={product.productId} className="card bg-base-300 shadow-xl">
            <figure className='px-10 pt-10'>
                <img src={product.productImg} alt={product.title} className='rounded-xl' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{product.title}</h2>
                    <p className="card-detail">{product.detail}</p>
                <div className="card-actions justify-end">
                    <button id={product.productId} className="btn btn-primary">
                        {product.price} $
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail