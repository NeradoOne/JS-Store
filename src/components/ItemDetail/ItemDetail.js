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
    <div>
    <div className="hero">
      <div className="hero-content flex-col sm:flex-row">
        <figure >
          <img className="shadow-2xl" src={product.image} alt={product.title} />
        </figure>
        <div className=" flex flex-col items-stretch">
          <h1 className="text-5xl ">{product.title}</h1>
          <button className="pointer-events-none col-span-2 btn btn-primary align-baseline ">
              {currency(product.price)}
            </button>
          <ItemCount init={1} stock={product.stock} onAdd={handler} />
        </div>
      </div>
    </div>
      <div className="container mx-auto max-w-lg">
          <p className="py-8 text">{product.detail}</p>
      </div>
    </div>
  )
}

export default ItemDetail