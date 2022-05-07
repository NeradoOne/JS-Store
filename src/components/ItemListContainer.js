import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Loading from './Loading';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState('true')

  useEffect(() => {
    const URL = 'https://run.mocky.io/v3/45240913-4047-49a4-a2a1-5b937feed2a5'


    fetch(URL)
      .then(res => res.json())
      .then(URL => setProducts(URL))
      .finally(setLoad(false))
  }, [])

  return (
    load ?
      <Loading /> :
      <ItemList products={products} />
  )
}

export default ItemListContainer