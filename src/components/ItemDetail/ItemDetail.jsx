import { currency } from "../../helpers/currency";
const ItemDetail = ({ product }) => {

    return (
        <div className="hero">
            <div className="hero-content">
                <figure className="shadow-2xl max-w-lg">
                    <img src={product.productImg} alt={product.title} />
                </figure>
                <div>
                    <h1 className="text-5xl ">{product.title}</h1>
                    <p className="py-8 text">{product.detail}</p>
                    <button className="btn btn-primary align-baseline ">
                        {currency(product.price)}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail