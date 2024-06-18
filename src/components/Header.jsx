import { Link } from "react-router-dom";
import logo from '../assets/Images/10.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Header = () => {
  return (
    <header>
      <div className="logo-container position-absolute top-0 start-0">
        <img src={logo} alt="Moonshine Animations" className="site-logo" />
      </div>
      <nav>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            The World
          </a>
          <ul className="dropdown-menu">
            <li><Link to='/characters' className="dropdown-item" >Characters</ Link></li>
            <li><Link to='/locations' className="dropdown-item" >Locations</Link></li>
            <li><Link to='/factions' className="dropdown-item" >Factions</Link></li>
          </ul>
        </li>
      </nav>
    </header>

  )
}


export default Header;