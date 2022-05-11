import React from 'react';
// import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div id="">
        {movie.poster_path ? (
          <img src={`${imgPath}${movie.poster_path}`} alt="" id="img" />
        ) : null}
        <h5>{}</h5>
      </div>
    </>
  );
};

export default MovieCard;
