import { useState, useEffect } from 'react';
import Header from '../../Components/Header.jsx';
import Herosection from './Herosection.jsx';
import Search from './Search.jsx';
import Card from './Card.jsx';
import './Homepage.css';
function Homepage() {
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(false);
    const url = 'https://api.themoviedb.org/3';
    const api_key = '68249dbc79f675fdde167aced2b632b8';

    useEffect(() => { //getting popular movie list
        async function gettingPopularMovies() {
            try {
                const response = await fetch(`${url}/movie/popular?api_key=${api_key}`);
                if (!response.ok) throw new Error("Http error")
                const data = await response.json();
                setMovieList((prev)=>[...prev,data.results]);
                console.log(data.results);
            }
            catch (err) {
                setError(true);
            }
        }
        gettingPopularMovies();

    }, [])

    return (
        <>
            <Header />
            {/* <Herosection/> */}
            <Search />
            <div className="cards">
                {movieList.map((movie,index)=>{
                    return (
                        <Card movie={movie} key={index}/>
                    )
                })}
            </div>
            

        </>
    )
}
export default Homepage;