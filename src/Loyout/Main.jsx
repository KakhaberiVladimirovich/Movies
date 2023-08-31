import React from "react";
import { Movies } from "./Movies";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=matrix`)
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;
    return (
      <main classNameNameName="container content ">
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <div> Loading...</div>
        )}
      </main>
    );
  }
}

export { Main };
