import { useEffect, useState } from 'react';
import './netflix.css';
import MovieCard from './MovieCard';
import axios from 'axios';
import Jumbotron from './Jumbotron';
import TvSeries from './TvSeries';
import YouTube from 'react-youtube';
import ExcitingMovies from './ExcitingMovies';

function Movie() {
  const API_URL = 'https://api.themoviedb.org/3';
  const [movies, setMovies] = useState([]);
  const [films, setFilms] = useState([]);
  const [exciting, setExciting] = useState([]);
  const [loading, setLoading] = useState(false);
  const [random, setRandom] = useState({});
  // const [selectMovies, setSelectMovies] = useState({});
  const [searchKey, setSearchKey] = useState('');
  // SCROLLING THROUGH MOVIES
  const movieScrollRight = () => {
    document.getElementById('carousel').scrollLeft += 800;
  };
  const movieScrollLeft = () => {
    document.getElementById('carousel').scrollLeft -= 800;
  };
  const filmScrollRight = () => {
    document.getElementById('carousel2').scrollLeft += 800;
  };
  const filmScrollLeft = () => {
    document.getElementById('carousel2').scrollLeft -= 800;
  };
  const excitingScrollRight = () => {
    document.getElementById('carousel3').scrollLeft += 800;
  };
  const excitingScrollLeft = () => {
    document.getElementById('carousel3').scrollLeft -= 800;
  };
  // USING THE TRENDING MOVIES API
  const fetchMovies = async () => {
    setLoading(true);
    const {
      data: { results }
    } = await axios.get(`${API_URL}/trending/all/day`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        page: 5
      }
    });
    setMovies(results);

    setLoading(false);
  };
  // USING JUMBOTRON MOVIES API
  const fetchMovie = async () => {
    const {
      data: { results }
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        include_video: true
      }
    });
    // setSelectMovies(results[parseInt(Math.random() * 19)]);
    setRandom(results[parseInt(Math.random() * 19)]);
  };
  // USING TV SERIES API
  const fetchSeries = async () => {
    // const type = searchKey ? 'search' : 'discover';
    const {
      data: { results }
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        page: 10
        // query: searchKey
      }
    });
    setFilms(results);
  };

  // FETCH EXCITING MOVIES
  const fetchExciting = async () => {
    // const type = searchKey ? 'search' : 'discover';
    const {
      data: { results }
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        page: 30
        // query: searchKey
      }
    });
    setExciting(results);
  };
  // GETTING JUMBOTRON VIDEO TO PLAY API
  // const PlayMovie = async (id) => {
  //   const { data } = await axios.get(`${API_URL}/movie/${id}`, {
  //     params: {
  //       api_key: process.env.REACT_APP_MOVIE_API_KEY
  //     }
  //   });
  //   return data;
  // };

  // const trailer = async (id) => {
  //   const data = await PlayMovie(movie.id);
  //   console.log('movie data', data);
  //   setRandom(movie);
  // };
  useEffect(() => {
    fetchMovie();
    fetchMovies();
    fetchSeries();
    fetchExciting();
  }, []);

  // RENDERING MOVIES TO THE DOCUMENT
  const renderMovies = () => {
    return (
      <div
        style={{
          background: 'black',
          paddingTop: '180px',
          color: 'white'
        }}
      >
        <div style={{ marginTop: '-160px' }}>
          {/* TRENDING Now */}
          <h5 className="text-start">Trending now</h5>
          <div
            id="carousel"
            className="d-flex gap-3 overflow-hidden"
            style={{
              position: 'auto'
            }}
          >
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
            <button
              className="bg-dark text-white"
              style={{
                position: 'absolute',
                top: '100',
                right: '0',
                opacity: '50%',
                height: '272px'
              }}
              onClick={movieScrollRight}
            >
              <i className="fas fa-angle-right px-3 py-1 " />
            </button>
            <button
              className="bg-dark text-white"
              style={{
                position: 'absolute',
                top: '100',
                left: '0',
                opacity: '50%',
                height: '272px'
              }}
              onClick={movieScrollLeft}
            >
              <i className="fas fa-angle-left px-3 py-1 " />
            </button>
          </div>
        </div>
        {/* TV SERIES */}
        <div>
          <h5>Tv series</h5>
          <div
            id="carousel2"
            className="d-flex gap-3 overflow-hidden"
            style={{
              position: 'auto'
            }}
          >
            {films.map((film) => {
              return <TvSeries key={film.id} film={film} />;
            })}
            <button
              className="bg-dark text-white"
              style={{
                position: 'absolute',
                top: '100',
                right: '0',
                opacity: '50%',
                height: '272px'
              }}
              onClick={filmScrollRight}
            >
              <i className="fas fa-angle-right px-3 py-1 " />
            </button>
            <button
              className="bg-dark text-white"
              style={{
                position: 'absolute',
                top: '100',
                left: '0',
                opacity: '50%',
                height: '272px'
              }}
              onClick={filmScrollLeft}
            >
              <i className="fas fa-angle-left px-3 py-1 " />
            </button>
          </div>
        </div>
        {/* EXCITING MOVIES */}
        <div>
          <h5>Exciting movies</h5>
          <div
            id="carousel3"
            className="d-flex gap-3 overflow-hidden"
            style={{
              background: 'black',
              position: 'auto'
            }}
          >
            {exciting.map((exciting) => {
              return <ExcitingMovies key={exciting.id} exciting={exciting} />;
            })}

            <button
              className="bg-dark text-white"
              style={{
                position: 'absolute',
                top: '100',
                right: '0',
                opacity: '50%',
                height: '272px'
              }}
              onClick={excitingScrollRight}
            >
              <i className="fas fa-angle-right px-3 py-1 " />
            </button>
            <button
              className="bg-dark text-white"
              style={{
                position: 'absolute',
                top: '100',
                left: '0',
                opacity: '50%',
                height: '272px'
              }}
              onClick={excitingScrollLeft}
            >
              <i className="fas fa-angle-left px-3 py-1 " />
            </button>
          </div>
        </div>
      </div>
    );
  };
  // SPINNER
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: '220px' }}
      >
        <div className="spinner-border text-info" id="spin" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  // search movies function
  const searchMovies = (e) => {
    e.preventDefault();
    // fetchSeries(searchKey);
  };
  // CALLING THE RENDER MOVIES FUNCTION
  return (
    <div style={{ background: 'black', minHeight: '100vh' }}>
      {/* SEARCHING FOR MOVIES */}
      <form
        onSubmit={searchMovies}
        className="position-absolute  end-0 py-4"
        style={{ marginTop: '40px' }}
      >
        <input
          type="text"
          className="form-control-sm"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-danger ">
          Search
        </button>
        <div className="text-info">{searchKey}</div>
      </form>
      {/* SEARCHING FOR MOVIES END */}
      <div>
        <Jumbotron movie={random} />
      </div>
      <div className="overflow-hidden">
        <div id="row" className="cotainer row overflow-hidden">
          {renderMovies()}
        </div>
      </div>
    </div>
  );
}

export default Movie;
