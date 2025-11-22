import { useState } from "react";
import { Link } from "react-router-dom";
import popcorn from "../assets/popcorn.svg";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="header-container">
            <div className="logo-name">
                <img src={popcorn} alt="" />
                <h1>Movie Search</h1>
            </div>

            <button 
                className="menu-toggle" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <div className={`header-links ${menuOpen ? "open" : ""}`}>
                <Link to="/" ><h1>Home</h1></Link>
                <Link to="/Favorites" onClick={() => setMenuOpen(false)}><h1>Favorites</h1></Link>
            </div>
        </nav>
    );
}

export default Header;
