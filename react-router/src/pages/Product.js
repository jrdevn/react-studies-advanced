import React from 'react'

// HOOKS
import {useParams, Link} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const Product = () => {
  const {id} = useParams() //destructuring
  const url = 'http://localhost:3000/products/'+ id;

  const {data: product, httpConfig} = useFetch(url)

  console.log(product)

  // 5 - carregamento dado individual
  return (
    <>
    <p>Id do produto: {id}</p>
    {product && (
        <div>
            <h1> {product.name}</h1>
            <p> R$ {product.price}</p>
            <Link to={`/products/${product.id}/info`}> Mais informações </Link>
        </div>
    )}
    </>
  )
}

export default Product