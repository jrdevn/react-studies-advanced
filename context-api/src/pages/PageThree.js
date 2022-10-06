import React from 'react'

// hooks
import { useContext } from 'react'

// context
import {CounterContext} from '../context/CounterContext'


const PageThree = () => {
    const {counter} = useContext(CounterContext)
    return (
      <div>
        <h1>PageThree</h1>
        <p> Valor do contador contexto: {counter}</p>      
      </div>
  )
}

export default PageThree