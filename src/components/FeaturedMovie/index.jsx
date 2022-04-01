import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedMovie.css';

const TWOHUNDRED = 200;

class FeaturedMovie extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, rating, year, genres, duration } = movie;

    let description = storyline;

    if (description.length > 100) {
      description = `${description.substring(0, TWOHUNDRED)}...`;
    }

    return (
      <section
        className="featured"
        style={ {
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${imagePath})`,
        } }
      >
        <div className="featured-vertical">
          <div className="featured-horizontal">
            <div className="featured-name">{ title }</div>
            <div className="featured-info">
              <div className="featured-points">{ `Rating: ${rating}` }</div>
              <div className="featured-year">{ year }</div>
              <div className="featured-duration">{ duration }</div>
            </div>
            <div className="featured-description">{ description }</div>
            <div className="featured-buttons">
              <a href="/" className="featured-watchbutton">► Assistir</a>
              <a href="/" className="featured-mylistbutton">+ Minha Lista</a>

            </div>
            <div className="featured-genre">
              <strong>Genres: </strong>
              {
                genres.join(', ')
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    year: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.string,
  }).isRequired,
};

export default FeaturedMovie;
