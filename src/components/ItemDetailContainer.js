import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState('true')

    useEffect(() => {
        const URL = 'https://run.mocky.io/v3/45240913-4047-49a4-a2a1-5b937feed2a5'
        fetch(URL)
            .then(res => res.json())
            .then(data => setProduct(data.filter(x => x.productId === parseInt(id))))
            .finally(setLoad(false))
    }, [])

console.log(product)
    return (
            load ?
            <Loading /> :
            <ItemDetail prop={product} />
    )
}

export default ItemDetailContainer