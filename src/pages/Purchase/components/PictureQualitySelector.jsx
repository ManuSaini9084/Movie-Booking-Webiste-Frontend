import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowDetail } from "../../../reducers/cartSlice";
import HashLoader from "react-spinners/HashLoader";

export const PictureQualitySelector = ({ hallData, setHallData, paymentOngoing }) => {
  const override = {
    display: "block",
    margin: "1.6rem auto",
  };

  const { id: theatreId } = useSelector((store) => store.currentLocation);
  const {
    showtime_date: userDate,
    movie_id: userMovieId,
    hall_id: userHallId,
    showtime_id: userShowtimeId,
    seat_price: userSeatPrice,
  } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const newHallData = [];
  let userAns = `${userShowtimeId},${userHallId},${userSeatPrice}`;

  useEffect(() => {
    setLoading(true);
    // Static Data to simulate fetched hall data
    const staticHallData = [
      {
        hall_id: 1,
        hall_name: 'Hall 1',
        movie_start_time: ['10:00 AM', '2:00 PM', '6:00 PM'],
        showtime_id: [1, 2, 3],
        price_per_seat: 300,
        show_type: 'Standard'
      },
      {
        hall_id: 2,
        hall_name: 'Hall 2',
        movie_start_time: ['11:00 AM', '3:00 PM', '7:00 PM'],
        showtime_id: [4, 5, 6],
        price_per_seat: 400,
        show_type: 'VIP'
      },
      // Add more halls as needed...
    ];

    setHallData(staticHallData);
    setLoading(false);
  }, [userMovieId, theatreId, userDate, setHallData]);

  const checkedColor = (val) => {
    return {
      backgroundColor: val === userAns ? "#ef5e78" : "",
      border: val === userAns ? "2px solid #ef5e78" : "",
    };
  };

  const showtimeOptions = hallData.map((show) => {
    const options = show.movie_start_time.map((option, idx) => {
      const valStr = `${show.showtime_id[idx]},${show.hall_id},${show.price_per_seat}`;
      return (
        <div className="time-input-container" key={idx} style={checkedColor(valStr)}>
          <input
            disabled={loading || paymentOngoing}
            type="radio"
            id={show.showtime_id[idx]}
            name="Select picture quality"
            value={valStr}
            onChange={(e) => dispatch(setShowDetail(e.target.value))}
            checked={userAns === valStr}
          />
          <label className="form-time-detail" htmlFor={show.showtime_id[idx]}>
            {option}
          </label>
        </div>
      );
    });

    return (
      <div className="form-options-hall" key={`${show.hall_name} (${show.show_type})`}>
        <div className="form-picture-quality">
          {`${show.hall_name} (${show.show_type})`}
          <div className="form-showtimes">{options}</div>
        </div>
        <p className="form-show-price">{`BDT ${show.price_per_seat} TK`}</p>
      </div>
    );
  });

  return (
    <div>
      <form>
        <div className="form-item-heading">Select Quality</div>
        {loading && <HashLoader cssOverride={override} color="#eb3656" />}
        {!loading && <div className="form-hall-container">{showtimeOptions}</div>}
      </form>
    </div>
  );
};
