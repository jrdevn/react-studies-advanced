//import { useContext } from 'react'


// context
//import {CounterContext} from '../context/CounterContext'

// hooks
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'


const PageTwo = () => {
  const { counter } = useCounterContext()
  // contexto complexo
  const { color, dispatch } = useTitleColorContext();

  // alterar contexto complexo

  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
      <h1 style={{ color: color }}>Page Two</h1>
      <p> Valor do contador contexto: {counter}</p>
    </div>
  )
}

export default PageTwo