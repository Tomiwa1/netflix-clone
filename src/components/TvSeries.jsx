import React from 'react';

const TvSeries = ({ film }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div id="">
        {film.poster_path ? (
          <img src={`${imgPath}${film.poster_path}`} alt="" id="img" />
        ) : null}
        <h5>{}</h5>
      </div>
    </>
  );
};

export default TvSeries;
