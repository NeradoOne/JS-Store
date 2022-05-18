const URL = 'https://run.mocky.io/v3/600ca878-d052-44b2-8242-2f6a3ad6317a'


export const getProducts = (setProduct, setLoad, category=0, productId=0) => {
    fetch(URL)
      .then(res => res.json()) 
      .then(data => 
          
          //En caso de existir una categoria, filtra en la base de datos y los retorna
            category ? setProduct(data.filter(x => x.type === category)) :
          //En caso de existir una id, lo ubica en la base de datos y los retorna
            productId ? setProduct(data.find(x => x.productId === parseInt(productId))) :
          //En caso de que no se cumplan ninguna de los casos devuelve todos los productos
            setProduct(data)
        )
      .finally(() => setLoad(false))
}
