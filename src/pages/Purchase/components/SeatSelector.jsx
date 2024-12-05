import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSeat } from "../../../reducers/cartSlice";
import HashLoader from "react-spinners/HashLoader";

export const SeatSelector = ({ seatsData, setSeatsData, paymentOngoing }) => {
  const override = {
    display: "block",
    margin: "1.6rem auto",
  };

  const [loading, setLoading] = useState(false);

  const {
    movie_id: userMovieId,
    hall_id: userHallId,
    showtime_id: userShowtimeId,
    seat_id_list: userSeatList,
  } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    // Static Data to simulate fetched seat data
    const staticSeatsData = [
      { seat_id: 1, seat_name: 'A1', booked_status: 0 },
      { seat_id: 2, seat_name: 'A2', booked_status: 0 },
      { seat_id: 3, seat_name: 'A3', booked_status: 1 },
      { seat_id: 4, seat_name: 'A4', booked_status: 0 },
      { seat_id: 5, seat_name: 'A5', booked_status: 0 },
      { seat_id: 6, seat_name: 'A6', booked_status: 1 },
      { seat_id: 7, seat_name: 'A7', booked_status: 0 },
      { seat_id: 8, seat_name: 'A8', booked_status: 0 },
      { seat_id: 9, seat_name: 'B1', booked_status: 0 },
      { seat_id: 10, seat_name: 'B2', booked_status: 1 },
      { seat_id: 11, seat_name: 'B3', booked_status: 0 },
      { seat_id: 12, seat_name: 'B4', booked_status: 1 },
      // Add more seats as needed...
    ];

    setSeatsData(staticSeatsData);
    setLoading(false);
  }, [userHallId, userShowtimeId, userMovieId, setSeatsData]);

  let rows = [];
  let rowSeat = [];

  seatsData.forEach((seat, idx) => {
    let seatStatus;
    const handleTouchStart = (e) => {
      e.preventDefault();
      dispatch(setSeat(seat.seat_id));
    };

    seat.booked_status === 0 ? (seatStatus = "available") : (seatStatus = "booked");

    const seatHtml = (
      <div
        className={`seat ${seatStatus}`}
        disabled={loading || paymentOngoing}
        onClick={() => seatStatus !== "booked" && dispatch(setSeat(seat.seat_id))}
        onTouchEnd={seatStatus !== "booked" ? handleTouchStart : undefined}
        key={seat.seat_id}
        style={{
          backgroundColor: userSeatList.includes(seat.seat_id) ? "#ef5e78" : "",
        }}
      >
        {seat.seat_name}
      </div>
    );

    if (idx === 0) {
      rowSeat.push(seatHtml);
    } else if (seatsData[idx].seat_name[0] !== seatsData[idx - 1].seat_name[0]) {
      rows.push(<div className="row" key={seatsData[idx - 1].seat_name[0]}>{rowSeat}</div>);
      rowSeat = [];
      rowSeat.push(seatHtml);
    } else if (idx === seatsData.length - 1) {
      rowSeat.push(seatHtml);
      rows.push(<div className="row" key={seatsData[idx - 1].seat_name[0]}>{rowSeat}</div>);
    } else {
      rowSeat.push(seatHtml);
    }
  });

  return (
    <div>
      <div className="form-item-heading">Select Seat</div>
      {loading && <HashLoader cssOverride={override} color="#eb3656" />}
      {!loading && (
        <>
          <div className="seat-guide-container">
            <div className="seat-available-demo"></div>
            <p className="seat-status-details">Available</p>
            <div className="seat-booked-demo"></div>
            <p className="seat-status-details">Booked</p>
            <div className="seat-selected-demo"></div>
            <p className="seat-status-details">Selected</p>
          </div>
          <div className="theatre-screen">
            <div className="screen-1"></div>
            <div className="screen-2"></div>
          </div>
          <div className="theatre-screen-heading">Theatre Screen</div>
          <div className="seat-container">{rows}</div>
        </>
      )}
    </div>
  );
};
