import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch, useSelector } from "react-redux";
import { setMovie } from "../../../reducers/cartSlice";

export const MovieSelector = ({ paymentOngoing }) => {
  const override = {
    display: "block",
    margin: "1.6rem auto",
  };

  const [loading, setLoading] = useState(false);

  const { movie_id: userMovieId } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // Static movie data with correct image paths
  const staticMovies = [
    {
      id: "1",
      movie_name: "Spider-Man: Across the Spider-Verse",
      image_path: "/Images/movies/spiderman.webp",
    },
    {
      id: "2",
      movie_name: "Extraction 2",
      image_path: "/Images/movies/extraction2.webp",
    },
    {
      id: "3",
      movie_name: "Murder Mystery 2",
      image_path: "/Images/movies/murderMystery.webp",
    },
    {
      id: "4",
      movie_name: "Mission: Impossible – Dead Reckoning Part One",
      image_path: "/Images/movies/missionImpossible.webp",
    },
    {
      id: "5",
      movie_name: "Oppenheimer",
      image_path: "/Images/movies/oppenheimer.webp",
    },
    {
      id: "6",
      movie_name: "Barbie",
      image_path: "/Images/movies/barbie.webp",  // Replace with actual path if needed
    },
  ];

  const movieOptions = staticMovies.map((movie, idx) => {
    return (
      <div className="movie-input-container" key={idx}>
        <input
          disabled={loading || paymentOngoing}
          type="radio"
          id={idx}
          name="Select Movie"
          value={movie.id}
          onChange={(e) => dispatch(setMovie(e.target.value))}
          checked={movie.id === userMovieId}
        />

        <label className="form-movie-detail" htmlFor={idx}>
          <div className="movie-option-box">
            <div className="movie-option-img-box">
              <img
                src={movie.image_path}
                className="movie-option-img"
                alt={movie.movie_name}
              />
            </div>

            <div>
              <p className="movie-option-name">{movie.movie_name}</p>
            </div>
          </div>
        </label>

        <div
          className="checkmark-icon"
          style={{ zIndex: userMovieId === movie.id && 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="movie-selector-icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
            />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form>
        <div className="form-item-heading">Select a movie</div>
        {loading && <HashLoader cssOverride={override} color="#eb3656" />}
        {!loading && <div className="form-movie-options">{movieOptions}</div>}
      </form>
    </div>
  );
};
