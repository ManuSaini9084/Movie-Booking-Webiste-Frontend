import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../reducers/locationSlice";
import { resetCart } from "../reducers/cartSlice";

export const LocationSelector = ({ paymentOngoing }) => {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(false);

  const userLocation = useSelector((store) => store.currentLocation);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    // Static location and theatre data
    const staticLocationData = [
      {
        id: 1,
        location: "Amar Shaheed Path",
        name: "Phoenix Palassio",
        address: "Sector 7, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
      },
      {
        id: 2,
        location: "Amar Shaheed Path",
        name: "Fun Republic Mall",
        address: "Gomti Nagar, Lucknow, Uttar Pradesh 226010",
      },
    ];

    setLocationData(staticLocationData);
    dispatch(selectLocation(staticLocationData[0]));
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetCart());
  }, [userLocation.id, dispatch]);

  const locationOptions = locationData?.map((location, idx) => (
    <option key={idx} value={location.id}>
      {location.location} - {location.name}
    </option>
  ));

  const handleLocationSelection = (e) => {
    const selectedLocationObj = locationData.find(
      (locationObj) => locationObj.id === Number(e.target.value)
    );
    dispatch(selectLocation(selectedLocationObj));
  };

  return !loading ? (
    <div className="location-select-container">
      <select
        id="location-selector"
        onChange={handleLocationSelection}
        value={userLocation?.id}
        disabled={loading || paymentOngoing}
      >
        {locationOptions}
      </select>

      <p className="selected-location">
        Location: <span>{userLocation?.location}</span>
      </p>
      <p className="selected-theatre">
        Theatre: <span>{userLocation?.name}</span>
      </p>
    </div>
  ) : (
    <HashLoader color="#eb3656" />
  );
};
