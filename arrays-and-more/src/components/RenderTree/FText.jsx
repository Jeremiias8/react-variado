
export const FText = ({titulo, texto}) => {

  return titulo ? <h1 className='fanci titulo'>{texto}</h1>
                : <h3 className='faci cursiva'>{texto}</h3>
}
