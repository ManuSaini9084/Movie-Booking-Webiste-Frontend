import { useEffect, useState } from "react";
import {
  HiCalendar,
  HiOutlineClock,
  HiOutlineCurrencyBangladeshi,
  HiOutlineMapPin,
  HiOutlineTicket,
  HiOutlineTv,
} from "react-icons/hi2";
import { RiSofaLine } from "react-icons/ri";
import HashLoader from "react-spinners/HashLoader";

export const CustomerInfoSection = () => {
  // Static data for customer info
  const [cusProData, setCusProData] = useState({});
  // Static data for purchase history
  const [cusTicketData, setCusTicketData] = useState([]);
  const override = {
    display: "block",
    margin: "2.4rem auto",
  };

  // Loading states
  const [loading1, setLoading1] = useState(false); // No need to load customer info from API
  const [loading2, setLoading2] = useState(false); // No need to load purchase history from API

  useEffect(() => {
    // Fetch customer info from localStorage (simulating a static response)
    const customerData = JSON.parse(localStorage.getItem("customerInfo"));
    if (customerData) {
      setCusProData(customerData);
    }

    // Static data for purchase history
    const purchaseHistory = [
      {
        movie_name: "Extraction 2",
        ticket_ids: "12345",
        theatre_name: "Cineplex",
        hall_name: "Hall 1",
        seat_numbers: "A1, A2",
        showtime_date: "2024-12-01",
        movie_start_time: "18:00",
        ticket_price: "500 BDT",
        purchase_date: "2024-11-30",
        movie_image: "/Images/movies/extraction2.webp",
        show_type: "2D",
        movie_id: "movie-123",
      },
      {
        movie_name: "Murder Mystery",
        ticket_ids: "67890",
        theatre_name: "Galaxy Cinema",
        hall_name: "Hall 2",
        seat_numbers: "B1, B2",
        showtime_date: "2024-12-05",
        movie_start_time: "20:00",
        ticket_price: "600 BDT",
        purchase_date: "2024-12-01",
        movie_image: "/Images/movies/murderMystery.webp",
        show_type: "3D",
        movie_id: "movie-456",
      },
    ];
    setCusTicketData(purchaseHistory);
  }, []);

  // HTML for displaying purchase history
  const purchaseHtml = cusTicketData.map((cusTicket, id) => {
    return (
      <div key={id} className="purchase-history-item">
        <div className="purchase-first-gap"></div>
        <div className="purchase-second-gap"></div>

        <div className="purchase-item-details">
          <div className="purchase-item-header">
            <h2>{cusTicket.movie_name}</h2>

            <div className="purchase-show-quality">
              <HiOutlineTv size={18} />
              <p>{cusTicket.show_type}</p>
            </div>
          </div>

          <div className="purchase-ticket-id">
            <HiOutlineTicket size={16} />
            <p className="ticket-id">Ticket No.: {cusTicket.ticket_ids}</p>
          </div>

          <div className="purchase-hall-info">
            <HiOutlineMapPin size={18} />
            <p>
              {cusTicket.theatre_name} &mdash; {cusTicket.hall_name}
            </p>
          </div>

          <div className="purchase-seat">
            <RiSofaLine size={20} />
            <p>{cusTicket.seat_numbers}</p>
          </div>

          <div className="purchase-date-time">
            <div className="purchase-tags">
              <HiCalendar size={20} />
              <strong>{cusTicket.showtime_date}</strong>
            </div>
            <div className="purchase-tags">
              <HiOutlineClock size={18} />
              <strong>{cusTicket.movie_start_time}</strong>
            </div>
          </div>

          <div className="purchase-price-create">
            <div className="purchase-tags">
              <HiOutlineCurrencyBangladeshi size={18} />
              <strong>{cusTicket.ticket_price}</strong>
            </div>
            <div className="purchase-tags">
              <p>
                Purchased at <strong>{cusTicket.purchase_date}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="purchase-item-img-box">
          <img
            className="purchase-item-img"
            src={cusTicket.movie_image}
            alt="movie-photo"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="section-customer-info">
      <div className="container">
       
        <h3 className="customer-info-heading">Purchase History</h3>
        {loading2 ? (
          <HashLoader cssOverride={override} color="#eb3656" />
        ) : (
          <>
            {cusTicketData.length === 0 && (
              <p className="customer-empty-status">
                You haven&apos;t purchased any ticket yet
              </p>
            )}
            <div className="purchase-history-section">
              <div className="purchase-history-list">{purchaseHtml}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
