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
                    <a href="#"><h1>Home</h1></a>
                    <a href="#"><h1>Favourites</h1></a>
                </div>
            </nav>
        </>
    )
}
export default Header;