import React from 'react'
import dev from '../../../assets/img/developer-typing-code.jpg';

export const PropsImg = () => {
    
    const urlBASE = 'https://unsplash.com/es/fotos/una-estrella-en-medio-de-un-cielo-negro-GPRhqxU1ME0';
    const persona = {
        name: 'Galaxia',
        imgId: '7vQD0fP',
        imgSize: 's',
        theme: {
            backgroundColor: 'lightgray',
            color: white
        }
    };

  return (
    <div style={persona.theme}>

        <h1>Foto: {persona.name}</h1>
        <img
            className={persona.theme} 
            src="{urlBASE}{persona.imgId}{persona.imgSize}.jpg" 
            alt={persona.name}
        />

        <ul>
            <li>#1 ELEMENT</li>
            <li>#2 ELEMENT</li>
            <li>#3 ELEMENT</li>
        </ul>
    </div>
  )

}
