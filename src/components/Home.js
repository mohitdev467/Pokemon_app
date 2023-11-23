import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FavouritePokemon from "./FavouritePokemon";
import Logo from "../assets/main-logo.png";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      toast.info("Welcome, Ash!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      localStorage.setItem("hasVisitedBefore", "true");
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="banner">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom p-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="pokemon-logo" className="logo-image" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto nav-div">
                <li className="nav-item nav-link-addd">
                  <Link to="/add" className="nav-link">
                    Add Pokemon
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/list" className="nav-link">
                    Pokemon List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <FavouritePokemon />
    </>
  );
};

export default Home;
