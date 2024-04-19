
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

function SubidaImagen () {
    return (
        <BotonAlerta onClick={() => alert('Subiendo...')}>
            Descarga de Imágen
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

        <IniciarBoton nombrePeli="F&F10-P2" />

        <section>
            <input type="file" id="file0" required />
            <img src="" alt="" />
            <span>
                <SubidaImagen />
            </span>
        </section>
    </div>
  )

}
