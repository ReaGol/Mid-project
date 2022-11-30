import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import logoeaty from "../assets/logoeaty.png"

function Header() {
  return (
    <header className='header'>
      <Link to='/homepage'>
        <img className='logo' src={logoeaty} alt='logo' />
      </Link>

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
