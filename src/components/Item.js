import { Link } from "react-router-dom"



const Item = ({ product }) => {

    return (
        <div className="card bg-base-300 shadow-xl">
            <figure className='px-10 pt-10'>
                <img src={product.productImg} alt={product.title} className='rounded-xl' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{product.title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/products/${product.productId}`}>
                        <button id={product.productId} className="btn btn-primary">
                            $ {product.price}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item