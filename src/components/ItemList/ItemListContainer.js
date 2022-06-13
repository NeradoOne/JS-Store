import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts, getProductByCategory } from '../../helpers/getProducts';
import ItemList from './ItemList'
import Loading from '../Layout/Loading';
import '../../App.css';


const ItemListContainer = () => {

  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState('true');

  useEffect(() => {
    category ? getProductByCategory(setProducts, setLoad, category ) : getProducts( setProducts,setLoad )
    console.log('loading')
  }, [category])

  return (
    load ?
      <Loading /> :
      <div>
        <ItemList products={products} />
      </div>
  )
}

export default ItemListContainer