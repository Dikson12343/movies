import './styles.css';
import Header from './components/Header';
import Intro from './components/Intro';
import MoviesList from './components/MoviesList';
import Preferences from './components/Preferences';

export default function App(){
  return (
    <div className="container">
      <Header />
      <main>
        <Intro />
        <MoviesList />
        <Preferences />
      </main>
      <footer className="footer">Built with React + Vite</footer>
    </div>
  );
}
