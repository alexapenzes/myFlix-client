import React from "react";
import Card from "react-bootstrap/Card";

import "./movie-view.scss";

export class MovieView extends React.Component {
  
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <Card>
          <Card.Header>
            {/* <Card.Img variant="top" src={movie.ImagePath} /> */}
          </Card.Header>
          <Card.Body>{movie.Title}</Card.Body>
          <Card.Body>Genre: {movie.Genre.Name}</Card.Body>
          <Card.Body>Director: {movie.Director.Name}</Card.Body>
          <Card.Body>Description: {movie.Description}</Card.Body>
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
      </div>
    );
  }
}
