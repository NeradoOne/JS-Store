import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../../helpers/getProducts";
import ItemDetail from "./ItemDetail"
import Loading from "../Layout/Loading";

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState('true')

  useEffect(() => {
    getProductById(setProduct, setLoad, id)
  }, [])

  return (
    <>
      { load ?
        <Loading /> :
        <ItemDetail product={product} /> }
      </>
  )
}

export default ItemDetailContainer