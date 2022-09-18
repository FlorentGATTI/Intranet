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
          <h1 className="pb-2"><em>Bienvenue sur l'intranet !</em></h1>
          <p>La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>
          <h2 className="pb-1"><em>Avez-vous dis bonjour à :</em></h2>
          <div className="mx-auto">{user && <Card user={user} />}</div>
          <button className="btnmodify" onClick={getUser}>
           <em>Dire bonjour à quelqu'un d'autre</em> 
          </button>
        </div>
      </div>
    </>
  );
}
