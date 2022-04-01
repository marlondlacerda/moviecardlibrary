// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <img src={ imagePath } alt={ title } className="movie-card-image" />
          <div className="movie-card-header">
            <h4 className="movie-card-title">{ title }</h4>
            <div className="movie-card-rating">
              <Rating rating={ rating } />
            </div>
          </div>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
