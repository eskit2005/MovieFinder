import './Card.css';
export default function Card({movie}){
    // let fullYear=movie.release_date.slice(0,4);
    return (
        <div className="card-container">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
            <h3>{movie.title} ({2025})</h3>
        </div>
    )
}