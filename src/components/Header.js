import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt='logo' />
      <nav>
        <ul>
          <li></li>
          <li>
            <Link to='/homepage'>Homepage</Link>
          </li>
          {/* <li>
            <Link to='/dishes'>Dishes</Link>
          </li> */}
          {/* <li>
            <Link to='/dishes/add'>New Dish</Link>
          </li> */}
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
