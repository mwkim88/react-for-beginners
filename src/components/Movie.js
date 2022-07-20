import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        { <Link to={`/movie/${id}`}>{title}</Link> }
      </h2>
      <p>{summary}</p>
      <u1>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </u1>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
