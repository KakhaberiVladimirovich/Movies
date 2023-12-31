/* eslint-disable jsx-a11y/alt-text */
function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card ">
      <div className="card-image waves-effect waves-block waves-light movie">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://placehold.co/300x500?text=${title}`}
          />
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
