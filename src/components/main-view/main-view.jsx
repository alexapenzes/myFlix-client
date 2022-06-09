import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        { 
          _id: '628272d2857356b210e6a964', 
          Title: 'Inception', 
          Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
          Director: {
            Name: 'Christopher Nolan',
            Bio: 'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.',
            Birth: '1970',
          },
          ImagePath: 'https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_original_film_art_b7dd1f8a-242f-44ac-917f-220972bfe6f7_1200x.jpg?v=1618884901',
          Featured: true,
          Genre: {
            Name: 'Action',
            Description: 'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.',
          },
        },
        { 
          _id: '62826be8857356b210e6a961',
          Title: 'Harry Potter and the Prisoner of Azkaban',
          Description: "The film centers on the escape of the sinister Sirius Black (Gary Oldman) from Azkaban Prison; Sirius was convicted in Voldemort's plot to murder Harry's parents, and now it's suspected he must finish the job by killing Harry.",
          Director: {
            Name: 'Alfonso Cuaron',
            Bio: 'Alfonso Cuarón Orozco is an Academy Award-nominated Mexican film director, screenwriter and film producer, best known for, Children of Men, Harry Potter and the Prisoner of Azkaban, Y tu mamá también, and A Little Princess. Cuarón was born in México City.',
            Birth: '1961',
          },
          ImagePath: 'https://cdn.europosters.eu/image/1300/art-photo/harry-potter-the-prisoner-of-azkaban-i105075.jpg',
          Featured: false,
          Genre: {
            Name: 'Fantasy',
            Description: 'Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore.',
          },
        },
        { 
          _id: '62827377857356b210e6a965',
          Title: 'The Devil Wears Prada',
          Description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine. A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.',
          Director: {
            Name: 'David Frankel',
            Bio: 'David Frankel is an American film director, screenwriter, and producer. Most known as the director of 2006 film, The Devil Wears Prada, he is an executive producer and the director of the first and fourth episodes of the Netflix miniseries Inventing Anna (2022).',
            Birth: '1959',
          },
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg',
          Featured: false,
          Genre: {
            Name: 'Comedy',
            Description: 'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.',
          },
        },
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
        ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
        : movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}

export default MainView;