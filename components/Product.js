import Link from 'next/link'

const Product = (propiedades) => {
  return (
    <div>
      <img src={propiedades.image} width="100"/>
      <h2>El titulo es {propiedades.title}</h2>
      <Link href={`/pokemons/${propiedades.title}`}>
        Visitar
      </Link>
    </div>
  )
}

export default Product
