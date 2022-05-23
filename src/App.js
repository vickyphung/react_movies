import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home'
import Movie from './components/Movie'


function App() {

  const [movieId, setMovieId] = useState('')
  const navigate = useNavigate()
  
  const setIdAndLink = (id) => {
    setMovieId(id)
    navigate('/movie')
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setId={setIdAndLink} />} />
        <Route path="/movie" element={<Movie movieId={movieId} />} />
      </Routes>
    </div>
  );
}

export default App;
