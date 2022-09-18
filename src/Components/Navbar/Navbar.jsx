import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUser } from "../../Service/getRandomUser.service";


// Styles
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (window.innerWidth < 500) {
      setToggleMenu(true);
    }
  }, []);

  const navigate = useNavigate();

  const toggleDisplay = () => {
    setToggleMenu(!toggleMenu);
  };

  

  return (
    <nav>
      <ul className={toggleMenu ? "itemsNavActive" : "listenav"}>
        <li className="itemsnav">
          <Link
            to={{
              pathname: "/Home",
            }}
          >
            Accueil
          </Link>
        </li>
        <li className="itemsnav">
          <Link
            to={{
              pathname: "/Liste",
            }}
          >
            Liste
          </Link>
        </li>
        <li className="itemsnav">
        <Link
            to={{
              pathname: "/CreateUser",
            }} onClick={() => toggleDisplay()}
          >
            AddUser
          </Link>
        </li> 
        <li className="itemsnav">
        <Link
            to={{
              pathname: "/",
            }} onClick={() => toggleNav()}
          >
          {/* <img src={user.photo} alt="Photo de l'utilisateur" /> */}
            Deconnexion
          </Link>
        </li> 
      </ul>
      <button className="btnburger" onClick={toggleDisplay}>
        burger
      </button>
    </nav>
  );
}
