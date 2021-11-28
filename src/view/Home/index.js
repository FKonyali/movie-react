import React, { useEffect, useState } from 'react';
import { getData } from 'store/requests/global';
import MovieBox from 'components/MovieBox';
import Header from 'components/Header';
import './style.scss';
import Loading from 'components/Loading';

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
    </div>
  );
}

export default Home;
