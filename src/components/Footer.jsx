import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";
import { showLoginModal, showSignModal } from "../reducers/authSlice";

export const Footer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let pageName;
  const location = useLocation();

  location.pathname === "/" ? (pageName = "home") : (pageName = "");

  // Static locations to add
  const locationData = [
    "Lucknow Shopping Mall, Phoenix Palassio, Amar Shaheed Path, Sector 7, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
    "Fun Republic Mall, Amar Shaheed Path, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    "Sahara Ganj Mall, Hazratganj, Lucknow, Uttar Pradesh 226001",
  ];

  const locations = locationData.map((location, idx) => (
    <p key={idx} className="address">
      {location}
    </p>
  ));

  return (
    <section className="section-footer container">
      {pageName === "home" ? (
        <HashLink className="footer-logo-container" to="#headerTop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="footer-logo-icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216"
            />
          </svg>
          <h1 className="footer-logo-text">Movie Dekho</h1>
        </HashLink>
      ) : (
        <Link className="footer-logo-container" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="footer-logo-icon"
            viewBox="0 0 512 512"
          >
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216"
            />
          </svg>
          <h1 className="footer-logo-text">Movie Dekho</h1>
        </Link>
      )}

      <div className="footer-link-container foot-reg">
        <button
          className="footer-btn"
          onClick={() => {
            dispatch(showSignModal());
          }}
        >
          Create account
        </button>
      </div>

      <div className="footer-link-container">
        <button
          className="footer-btn"
          onClick={() => {
            dispatch(showLoginModal());
          }}
        >
          Sign in
        </button>
      </div>

      <div className="footer-link-container">
        <Link className="footer-link" to="/aboutus">
          About us
        </Link>
      </div>

      <h3 className="footer-heading">Our Theatres</h3>

      <p className="copyright">
        Copyright &copy; 2024 by Manu Saini
      </p>

      <div className="footer-address-container">
        {loading ? <HashLoader color="#eb3656" /> : locations}
      </div>
    </section>
  );
};
