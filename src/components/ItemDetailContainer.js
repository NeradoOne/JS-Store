import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "../helpers/getProducts";
import ItemDetail from "./ItemDetail"
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState('true')

    useEffect(() => {
        // const URL = 'https://run.mocky.io/v3/45240913-4047-49a4-a2a1-5b937feed2a5'
        // fetch(URL)
        //     .then(res => res.json())
        //     .then(data => setProduct(data.find(x => x.productId === parseInt(id))))
        //     .finally(()=> setLoad(false))
        getProducts(setProduct, setLoad, 0, id)
    }, [])

    return (
            load ?
            <Loading /> :
            <ItemDetail product={product} />
    )
}

export default ItemDetailContainer