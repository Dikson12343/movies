import MovieCard from './MovieCard';

const movies = [
  {
    title: 'Inception',
    genre: 'Sci-Fi / Thriller',
    why: 'Masterful concept, tight pacing, and thought-provoking finale.'
  },
  {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    why: 'Powerful themes of hope and friendship with brilliant performances.'
  },
  {
    title: 'The Grand Budapest Hotel',
    genre: 'Comedy / Drama',
    why: 'Stylish visuals, quirky humor, and a delightful ensemble.'
  },
  {
    title: 'Interstellar',
    genre: 'Sci-Fi / Drama',
    why: 'Emotional story about love and sacrifice with awe-inspiring visuals.'
  }
];

export default function MoviesList(){
  return (
    <section className="movies-list">
      <h2>My Top Picks</h2>
      <div className="grid">
        {movies.map(m => <MovieCard key={m.title} {...m} />)}
      </div>
    </section>
  );
}
