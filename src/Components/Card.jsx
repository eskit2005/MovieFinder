import { useContext } from 'react';
import { FavoriteContext } from '../Pages/Favorite/Favorite';
import './Card.css';
function Card({movie}){
    const[favoriteMovieList,setFavoriteMovieList]=useContext(FavoriteContext);
    
    const isFavorite=()=> (
        favoriteMovieList.some((favorite)=> favorite.id===movie.id)
    );

    function togglingFavorite(){
        if(isFavorite){
            setFavoriteMovieList((favoriteMovieList)=>favoriteMovieList.filter((favorite)=>favorite.id!=movie.id));
        }
        else{
            setFavoriteMovieList((favoriteMovieList)=>[...favoriteMovieList,movie]);
        }
    }


    let fullYear=movie.release_date.slice(0,4);
    return (
        <div className="card-container">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
            <div className="details">
                <h3>{movie.title} ({fullYear})</h3> 
                <p><i><b>☆ Rating {movie.vote_average.toFixed(2)}</b></i></p>
            </div>

            <div className={`favourite-btn${(isFavorite) ? 'clicked': ''}`}>
                <button></button>
            </div>
        </div>
    )
}

export default Card;