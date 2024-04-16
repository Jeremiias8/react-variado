// import React from 'react'
import { data } from "./data";

export const Mapeo = () => {

    const dataa = [{
        id: 0,
        nombre: 'Pedri González',
        posicion: 'Centrocampista'
    }, {
        id: 1,
        nombre: 'Ronald Araújo',
        posicion: 'Defensa central/lateral derecho'
    }, {
        id: 2,
        nombre: 'Lamine Yamal',
        posicion: 'Extremo izquierdo/derecho'
    }];

    const mapeoData = data.map(jugador => 
        <li key={data.id}>
            {jugador}
        </li>
    ); 

    const filtradoData = data.filter(jugador => 
        <li>{jugador.nombre === 'Ronald Araújo'}</li>
    );

    console.log(mapeoData, filtradoData);

  return (
    <div>
        <h1>Map y Filter Component</h1>

        <section className="map-section">
            <h4><b>Map</b></h4>
            <ul>
                {mapeoData}
            </ul>
        </section>

        <section className="filter-section">
            <h4><b>Filter</b></h4>
            <p><b>{data.nombre}:</b> con id : <i>{data.id}</i>, juega en la posición de <i>{data.posicion}.</i></p>

            <ul>
                {filtradoData}
            </ul>    
        </section>
        
    </div>
  )

}
