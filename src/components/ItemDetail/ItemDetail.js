import { useCartContext } from "../../context/CartContextProvider";
import { currency } from "../../helpers/currency";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

  const { addToCart } = useCartContext()

  const handler = (quantity) => {
    // console.log(product,c)
    addToCart(product, quantity)
   }
  return (
    <div className="hero">
      <div className="hero-content flex-col sm:flex-row">
        <figure >
          <img className="shadow-2xl" src={product.productImg} alt={product.title} />
        </figure>
        <div className=" flex flex-col items-stretch">
          <h1 className="text-5xl ">{product.title}</h1>
          <button className="pointer-events-none col-span-2 btn btn-primary align-baseline ">
              {currency(product.price)}
            </button>
          <p className="py-8 text">{product.detail === '' ? product.detail : 'No description available'}</p>
          <ItemCount init={1} stock={product.stock} onAdd={handler} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail