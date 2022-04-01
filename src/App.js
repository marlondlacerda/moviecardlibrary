import React, { useEffect, useState } from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import loading from './images/loading1.gif';
import loadingMobile from './images/loadingmobile.gif';

const TWO_SECONDS = 2000;

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isCardsLoading, setIsCardsLoading] = useState(true);

  const index = Math.floor(Math.random() * movies.length);

  useEffect(() => {
    setInterval(() => {
      setMovieList(movies);
      setIsCardsLoading(false);
    }, TWO_SECONDS);
  });

  return (
    <div className="App">
      <Header />
      <FeaturedMovie movie={ movies[index] } />
      <div className="lists">
        <MovieList movies={ movieList } />
      </div>
      <Footer />

      {
        isCardsLoading
          && (
            <div className="loading">
              <img className="load-desktop" src={ loading } alt="loading" />
              <img className="load-mobile" src={ loadingMobile } alt="loading" />
            </div>
          )
      }
    </div>
  );
}

export default App;
