import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../helpers/getProducts';
import Category from './Category';
import ItemList from './ItemList/ItemList';
import Loading from './Loading';

const ItemCategoryContainer = () => {

    const { type } = useParams();
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState('true');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProducts(setProduct, setLoad, type)
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