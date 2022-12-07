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
import Tickets2 from "./routes/tickets/Tickets2";
import Tickets1 from "./routes/tickets/Tickets2";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "tickets-number/",
    element: <Tickets1 />,
  },
  {
    path: "tickets-arena/",
    element: <Tickets2 />,
  },
  {
    path: "app/",
    element: <ErrorPage />,
  },

 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <RouterProvider router={router} />
  </React.StrictMode>
)
