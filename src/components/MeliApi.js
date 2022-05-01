import React, { useState, useEffect } from 'react';

export default function MeliApi() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
      if (query.length > 3) {
        fetch(URL)
          .then((result) => result.json())
          .then((response) => setProducts(response.results));
      }
    }, [query]);
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    return (
      <div>
        <input onChange={(event) => handleChange(event)} />
        <h1>Resultados:</h1>
        {products.map((el) => (
          <div key={el.id}>
            <h3>{el.title}</h3>
            <h3>Precio: ${el.price}</h3>\
            <img src={el.thumbnail} alt={el.title} />
          </div>
        ))}
      </div>
    );
  }
  