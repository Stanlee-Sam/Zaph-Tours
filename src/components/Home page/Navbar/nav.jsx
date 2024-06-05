import './nav.css'

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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Trips</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="menu-btn">
                
            </div>

        </div>
    </nav>
   </header>
  )
}

export default Nav
