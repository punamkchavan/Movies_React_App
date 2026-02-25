import './MoviesList.css';

export default function MoviesList({ movies }) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <li key={movie.id} className="card">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p>{movie.openingText}</p>
        </li>
      ))}
    </ul>
  );
}