import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShowtimesCard } from "./ShowtimesCard";

export const ShowTimesCollection = () => {
  const override = {
    display: "block",
    margin: "4.8rem auto",
  };

  const [showtimesData, setShowtimesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { name: theatreName } = useSelector((store) => store.currentLocation);
  const [searchParams] = useSearchParams();
  const userGenre = searchParams.get("genre") || "All";

  // Static data
  const staticShowtimesData = [
    { movie_name: "Spider-Man: Across the Spider-Verse", showtime_date: "2023-08-19", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Action", image_path: "/Images/movies/spiderman.webp", id: 1 },
    { movie_name: "Spider-Man: Across the Spider-Verse", showtime_date: "2023-08-19", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/spiderman.webp", id: 2 },
    { movie_name: "Spider-Man: Across the Spider-Verse", showtime_date: "2023-08-19", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/spiderman.webp", id: 3 },
    { movie_name: "Spider-Man: Across the Spider-Verse", showtime_date: "2023-08-20", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Action", image_path: "/Images/movies/spiderman.webp", id: 4 },
    { movie_name: "Spider-Man: Across the Spider-Verse", showtime_date: "2023-08-20", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/spiderman.webp", id: 5 },
    { movie_name: "Spider-Man: Across the Spider-Verse", showtime_date: "2023-08-20", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/spiderman.webp", id: 6 },
  
    { movie_name: "Extraction 2", showtime_date: "2023-08-19", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Action", image_path: "/Images/movies/extraction2.webp", id: 7 },
    { movie_name: "Extraction 2", showtime_date: "2023-08-19", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/extraction2.webp", id: 8 },
    { movie_name: "Extraction 2", showtime_date: "2023-08-19", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/extraction2.webp", id: 9 },
    { movie_name: "Extraction 2", showtime_date: "2023-08-20", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Action", image_path: "/Images/movies/extraction2.webp", id: 10 },
    { movie_name: "Extraction 2", showtime_date: "2023-08-20", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/extraction2.webp", id: 11 },
    { movie_name: "Extraction 2", showtime_date: "2023-08-20", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/extraction2.webp", id: 12 },
  
    { movie_name: "Murder Mystery 2", showtime_date: "2023-08-19", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Comedy", image_path: "/Images/movies/murderMystery.webp", id: 13 },
    { movie_name: "Murder Mystery 2", showtime_date: "2023-08-19", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Comedy", image_path: "/Images/movies/murderMystery.webp", id: 14 },
    { movie_name: "Murder Mystery 2", showtime_date: "2023-08-19", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Comedy", image_path: "/Images/movies/murderMystery.webp", id: 15 },
    { movie_name: "Murder Mystery 2", showtime_date: "2023-08-20", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Comedy", image_path: "/Images/movies/murderMystery.webp", id: 16 },
    { movie_name: "Murder Mystery 2", showtime_date: "2023-08-20", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Comedy", image_path: "/Images/movies/murderMystery.webp", id: 17 },
    { movie_name: "Murder Mystery 2", showtime_date: "2023-08-20", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Comedy", image_path: "/Images/movies/murderMystery.webp", id: 18 },
  
    { movie_name: "Mission: Impossible – Dead Reckoning Part One", showtime_date: "2023-08-19", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Action", image_path: "/Images/movies/missionImpossible.webp", id: 19 },
    { movie_name: "Mission: Impossible – Dead Reckoning Part One", showtime_date: "2023-08-19", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/missionImpossible.webp", id: 20 },
    { movie_name: "Mission: Impossible – Dead Reckoning Part One", showtime_date: "2023-08-19", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/missionImpossible.webp", id: 21 },
    { movie_name: "Mission: Impossible – Dead Reckoning Part One", showtime_date: "2023-08-20", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Action", image_path: "/Images/movies/missionImpossible.webp", id: 22 },
    { movie_name: "Mission: Impossible – Dead Reckoning Part One", showtime_date: "2023-08-20", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/missionImpossible.webp", id: 23 },
    { movie_name: "Mission: Impossible – Dead Reckoning Part One", showtime_date: "2023-08-20", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Action", image_path: "/Images/movies/missionImpossible.webp", id: 24 },
  
    { movie_name: "Oppenheimer", showtime_date: "2023-08-19", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Drama", image_path: "/Images/movies/oppenheimer.webp", id: 25 },
    { movie_name: "Oppenheimer", showtime_date: "2023-08-19", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Drama", image_path: "/Images/movies/oppenheimer.webp", id: 26 },
    { movie_name: "Oppenheimer", showtime_date: "2023-08-19", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Drama", image_path: "/Images/movies/oppenheimer.webp", id: 27 },
    { movie_name: "Oppenheimer", showtime_date: "2023-08-20", movie_start_time: "11:00 am", show_type: "2D", price_per_seat: 350, genre: "Drama", image_path: "/Images/movies/oppenheimer.webp", id: 28 },
    { movie_name: "Oppenheimer", showtime_date: "2023-08-20", movie_start_time: "2:30 pm", show_type: "3D", price_per_seat: 450, genre: "Drama", image_path: "/Images/movies/oppenheimer.webp", id: 29 },
    { movie_name: "Oppenheimer", showtime_date: "2023-08-20", movie_start_time: "6:00 pm", show_type: "3D", price_per_seat: 450, genre: "Drama", image_path: "/Images/movies/oppenheimer.webp", id: 30 }
  ];
  

  useEffect(() => {
    setLoading(true);

    // Use static data directly
    setShowtimesData(staticShowtimesData);

    setLoading(false);
  }, []);

  const movieShowtimes = [];

  for (let i = 0; i < showtimesData.length; i++) {
    const curMovieDate = showtimesData[i].showtime_date;
    const curMovieName = showtimesData[i].movie_name;
    const curMovieImagePath = showtimesData[i].image_path;
    const curMovieStartTime = showtimesData[i].movie_start_time;
    const curMovieType = showtimesData[i].show_type;
    const curMovieGenre = showtimesData[i].genre;
    const curMovieId = showtimesData[i].id;

    let isPresent = movieShowtimes.some(
      (movie) => movie.movie_name === curMovieName
    );

    if (isPresent) {
      let currentMovie = movieShowtimes.find(
        (movie) => movie.movie_name === curMovieName
      );

      if (!currentMovie.genre.includes(curMovieGenre)) {
        currentMovie.genre.push(curMovieGenre);
      }

      if (curMovieType in currentMovie) {
        if (curMovieDate in currentMovie[curMovieType]) {
          if (
            !currentMovie[curMovieType][curMovieDate].includes(
              curMovieStartTime
            )
          ) {
            currentMovie[curMovieType][curMovieDate].push(curMovieStartTime);
          }
        } else {
          currentMovie[curMovieType][curMovieDate] = [curMovieStartTime];
        }
      } else {
        currentMovie[curMovieType] = {
          [curMovieDate]: [curMovieStartTime],
        };
      }
    } else {
      movieShowtimes.push({
        id: curMovieId,
        movie_name: curMovieName,
        image_path: curMovieImagePath,
        genre: [curMovieGenre],
        [curMovieType]: {
          [curMovieDate]: [curMovieStartTime],
        },
      });
    }
  }

  const showtimesCards = movieShowtimes.map((showtime, idx) => {
    return <ShowtimesCard key={idx} {...showtime} />;
  });

  return (
    <section className="section-showtimes">
      <div className="showtimes-collection container">
        {loading ? (
          <HashLoader cssOverride={override} color="#eb3656" />
        ) : (
          showtimesCards
        )}
      </div>
    </section>
  );
};