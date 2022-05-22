import { Link } from "react-router-dom"
import { currency } from "../../helpers/currency"

const Item = ({ product }) => {

    return (
        <div className="card bg-base-300 shadow-xl">
            <figure className='px-10 pt-10'>
                <img src={product.image} alt={product.title} className='rounded-xl' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{product.title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/products/${product.category}/${product.id}`}>
                        <button id={product.id} className="btn btn-primary">
                        {currency(product.price)}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item