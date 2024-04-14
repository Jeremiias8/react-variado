import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imagen from './assets/img/lady-glasses.jpg'
import './App.css'

import { Nav } from './components/Navbar/Nav'
// import { Routing } from '../routing/Routing'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  const usuario = {
    id: 1,
    name: "Jere",
    imagenUrl: imagen,
    title: "Foto 1"
  };

  const misTecnologias = [
    {
      frontend: 'HTML5-CSS3-JavaScript',
      conocimiento: 'Medio',
      id: 1,
      desarrollas: false
    },
    {
      frontend: 'React-Angular',
      conocimiento: 'Basico-Medio',
      id: 2,
      desarrollas: true
    },
    {
      backend: 'NodeJS-ExpressJS-MongoDB',
      conocimiento: 'Medio',
      id: 3,
      desarrollas: true
    },
    {
      backend: 'PHP-MySQL',
      conocimiento: 'Medio',
      id: 4,
      desarrollas: false
    }
  ]; 

  const mapeoLenguajes = misTecnologias.map(tech => {

    <li key={tech.id}
      style={{
        fontStyle: tech.desarrollas ? 'lightblue' : 'gray'
      }}
    >
      {tech.frontend || tech.backend}
    </li>

  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="navbar">
        <Nav />
      </div>

      <h1>Un poco de todo</h1>

      <div className="routing">
        {/* <Routing /> */}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>

      <section id="content">
        <h3>{usuario.name}</h3>
        <img 
          src={usuario.imagenUrl} 
          alt={usuario.title}
          className='content-imagen-uno' 
        />
      </section>

      <section id="mapeo-lenguajes">
        <ul>{mapeoLenguajes}</ul>
      </section>

      <p className="read-the-docs">
        Jeremías F.M | 2024 &copy;
      </p>

      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App
