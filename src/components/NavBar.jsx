import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
    console.log("NavBar is rendered");
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="site-title">MovieBox</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar;