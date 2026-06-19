import Home from './pages/Home';
import './css/App.css';

import { Routes, Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {
  const movieNumber = 2;

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
