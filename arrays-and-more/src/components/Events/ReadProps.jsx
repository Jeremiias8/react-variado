
function BotonAlerta ({mensaje, children}) {
    return (
        <button
            onClick={() => alert(mensaje)}
        >
            {children}
        </button>
    )
}

{/* funciones para alerta con Props */}
function BotonAlertaProp ({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function IniciarBoton ({nombrePeli}) {
    function iniciarClickDePlay() {
        alert(`Iniciado ${nombrePeli}`);
    }

    return (
        <BotonAlerta onClick={iniciarClickDePlay}>
            `Play {nombrePeli}`;
        </BotonAlerta>
    )
}

export default function ReadProps() {

  return (
    <div>
        <BotonAlerta mensaje="Reproduciendo !">
            Reproducir música
        </BotonAlerta>

        <BotonAlerta mensaje="Cargando...">
            Subir imágen
        </BotonAlerta>
    </div>
  )

}
