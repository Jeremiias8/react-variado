// import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from '../src/App';

import { Nav } from '../../components/Navbar';
import { Arrays } from '../src/components/Arrays';
import { Clases } from '../src/components/Clases';
import { Constructors } from '../src/components/Constructors';
import { Footer } from '../src/components/Footer';

export const Routing = () => {

  return (
    <div>
        <BrowserRouter>

            <Nav />

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<App />} />
                <Route path="/arrays" element={<Arrays />} />
                <Route path="/classes" element={<Clases />} />
                <Route path="/constructors" element={<Constructors />} />
                <Route path="*" element={
                  <h1>Error 404 - Solicita otra ruta</h1>
                } />
            </Routes>    

        </BrowserRouter>
    </div>
  )

}
