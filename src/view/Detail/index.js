import { useHistory, useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getData } from 'store/requests/global';
import Loading from 'components/Loading';
import Button from 'components/Button';
import Image from 'components/Image';
import './style.scss';

function Detail() {
  const history = useHistory();

  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const getParams = useParams();

  useEffect(() => {
    getData({ url: `?apikey=ceb2ae86&i=${getParams.id}` }).then((response) => {
      setMovieDetail(response);
      setLoading(false);
    }).catch((error) => {
      setMovieDetail(null);
      setLoading(false);
      console.log(error);
    });
  }, []);

  const goBack = () => {
    history.goBack();
  }
  
  return (
    <article className="content">
      <Button
        onClick={goBack}
        style={
          {
            padding: '10px'
          }
        }
      >
        Go Back
      </Button>
      <div className="content__container">
        {
          movieDetail && movieDetail.Response ? (
            <>
              <div className="content__info">
                <ul>
                  <li>
                    <span>Imdb Point:</span> { movieDetail.imdbRating }
                  </li>
                  <li>
                    <span>Vision Year:</span> { movieDetail.Year }
                  </li>
                  <li>
                    <span>Runtime:</span> { movieDetail.Runtime }
                  </li>
                  <li>
                    <span>Category:</span> { movieDetail.Genre }
                  </li>
                  <li>
                    <span>Director:</span> { movieDetail.Director }
                  </li>
                  <li>
                    <span>Writer:</span> { movieDetail.Writer }
                  </li>
                  <li>
                    <span>Actors:</span> { movieDetail.Actors }
                  </li>
                  <li>
                    <span>Language:</span> { movieDetail.Language }
                  </li>
                  <li>
                    <span>Country of origin:</span> { movieDetail.Country }
                  </li>
                </ul>
              </div>
              <div className="content__poster">
                <Image src={movieDetail.Poster} alt={movieDetail.Title} />
              </div>
            </>
          ) : (
            movieDetail &&
            <div> { movieDetail.split('Error":"')[1].replaceAll('}','') } </div>
          )
        }
        {
          loading && (
            <Loading
              loading={true} 
              style={
                {
                  width: '60px', 
                  height: '60px', 
                  margin: '50px auto'
                }
              }
            />
          )
        }
      </div>
    </article>
  )
}

export default Detail;
