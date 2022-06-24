import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div id='movie-card'>
      <Card className='movie-card'>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text className='description'>{movie.Description}</Card.Text>
          <Button className='open' onClick={() => onMovieClick(movie)} variant="link">Open</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};