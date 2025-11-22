import { Link } from 'react-router-dom';
import popcorn from '../assets/popcorn.svg';
import './Header.css';
function Header() {
    return (
        <>
            <nav className="header-container">
                <div className="logo-name">
                    <img src={popcorn} alt="" />
                    <h1>Movie Search</h1>
                </div>
                <div className="header-links">
                    <Link to="/"><h1>Home</h1></Link>
                    <Link to="/Favorites"><h1>Favorites</h1></Link>
                </div>
            </nav>
        </>
    )
}
export default Header;