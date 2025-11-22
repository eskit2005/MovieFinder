import { useContext } from "react";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import { FavoriteContext } from "../../Context/FavoriteContext";
import './Favorite.css';
function Favorite() {
    const {favoriteMovieList,setFavoriteMovieList}=useContext(FavoriteContext);
    return (
        <>
            <Header />
            <h1 className="heading">Favorite Movies</h1>
            {favoriteMovieList.map((movie) => {
                return (
                    <Card movie={movie} key={movie.id} />
                )
            })}

        </>
    )
}

export default Favorite;