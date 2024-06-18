import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
   { 
     index: true,
    element: <HomePage />
   }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
