import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">
            <Link to="Home">Accueil</Link>
          </li>
          <li className="items">
            <Link to="listing">Liste</Link>
          </li>
          <li className="items">
            <Link to="/">
            <Button variant="contained" className="btn">
            Connexion
            </Button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
