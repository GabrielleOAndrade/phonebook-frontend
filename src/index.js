import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

//1- configurando router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';
import Home from './routes/Home';
import Editar from './routes/Editar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/:id',
        element: <Editar />
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/contato',
        element: <Contato />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
