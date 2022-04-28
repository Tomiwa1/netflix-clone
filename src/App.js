import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App bg-image" id="bg">
      <Router>
        <h1 className="display-4  text-uppercase" id="thic">
          Netflix
        </h1>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
