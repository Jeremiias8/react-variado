import * as React from 'react'
import { FText } from './FText'
import frases from './Frases';

export const GeneradorInspirador = ({children}) => {

    const [indice, setIndice] = React.useState(0);
    const frase = frases[indice];
    const siguiente = () => setIndice((indice + 1) % frases.length);

  return (  
    <>
        <p>Tu mensaje inspirador es:</p>
        <FText texto={frase} />
        <button onClick={siguiente}>Dame más</button>
        {children}
    </>
  )

}
