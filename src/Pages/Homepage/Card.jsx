import './Card.css';
function Card({movie}){
    let fullYear=movie.release_date.slice(0,4);
    return (
        <div className="card-container">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
            <h3>{movie.title} ({fullYear})</h3>
        </div>
    )
}

export default Card;