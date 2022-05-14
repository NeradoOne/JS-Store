import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Category from './Category';
import ItemList from './ItemList';
import Loading from './Loading';

const ItemCategoryContainer = () => {

    const { type } = useParams();
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState('true');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const URL = 'https://run.mocky.io/v3/45240913-4047-49a4-a2a1-5b937feed2a5'
        fetch(URL)
            .then(res => res.json())
            .then(data => setProduct(data.filter(x => x.type === type)))
            .finally(() => setLoad(false))
    }, []);

    useEffect(() => {
        setCategories(product.map(product => product.type));
    }, [product]);

    return (
        load ?
            <Loading /> :
            <>
                <Category categories={categories} />
                <ItemList products={product} />
            </>
    )
}

export default ItemCategoryContainer