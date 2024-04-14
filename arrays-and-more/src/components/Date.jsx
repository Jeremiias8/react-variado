import React from 'react'


export const Date = () => {

    const hoy = new Date();

    const formatoFecha = (hoy) => {

        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long' }
        ).format(hoy);
    }

  return (
    <div>
        <h1>Hoy es: {formatoFecha(hoy)}</h1>
    </div>
  )

}
