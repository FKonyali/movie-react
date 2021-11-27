import { Link } from 'react-router-dom';
import React from 'react';
import './style.scss';
import Button from 'components/Button';

function MovieBox ({
  movieData
}) {
  return (
    <Link to={movieData.imdbID} class="movie-box">
      <div class="movie-box__top">
        <div class="movie-box__mtitle">
          {movieData.Title} ({movieData.Year})
        </div>
        <div class="movie-box__mpoint">
          <span class="movie-box__ptext">Point</span> 
          <span class="movie-box__pnumber"> 
            {parseInt(Math.random() * 5 + 5)}.
            {parseInt(Math.random() * 5 + 5)}
          </span>
        </div>
      </div>
      <div class="movie-box__bot">
        <div class="movie-box__poster">
          <img src={movieData.Poster} alt={movieData.Title} />
        </div>
        <div class="movie-box__detail">
          <div class="movie-box__p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum varius ultricies. Ut malesuada lobortis hendrerit. Aenean tincidunt cursus orci in auctor. 
            </p>
          </div>
          <Button
            style={
              {
                alignSelf: 'flex-end',
                padding: '13px 70px',
                borderRadius: '10px'
              }
            }
          >
            Detail
          </Button>
        </div>
      </div>
    </Link>
  )
}

export default MovieBox;
