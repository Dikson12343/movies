export default function MovieCard({ title, genre, why }) {
  return (
    <article className="movie-card">
      <h3>{title}</h3>
      <p className="genre">{genre}</p>
      <p className="why">{why}</p>
    </article>
  );
}
