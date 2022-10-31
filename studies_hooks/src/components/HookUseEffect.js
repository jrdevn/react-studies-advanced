import React from 'react'
import { useEffect, useState } from 'react'
const HookUseEffect = () => {
  // 1 = useEffect sem dependencias

  useEffect(() => {
    console.log('Estou sendo executado!')
  });

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1);
  }

  // 2 - array de dependencias vazio
  useEffect(() => {
    console.log('Executado apenas uma vez, tipo onInit')
  }, [])

  // 3 - item no array de deps.
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
      console.log('Change anotherNumber')
      if (anotherNumber > 2) {
        console.log('Another number maior que 2!')
      }
  }, [anotherNumber])

  // 4 - cleanUp do useEffect

  useEffect(() => {
      // const timer = setTimeout(() => {
      //     console.log('Hello world!')
      //     //setAnotherNumber(anotherNumber + 1)
      // }, 2000)

      // return () => clearTimeout(timer)
  }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Numero: {number}</p>
        <button onClick={changeSomething}> Mudar </button>
        <p>Another number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}> Mudar another</button>
        <hr />
    </div>
  )
}

export default HookUseEffect