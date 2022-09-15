import React, {useState, useEffect} from "react";
import Card from "../../Components/Card/Card";
import {getAllUser} from '../../Service/getRandomUser.service';
import Navbar from "../../Components/Navbar/Navbar";

// Styles
import './Infos.css'


export default function Listing() {
  const [userAll, setUserAll] = useState(null);

  return (
    <>
      <Navbar />
      <br />
      <h1>Informations Utilisateurs</h1>
    </>
  );
}
