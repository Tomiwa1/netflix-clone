import React from 'react';

const ExcitingMovies = ({ exciting }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div id="">
        {exciting.poster_path ? (
          <img src={`${imgPath}${exciting.poster_path}`} alt="" id="img" />
        ) : null}
        <h5>{}</h5>
      </div>
    </>
  );
};

export default ExcitingMovies;
