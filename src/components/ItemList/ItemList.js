import Item from './Item';

const ItemList = ( {products} ) => {

  return (
    <div className='container mx-auto p-0 md:p-4 md:gap-3 grid lg:grid-cols-3 md:grid-cols-2  gap-1'>
      {products.map(product => (<Item key={product.productId} product={product} />))}
    </div>
  )
}
export default ItemList 