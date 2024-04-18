
export const App = () => {

    const alertBtn = () => {
        alert('click btn activated');
    }

  return (
    <div>
        <button onClick={alertBtn}>
            Click me
        </button>

        {/*  
            <button onClick={() => alert('')} />
        */}
    </div>
  )

}
