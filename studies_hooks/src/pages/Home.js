// useContext 
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'




const Home = () => {
  const {contextValue} = useContext(SomeContext);
  return (
    <div>
        <HookUseState></HookUseState>
        <HookUseReducer></HookUseReducer>
        <HookUseEffect></HookUseEffect>
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef></HookUseRef>
        <HookUseCallback></HookUseCallback>
        <HookUseMemo></HookUseMemo>
        <HookUseLayoutEffect></HookUseLayoutEffect>
        <HookUseImperativeHandle></HookUseImperativeHandle>
        <HookCustom></HookCustom>
    </div>
  )
}

export default Home