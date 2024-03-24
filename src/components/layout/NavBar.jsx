import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "../auth/Logout";

const NavBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  const isLoggedIn = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 shadow mt-5 sticky-top">
      <div className="container-fluid text-center">
        <Link to={"/"} className="navbar-brand">
          <span className="hotel-color">Isic Plateforme</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"https://docs.google.com/spreadsheets/d/1aERnuhtJZ-VCUBCrgJmqoUa96nLk1Zv5sA8_NuUVTMs/edit#gid=1595572477"}>
                Suivi des absences
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0K4QjTB4NWIQyRWdi5Bu2Ay5Ja7jeJdovpHTt3qSOY_CNP7B4B2xlHtqXPkfK8VbWDvFdEK-Ji"}>
                Reservation des salles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"https://calendar.google.com/calendar/u/1/r?hl=fr&pli=1"}>
                Emploi du temps
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"https://docs.google.com/spreadsheets/d/1aERnuhtJZ-VCUBCrgJmqoUa96nLk1Zv5sA8_NuUVTMs/edit#gid=508226611"}>
                Gestion des Reunions
              </NavLink>
            </li>

            {isLoggedIn && userRole === "ROLE_ADMIN" && (
              <li className="nav-item">
                <NavLink className="nav-link admin-link" aria-current="page" to={"/admin"}>
                  Mode Administrateur
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="d-flex navbar-nav">
            
      
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"http://ensaj.fertat.com/inscription/index.php"}>
                Plateforme TRI
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleAccountClick}
              >
                Mon compte
              </a>

              <ul
                className={`dropdown-menu ${showAccount ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                {isLoggedIn ? (
                  <Logout />
                ) : (
                  <li>
                    <Link className="dropdown-item" to={"/login"}>
                      Se connecter
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
