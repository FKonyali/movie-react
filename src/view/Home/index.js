import React, { useEffect, useState } from 'react';
import { getData } from 'store/requests/global';
import MovieBox from 'components/MovieBox';
import Loading from 'components/Loading';
import Button from 'components/Button';
import './style.scss';

let page = 1;

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData({ url: '?apikey=ceb2ae86&s=movie' }).then((response) => {
      setMovies([response]);
      setLoading(false);
    }).catch((error) => {
      setMovies(null);
      setLoading(false);
      console.log(error);
    });
  }, []);

  const moreMovie = () => {
    page++;
    setLoading(true);
    getData({ url: `?apikey=ceb2ae86&s=movie&page=${page}` }).then((response) => {
      setMovies([...movies, response]);
      setLoading(false);
    }).catch((error) => {
      setMovies(null);
      setLoading(false);
      console.log(error);
    });
  }

  return (
    <div className="home">
      {
        movies && movies.map((item) => {
          return item.Search.map((movie) => {
            return (
              <MovieBox 
                key={movie.imdbID}
                movieData={movie}
              />
            )
          })
        })
      }
      {
        loading && (
          <Loading
            loading={true} 
            style={
              {
                width: '60px', 
                height: '60px', 
                margin: '0 auto'
              }
            }
          />
        )
      }
      {
        !loading &&
        <div style={{
          textAlign: 'center',
          padding: '0 0 20px'
        }}>
          <Button
            onClick={moreMovie}
            disabled={loading}
          >
            More Movie (+10)
          </Button>
        </div>
      }
    </div>
  );
}

export default Home;
