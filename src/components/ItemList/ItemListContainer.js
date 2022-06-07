import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../helpers/getProducts';
import Category from '../Layout/Category';
import ItemList from './ItemList'
import Loading from '../Layout/Loading';
import '../../App.css';


const ItemListContainer = () => {

  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState('true');
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    isNaN(category) ? getProducts( setProducts, setLoad, category ) : getProducts( setProducts,setLoad )
    console.log('loading')
  }, [category])

  useEffect(() => {
    setCategories(products.map(product => product.category));
  }, [products]);

  return (
    load ?
      <Loading /> :
      <div>
        <Category categories={categories} />
        <ItemList products={products} />
      </div>
  )
}

export default ItemListContainer