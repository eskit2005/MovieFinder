import { createContext,useState } from "react";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import './Favorite.css';

export const FavoriteContext=createContext(null);
function Favorite(){
    const[favoriteMovieList,setFavoriteMovieList]=useState(null);
    return(
        <>
            <FavoriteContext value={{favoriteMovieList,setFavorteMovieList}}>
                <Card/>
            </FavoriteContext>
           
            <Header/>
            <h3 className="heading">Favorite Movies</h3>
            {favoriteMovieList.map((movie)=>{
                return (
                    <Card movie={movie} key={movie.id}/>
                )
            })}
        </>
    )
}

export default Favorite;