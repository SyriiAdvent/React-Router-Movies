import React from 'react';
import { Link,Route } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      // <span className="saved-movie">{movie.title}</span>
      <span className="saved-movie" style={{ textDecoration: "none", color: "Black" }}>
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none", color: "Black" }}>
          {movie.title}
        </Link>
        </span>
    ))}
    <div className="home-button">
      <Link style={{ textDecoration: "none", color: "Black" }} to='/'>Home</Link>
    </div>
  </div>
);

export default SavedList;
