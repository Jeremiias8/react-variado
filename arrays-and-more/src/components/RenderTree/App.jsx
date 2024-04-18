import React from 'react'
import { FText } from './FText'
import { GeneradorInspirador } from './GeneradorInspirador'
import { Copy } from './Copy'

export const App = () => {

  return (
    <>
        <FText titulo texto="Aplicación para inspirarse" />
        <GeneradorInspirador>
            <Copy año={2024} />
        </GeneradorInspirador>

        {/* 

          App > renders > GeneradorInspirador > renders > FText
          App > renders > GeneradorInspirador > renders > Copy
          App > renders > FText 

        */}
    </>
  )

}
