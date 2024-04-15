import React from 'react'
import lady from '../../assets/img/lady-glasses.jpg';

export const Person = () => {

    const persona = {
        name: "Jeremías",
        theme: {
            backgroundColor: 'black',
            color: 'white'
        },
        themeImg: {
            width: '220px',
            height: '220px'
        }
    };

  return (
    <div style={persona.theme}>
        <h1>{persona.name}</h1>
        <img
            className={persona.themeImg} 
            src={lady} 
            alt={persona.name} 
        />

        <ul>
            <li>Tecnología</li>
            <li>Economia</li>
            <li>Liberalismo</li>
        </ul>
    </div>
  )
  
}
