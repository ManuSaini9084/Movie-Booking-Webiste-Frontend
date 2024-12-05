import { useEffect, useState } from "react";
import { CollectionCard } from "../../../components/CollectionCard";
import HashLoader from "react-spinners/HashLoader";

export const HomeCollection = () => {
  const override = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching static data
    const fetchData = async () => {
      try {
        // Static data structure
        const staticMovieData = [
          {
            id: 1,
            name: "Spider-Man: Across the Spider-Verse",
            image_path: "/Images/movies/spiderman.webp",
            rating: 8.8,
            duration: "2h 16m",
            release_date: "2023-06-23",
            genres: "Action, Animation",
          },
          {
            id: 2,
            name: "Extraction 2",
            image_path: "/Images/movies/extraction2.webp",
            rating: 7,
            duration: "2h 3m",
            release_date: "2023-06-13",
            genres: "Action, Thriller",
          },
          {
            id: 3,
            name: "Murder Mystery 2",
            image_path: "/Images/movies/murderMystery.webp",
            rating: 5.7,
            duration: "1h 30m",
            release_date: "2023-03-31",
            genres: "Comedy, Mystery",
          },
          {
            id: 4,
            name: "Mission: Impossible – Dead Reckoning Part One",
            image_path: "/Images/movies/missionImpossible.webp",
            rating: 8,
            duration: "2h 43m",
            release_date: "2023-07-10",
            genres: "Action, Thriller",
          },
          {
            id: 5,
            name: "Oppenheimer",
            image_path: "/Images/movies/oppenheimer.webp",
            rating: 9.4,
            duration: "3h",
            release_date: "2023-07-21",
            genres: "Drama, History",
          },
          {
            id: 6,
            name: "Barbie",
            image_path: "/Images/movies/barbie.webp",
            rating: 7.6,
            duration: "1h 54m",
            release_date: "2023-07-21",
            genres: "Comedy, Drama",
          },
        ];

        // Simulate loading time
        setTimeout(() => {
          setMovieData(staticMovieData);
          setLoading(false);
        }, 1000); // 1 second delay for loading simulation
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const latestMoviesCards = movieData.map((latestMovie) => {
    return <CollectionCard key={latestMovie.id} {...latestMovie} />;
  });

  const latestMovieCardsDouble = movieData.map((latestMovie) => {
    return <CollectionCard key={latestMovie.id + 6} {...latestMovie} />;
  });

  return (
    <section className="section-home-collection" id="nowShowing">
      <div className="home-collection-heading-container">
        <h1 className="heading-secondary heading-collection">
          Now Playing &rarr;
        </h1>
      </div>

      {loading && <HashLoader cssOverride={override} color="#eb3656" />}
      {!loading && (
        <div className="home-collection-container">
          <div className="home-collection-inner">{latestMoviesCards}</div>
          <div className="home-collection-inner">{latestMovieCardsDouble}</div>
        </div>
      )}
    </section>
  );
};
