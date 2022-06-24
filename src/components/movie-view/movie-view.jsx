import React from "react";
import Card from "react-bootstrap/Card";

import "./movie-view.scss";

export class MovieView extends React.Component {
  
  render() {
    const { movie, onBackClick } = this.props;

    return (
        <Card className="movie-view">
          <Card.Header>
            <Card.Img variant="top" src={movie.ImagePath} />
          </Card.Header>
          <Card.Body className="movie-view-title">{movie.Title}</Card.Body>
          <Card.Body>Genre: {movie.Genre.Name}</Card.Body>
          <Card.Body>Director: {movie.Director.Name}</Card.Body>
          <Card.Body>Description:<br></br>{movie.Description}</Card.Body>
          <Card.Footer>
            <button
              className="movie-view-button"
              onClick={() => {
                onBackClick(null);
              }}
            >
              Back
            </button>
          </Card.Footer>
        </Card>
    );
  }
}
