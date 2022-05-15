import React, { useEffect, useState } from 'react'
import { getProducts } from '../helpers/getProducts';
import Category from './Category';
import ItemList from './ItemList'
import Loading from './Loading';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState('true');
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    getProducts( setProducts,setLoad )
  }, [])

  useEffect(() => {
    setCategories(products.map(product => product.type));
  }, [products]);

  return (
    load ?
      <Loading /> :
      <>
        <Category categories={categories} />
        <ItemList products={products} />
      </>
  )
}

export default ItemListContainer