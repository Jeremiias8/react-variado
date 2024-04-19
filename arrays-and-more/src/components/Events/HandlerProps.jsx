
export default function HandlerProps () {
    return (
        <div>
            <MisBotones 
                onIniciarPeli={() => alert('Renderizando')}
                onCargarArchivo={() => alert('Funcionando')}
            />
        </div>
    )
}

function MisBotones ({ onIniciarPeli, onCargarArchivo }) {
    return (
        <div>
            <BotonPrincipal 
                onClick={onIniciarPeli}
            >
                Comenzar cassette de película
            </BotonPrincipal>
            <BotonPrincipal
                onClick={onCargarArchivo}
            >
                Subida de fichero
            </BotonPrincipal>
        </div>
    )
}

function BotonPrincipal ({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

{/*
function pararPropagracion ({ onClick, children }) {
    return (
        <form
            onClick={e => e.preventDefault()}
            onSubmit={() => alert('Enviando form desde React.')}
        >
            <input />
            <button onClick={e => e.stopPropagation()}>
                {children}
            </button>
        </form>
    )
}
*/}

