import React from 'react'

// context
// import {CounterContext} from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

// hooks
// import { useContext } from 'react'
import { useCounterContext } from '../hooks/useCounterContext'

// context complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'


const PageOne = () => {
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // contexto complexo
  const {color, dispatch} = useTitleColorContext();

  // alterar contexto complexo

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Page One</h1>
      <p> Valor do contador contexto: {counter}</p>
      {/* alterar valor do contexto */}
      <ChangeCounter/>
      {/* alterando contexto completo */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default PageOne