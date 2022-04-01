import React, { useEffect, useState } from 'react';
import './Header.css';

const TEN = 10;
const Header = () => {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > TEN) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  return (
    <header className={ `header ${blackHeader ? 'black' : ''}` }>
      <h1 className="movie-card-header">Movie Cards Library</h1>
    </header>
  );
};

export default Header;
