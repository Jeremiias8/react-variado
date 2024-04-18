
export const Pure = () => {

    const ChampionsLeague = ({ faseGrupos, eliminatorias }) => {

        return (
            <ol>
                <li>Mejor de {faseGrupos}</li>
                <li>Mejor de {eliminatorias}</li>
                <li>{faseGrupos} vs {eliminatorias}</li>
            </ol>
        )
    }

    // let womenCoffee = 0;

    const Coffee = ({womenCoffee}) => {
        // womenCoffee +=  1;
        return <h2>
            La taza de café es para el usuario #{womenCoffee}
        </h2>;
    }

    const loopingForCoffee = () => {
        let cups = [];

        for (let i = 0; i <= 10; i++) {
            cups.push(<Coffee key={i} womenCoffee={i} />);
        }

        return cups;
    }
    console.log(loopingForCoffee);

  return (
    <div>
        <h1>Componente Puro</h1>

        <section>
            {ChampionsLeague}
        </section>

        <h3>Coffee section</h3>

        <section>
            <Coffee womenCoffee={1} />
            <Coffee womenCoffee={2} />
        </section>

        <p><strong>Loop for</strong> in coffee</p>
        <fieldset>
            <legend>Data:</legend>

            <section>
                {loopingForCoffee()}
            </section>
        </fieldset>
    </div>
  )

}
