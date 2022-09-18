import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import { getRandomUser } from "../../Service/getRandomUser.service";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";

// Styles
import "./Home.css";

export default function Home() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const collabArray = await getRandomUser();
    setUser(collabArray);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container padcards text-center mx-auto">
        <div className="cardflexs mx-auto">
          <h1>Bienvenue sur l'intranet !</h1>
          <p>La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>
          <h2>Avez-vous dis bonjour à :</h2>
          <div className="mx-auto">{user && <Card user={user} />}</div>
          <button className="btnmodify" onClick={getUser}>
            Dire bonjour à quelqu'un d'autre
          </button>
        </div>
      </div>
    </>
  );
}
