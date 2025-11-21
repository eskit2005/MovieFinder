import './Card.css';
function Card({movie}){
    let fullYear=movie.release_date.slice(0,4);
    return (
        <div className="card-container">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
            <div className="details">
                <h3>{movie.title} ({fullYear})</h3> 
                <p><i><b>⭐ {movie.vote_average.toFixed(2)}</b></i></p>
            </div>
        </div>
    )
}

export default Card;