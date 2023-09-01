import React from "react";
import { Movies } from "./Movies";
import { Preloader } from "./Preloader";
import { Search } from "./Search";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  handleSearch = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;
    return (
      <main classNameNameName="container content ">
        <Search handleSearch={this.handleSearch} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
