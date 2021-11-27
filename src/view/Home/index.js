import Header from "components/Header";
import MovieBox from "components/MovieBox";
import React from "react";
import "./style.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <MovieBox movieData={{
  "Title": "The Lego Movie",
  "Year": "2014",
  "Rated": "PG",
  "Released": "07 Feb 2014",
  "Runtime": "100 min",
  "Genre": "Animation, Action, Adventure",
  "Director": "Christopher Miller, Phil Lord",
  "Writer": "Phil Lord, Christopher Miller, Dan Hageman",
  "Actors": "Chris Pratt, Will Ferrell, Elizabeth Banks",
  "Plot": "An ordinary LEGO construction worker, thought to be the prophesied as \"special\", is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.",
  "Language": "English, Turkish",
  "Country": "United States, Denmark, Australia",
  "Awards": "Nominated for 1 Oscar. 72 wins & 67 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.7/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
    },
    {
      "Source": "Metacritic",
      "Value": "83/100"
    }
  ],
  "Metascore": "83",
  "imdbRating": "7.7",
  "imdbVotes": "337,368",
  "imdbID": "tt1490017",
  "Type": "movie",
  "DVD": "17 Jun 2014",
  "BoxOffice": "$257,760,692",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}}/>
    </div>
  );
}

export default Home;
