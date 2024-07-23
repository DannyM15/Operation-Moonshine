import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './pages/Characters.jsx';
import Locations from './pages/Locations.jsx';
import Factions from './pages/Factions.jsx';
import VAs from './pages/VAs.jsx';
import Store from './pages/Store.jsx';
import Vtubers from './pages/VTubers.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
   { 
     index: true,
    element: <HomePage />
   },{
    path: '/characters',
    element: <Characters />
   },{
    path:'/locations',
    element: <Locations />
   },{
    path: '/factions',
    element: <Factions />
   },{
    path: '/Vtubers',
    element: <Vtubers />
   },{
    path: '/VAs',
    element: <VAs />
   },{
    path: '/store',
    element: <Store />
   }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
