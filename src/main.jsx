import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from "./error-page";
import AreaDetails from './routes/tickets/form/AreaDetails'
import Form from './routes/tickets/form/Form';
import TicketsDetails from './routes/tickets/form/TicketsDetails';
import Basket from './routes/tickets/form/Basket';



function addToCart() {
  console.log('add to cart')
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "form/*",
    element: <Form />,
    children: [
      {
        path: "tickets-details/",
        element: <TicketsDetails />,
      },
    ],
  },

  {
    path: "app/",
    element: <ErrorPage />,
  },
  {
    path: "area-details/",
    element: <AreaDetails />,
  },

 

 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <RouterProvider router={router} />
  </React.StrictMode>
)

