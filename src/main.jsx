import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from "./error-page";
import ArenaDetails from './routes/tickets/form/ArenaDetails'
import Form from './routes/tickets/form/Form';
import TicketsDetails from './routes/tickets/form/TicketsDetails';





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
    path: "form/",
    element: <Form />,
  },
  {
    path: "arena-details/",
    element: <ArenaDetails addToCart={addToCart} />,
  },
  {
    path: "app/",
    element: <ErrorPage />,
  },
  {
    path: "tickets-details/",
    element: <TicketsDetails />,
  },

 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <RouterProvider router={router} />
  </React.StrictMode>
)

