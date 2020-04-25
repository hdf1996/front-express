import { useState, useEffect } from 'react'

import Product from '../components/Product'

const productos = [{
  name: 'Producto 1'
}, {
  name: 'Producto 2'
}]
const Principal = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(body => setProducts(body.results))
  }, [])

  if(products === null) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      {products.map(product => {
        return <Product title={product.name} image={product.image}/>
      })}
    </div>
  )
}

export default Principal
