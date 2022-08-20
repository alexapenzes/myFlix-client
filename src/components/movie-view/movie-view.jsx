import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { Link } from "react-router-dom";

import "./movie-view.scss";

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  addFavoriteMovie(e) {
    const { movie } = this.props;
    e.preventDefault();
    axios
      .post(
        `https://ap-myflix.herokuapp.com/users/${localStorage.getItem(
          "user"
        )}/Movies/${movie._id}`,
        { username: localStorage.getItem("user") },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        alert(`${movie.Title} successfully added to your favorites`);
      })
      // .then(res => {
      //   window.open(`/users/${localStorage.getItem('user')}`)
      // })
      .then((res) => {
        document.location.reload(true);
      })
      .catch((error) => {
        alert(`${movie.Title} not added to your favorites` + error);
      });
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Card.Header>
          <Card.Img variant="top" src={movie.ImagePath} />
        </Card.Header>
        <Card.Body className="movie-view-title">
          <h1>{movie.Title}</h1>
        </Card.Body>
        <Card.Body>
          <h4>Genre</h4>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <h4 className="genre-link link">{movie.Genre.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Director</h4>
          <Link to={`/directors/${movie.Director.Name}`}>
            <h4 className="director-link link">{movie.Director.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Description:</h4>
          {movie.Description}
        </Card.Body>

        <Card.Footer>
          <Button
            className="movie-view-button"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
          {` `}
          <Button
            variant="outline-primary"
            className="movie-view-button"
            value={movie._id}
            onClick={(e) => this.addFavoriteMovie(e, movie)}
          >
            Add to Favourites
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
