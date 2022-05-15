const URL = 'https://run.mocky.io/v3/600ca878-d052-44b2-8242-2f6a3ad6317a'


export const getProducts = (setProduct, setLoad, type=0, id=0) => {

    fetch(URL)
      .then(res => res.json()) 
      .then(data => 
            id ? setProduct(data.find(x => x.productId === parseInt(id))) :
            type ? setProduct(data.filter(x => x.type === type)) :
            setProduct(data)
        )
      .finally(() => setLoad(false))
}
