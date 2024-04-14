import React from 'react'

export const Arrays = () => {

  const [array, setArray] = React.useState([
    'Jeremias', 'Raphinha', 'Geronimo'
  ]);
  const [show, setShow] = React.useState(false);

  const arrayGeneralFunction = () => {
    
    array.push(3);
    array.pop(2);
    array.shift();
    array.unshift(0);
    array.find((name) => name.length > 2);
    array.findIndex((letter) => letter === 'J');
    array.map((item) => item.charAt(0).toUpperCase());
    array.filter((lengt) => lengt.length <= 5);
    array.reduce((acc, curr) => acc + curr);
    array.every((all) => all.length < 10);
    array.some((sm) => sm.length >= 1);
    array.reverse();
    array.at(-1);
    array.concat('Jerito');
    array.join('/');
    array.slice(3);
    array.indexOf('Geronimo');
    array.includes('Jerito');

    console.log(array);
  }

  return (
    <div className="arrays__container">
      <h1>Métodos más usados</h1>

      <span><b>- .push, .pop, .shift, .unshift, .find, .findIndex, .map, .filter, .reduce, .every, .some, .reverse, .at, .concat, .join, .slice, .indexOf, .includes</b></span>

      <button
        onClick={setShow(true)}
      >
        Mostrar data
      </button>

      <details>
        <summary>
          {{array}}
        </summary>
      </details>
    </div>
  )
  
}
