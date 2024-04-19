
const Articulo = ({ nombre, esCargado }) => {

    return <li className="articulo">
        {esCargado ? ( <del>{nombre + ' ✔️'}</del> )
        : (' ❌')}
    </li>;
}

const ArticulosDos = ({ price, isCharged }) => {

    return <li className="articulosdos">
        {price > 10 && isCharged ? (<b>El precio de los articulos es mayor del deseado</b>) : (<h3>Precio: {price}</h3>)}
    </li>;
}

{/* Operador Exponente */}
const Potencia = () => {

    let j = 6;
    let k = 8;

    let operacion = j ** k;
    console.log("El valor de la operación compleja y ultramatemática es: " + operacion);
}

export const Conditional = () => {

  return (
    <section>
        <h1>Conditional Component</h1>

        <ul>
            <Articulo 
                esCargado={true}
                nombre="Monster"
            />

            <Articulo 
                esCargado={true}
                nombre="Queso"
            />

            <Articulo 
                esCargado={false}
                nombre="Pan y Hamburguesas"
            />
        </ul>

        <h1>Renderizado condicional con props</h1>
        
        <ul>
            <ArticulosDos 
                price={11}
                isCharged={true}
            />

            <ArticulosDos 
                price={8}
                isCharged={false}
            />

            <ArticulosDos 
                price={21}
                isCharged={true}
            />
        </ul>
    </section>
  )

}
