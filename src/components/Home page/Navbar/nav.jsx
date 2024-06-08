import './nav.css'
import { Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);
const Nav = () => {
  return (
   <header>
    <nav>
        <div className="nav-container">
            <div className="nav-menu">
                <div className="title">
                    <h1>Zaph Tours</h1>
                </div>
                <ul className="nav-links">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                    <Link to="/trips">Trips</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="menu-btn">
            <FontAwesomeIcon icon="bars" />            
            </div> */}

        </div>
    </nav>
   </header>
  )
}

export default Nav
