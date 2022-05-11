import React from 'react';
// import YouTube from 'react-youtube';

function Jumbotron({ movie }) {
  const imgPath = 'https://image.tmdb.org/t/p/original';
  return (
    <div style={{ overflow: 'hidden' }}>
      {movie.poster_path ? (
        <div
          style={{
            // width: '100vw',
            height: '100vh',
            // objectFit: '',
            // objectPosition: '100% 100%'
            backgroundImage: `url(${imgPath}${movie.backdrop_path})`,
            backgroundColor: 'red',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top-center'
          }}
          id="jumboPhone"
        >
          <div className="text-white position-absolute bottom-0 start-0 py-5 px-5">
            {/* <YouTube /> */}

            <h1 className="text-uppercase fw-bold">{movie.title}</h1>
            <p>{movie.overview}</p>
            <button className="btn btn-outline-light">Play Trailer</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Jumbotron;
