import Item from './Item';

const ItemList = ( {products} ) => {
  return (
    <div className='container p-10 grid grid-cols-2 gap-3'>
      { products.map(product => (<Item product={product} />))}
    </div>
  )
}
export default ItemList