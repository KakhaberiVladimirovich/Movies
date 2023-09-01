import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      this.props.handleSearch(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field  search-input">
          <input
            className="validate "
            type="search"
            placeholder="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.handleSearch(this.state.search)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
