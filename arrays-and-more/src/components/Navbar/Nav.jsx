import React from 'react'
import '../../index.css';
// import { Navigate } from 'react-router-dom'

export const Nav = () => {

    const [move, setMove] = React.useState();

  return (
    <div className="nav__container">
        <nav>
            <ul>
                <li> Arrays</li>
                <li> Clases</li>
                <li> Constructores</li>
            </ul>

            {/*  
              <Navigate to="/arrays" />
              <Navigate to="/classes" />
              <Navigate to="/constructors" />
            */}
        </nav>
    </div>
  )

}
