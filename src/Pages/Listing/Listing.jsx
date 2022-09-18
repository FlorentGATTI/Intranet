import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { getAllUser } from "../../Service/getRandomUser.service";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
// import { useSelector } from "react-redux";

// Styles
import "./Listing.css";

export default function Listing() {
  const [userAll, setUserAll] = useState(null);
  const [filterdedUserAll, setFilteredUserAll] = useState(null);

  const getUserAll = async () => {
    const collabArray = await getAllUser();
    console.log("data : ", collabArray);
    setUserAll(collabArray);
    setFilteredUserAll(collabArray);
  };

  useEffect(() => {
    getUserAll();
  }, []);

  // useSelector()

  // if datauser n'a pas de donnés / dataUser = userAll
  // if(!datauser) {
  //   setFilteredUserAll(userAll)
  // }

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
