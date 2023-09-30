// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route  path="/" Component={Home} />
        <Route path="/contacto" Component={Login} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
