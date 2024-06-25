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
      <nav className="navbar link-warning navbar-expand-lg navbar-primary position-absolute top-0 end-0 w-75 p-3 d-flex justify-content-around ">
        <ul className="nav-item dropdown">
          <a className="nav-Link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            The World
          </a>
          <ul className="dropdown-menu">
            <ul><Link to='/characters' className="dropdown-item" >Characters</Link></ul>
            <ul><Link to='/locations' className="dropdown-item" >Locations</Link></ul>
            <ul><Link to='/factions' className="dropdown-item" >Factions</Link></ul>
          </ul>
        </ul>
        <ul className="nav-item dropdown">
          <a className="nav-Link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            The Team
          </a>
          <ul className="dropdown-menu">
            <ul><Link to='/Vtubers' className="dropdown-item" >Part-Time Super Terrorists</ Link></ul>
            <ul><Link to='/VAs' className="dropdown-item" >Voice Actors</Link></ul>
          </ul>
        </ul>
        <ul><Link to='/store' className="" >Store</Link></ul>
        <ul><Link to='/patreon' className="" >Patreon</Link></ul>
        <ul className="nav-item dropdown">
          <a className="nav-Link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Socials
          </a>
          <ul className="dropdown-menu">
            <ul><Link to='' className="dropdown-item" >Twitter</ Link></ul>
            <ul><Link to='' className="dropdown-item" >Instagram</Link></ul>
            <ul><Link to='' className="dropdown-item" >Youtube</Link></ul> 
            <ul><Link to='' className="dropdown-item" >NewGrounds?</Link></ul> 

          </ul>
        </ul>
      </nav>
    </header>

  )
}


export default Header;