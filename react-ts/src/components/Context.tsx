import React, {useContext} from 'react'

import App, {AppContext} from '../App'

type Props = {}

const Context = (props: Props) => {
  const details = useContext(AppContext)
  return (
    <>
        {details && (
            <div>
                <h2>Linguagem: {details.language}</h2>
                <h2>FW: {details.framework}</h2>
                <h2>QTD: {details.projects}</h2>
            </div>
        )}
    </>
  )     
}

export default Context