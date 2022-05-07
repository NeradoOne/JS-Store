import { Link } from "react-router-dom"



const Item = ({ product }) => {

    return (
        <div key={product.productId} class="card bg-base-300 shadow-xl">
            <figure className='px-10 pt-10'>
                <img src={product.productImg} alt={product.title} className='rounded-xl' />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title ">{product.title}</h2>
                <div class="card-actions justify-end">
                    <button id={product.productId} className="btn btn-primary">
                        <Link to={`/products/${product.productId}`}>
                            $ {product.price}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item