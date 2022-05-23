import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Movie from './components/Movie'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
