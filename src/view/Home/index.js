import React, { useEffect, useState } from 'react';
import { getData } from 'store/requests/global';
import MovieBox from 'components/MovieBox';
import Header from 'components/Header';
import './style.scss';
import Loading from 'components/Loading';
import Button from 'components/Button';

function Home() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData({ url: '?apikey=ceb2ae86&s=movie' }).then((response) => {
      setMovies(response);
      setLoading(false);
    }).catch((error) => {
      setMovies(null);
      setLoading(false);
      console.log(error);
    });
  }, []);

  const moreMovie = () => {
    console.log('...')
  }

  return (
    <div className="home">
      <Header />
      {
        movies && movies.Search && movies.Search.map((movie) => {
          return (
            <MovieBox 
              key={movie.imdbID}
              movieData={movie}
            />
          )
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
        <div style={{
          textAlign: 'center',
          padding: '0 0 20px'
        }}>
          <Button
            onClick={moreMovie}
          >
            More Movie (+10)
          </Button>
        </div>
      }
    </div>
  );
}

export default Home;
