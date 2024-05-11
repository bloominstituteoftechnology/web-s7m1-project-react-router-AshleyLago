export default function MovieCard ({ movie, onClick, detailed = false }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      {detailed && movie.stars && (
        <>
          <h3>Actors</h3>
          {movie.stars.map(star => (
            <div key={star} className="movie-star">{star}</div>
          ))}
        </>
      )}
    </div>
  );
}
