import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './sass/_global.scss';

import Header from './components/header';
import ErrorPage from './pages/Error';
import Login from './pages/login';
import Home from './pages/home';
import Resume from './pages/resume';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'resume',
    element: <Resume />,
  },
]);

function App() {
  return (
    <>
      <div className='container grid'>
        <Header />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;