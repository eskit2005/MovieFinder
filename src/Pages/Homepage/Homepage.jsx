import { useState, useEffect, createContext } from 'react';
import Header from '../../Components/Header.jsx';
import Herosection from './Herosection.jsx';
import Search from './Search.jsx';
import Card from './Card.jsx';
import './Homepage.css';

export const SearchContext = createContext(null);

function Homepage() {
    const [movieList, setMovieList] = useState([]);
    const [popularMovieList, setPopularMovieList] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState([false]);
    const [error, setError] = useState("");
    const URL = 'https://api.themoviedb.org/3';
    const API_KEY = '68249dbc79f675fdde167aced2b632b8';

    useEffect(() => { //getting popular movie list
        async function gettingPopularMovies() {
            try {
                const response = await fetch(`${URL}/movie/popular?api_key=${API_KEY}`);
                if (!response.ok) throw new Error("Http error")
                const data = await response.json();
                console.log(data.results);
                setPopularMovieList(data.results);
            }
            catch (err) {
                setError("Https error");
            }
        }
        gettingPopularMovies();

    }, [])

    useEffect(() => {
        setLoading(true);
        async function searchMovies() {
            let searchquery = inputText.trim();
            if (!searchquery) {  // skip empty input
                setMovieList([]);
                setError("");     // clear previous errors
                return;
            }
            try {
                const response = await fetch(
                    `${URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
                        searchquery
                    )}`
                );
                if (!response.ok) throw new Error("Http error")
                const data = await response.json();
                console.log(data.results);
                setMovieList(data.results);
                if (data.results.length === 0) setError("No movies were found");
                else {
                    setError("");
                }
            }
            catch (err) {
                console.error(err);
                setError("Not movies were found");
            }
            finally {
                setLoading(false);
            }
        }
        searchMovies();
    }, [inputText]);

    return (
        <>
            <Header />
            {/* <Herosection/> */}
            <SearchContext value={{ inputText, setInputText }}>
                <Search />
            </SearchContext>
            {(error) && <div className='error'>{error}</div>}
            {(inputText) ? (
                (loading) ? <div className="loading">Loading...</div> : (
                    <div className="cards-grid">
                        {movieList.map((movie) => (
                            <Card movie={movie} key={movie.id} />
                        ))}
                    </div>
                )
            ) : (
                <div className="cards-grid">
                    {popularMovieList.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    ))}
                </div>
            )}



        </>
    )
}
export default Homepage;