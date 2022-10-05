import React from 'react'

import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

const Home = () => {
  const url = 'http://localhost:3000/products'
  const { data: items, httpConfig } = useFetch(url)
  return (
    <div>
      <h1> Produtos</h1>
      <ul className='products'>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2> {item.name} </h2>
              <p>{item.price} </p>
              {/* rota dinamica */}
              <Link to={`/products/${item.id}`}> Detalhes </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Home