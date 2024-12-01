import { useEffect, useState } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch, useSelector } from "react-redux";
import { resetCart, setShowDate } from "../../../reducers/cartSlice";

export const DateSelector = ({ paymentOngoing }) => {
  const [showDatesData, setShowDatesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: theatreId } = useSelector((store) => store.currentLocation);
  const { showtime_date: userDate } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(showDatesData);
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `http://localhost:7002/showtimesDates`,
          { theatreId }
        );
        console.log(response); // Log the response data to check the unique dates
        setShowDatesData(response.data);
        dispatch(resetCart());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    if (theatreId !== "") fetchData();
  }, [theatreId, dispatch]);
  

  const checkedColor = (val) => {
    return {
      backgroundColor: val === userDate ? "#ef5e78" : "",
      color: val === userDate ? "#e6e6e8" : "",
    };
  };

  const dateOptions = Array.isArray(showDatesData)
  ? showDatesData.map((dateData, idx) => {
      const dateObj = new Date(dateData.showtime_date);

      const day = dateObj.toLocaleString("en-us", { weekday: "short" });
      const month = dateObj.toLocaleString("en-us", { month: "short" });
      const date = dateObj.toLocaleString("en-us", { day: "numeric" });
      const year = dateObj.toLocaleString("en-us", { year: "numeric" });
      const monthNumber = dateObj.toLocaleString("en-us", { month: "numeric" });
      const formattedDate = `${year}-${monthNumber}-${date}`;

      return (
        <div
          className="date-input-container"
          key={idx}
          style={checkedColor(formattedDate)}
        >
          <input
            disabled={loading || paymentOngoing}
            type="radio"
            id={`date-${idx}`}
            name="Select Date"
            value={formattedDate}
            onChange={(e) => dispatch(setShowDate(e.target.value))}
            checked={formattedDate === userDate}
          />
          <label className="form-date-detail" htmlFor={`date-${idx}`}>
            <p className="form-day">{day}</p>
            <div className="form-date-month">
              <p className="form-date">{date}</p>
              <p className="form-month">{month}</p>
            </div>
          </label>
        </div>
      );
    })
  : <p>No dates available</p>; // Fallback when showDatesData is not an array or empty.


  return (
    <div>
      <form>
        <div className="form-item-heading">Select Date</div>
        {!loading ? (
          <div className="form-item-options">{dateOptions}</div>
        ) : (
          <HashLoader color="#eb3656" />
        )}
      </form>
    </div>
  );
};
