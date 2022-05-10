import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App bg-image">
      <Router>
        <h1
          style={{ background: 'transparent' }}
          className="display-4  text-uppercase position-absolute"
          id="thic"
        >
          Netflix
        </h1>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/movies" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
