import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { getAllUser } from "../../Service/getRandomUser.service";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";

// Styles
import "./Listing.css";

export default function Listing() {
  const [userAll, setUserAll] = useState(null);
  const [filterdedUserAll, setFilteredUserAll] = useState(null);

  const getUserAll = async () => {
    const collabArray = await getAllUser();
    setUserAll(collabArray);
    setFilteredUserAll(collabArray);
  };

  useEffect(() => {
    getUserAll();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container padcard">
        <div className="main">
          <h1>Liste de collaborateurs</h1>
          <Search userAll={userAll} setFilteredUserAll={setFilteredUserAll} />
        </div>
        <div className="cardflex">
          {filterdedUserAll?.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
