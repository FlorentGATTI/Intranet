import React, {useState, useEffect} from "react";
import Card from "../../Components/Card/Card";
import {getAllUser} from '../../Service/getRandomUser.service';
import Navbar from "../../Components/Navbar/Navbar";

// Styles
import './Listing.css'


export default function Listing() {
  const [userAll, setUserAll] = useState(null);

  const getUserAll = async () => {
    const collabArray = await getAllUser();
    console.log("data : ", collabArray);
    setUserAll(collabArray);
    // console.log(collabArray.token);
  };

  useEffect(() => {
    getUserAll();
  }, []);

  return (
    <>
      <Navbar />  
      <div className='container padcard'>
      <div className="cardflex">
      <h1 className="text-center">Liste de collaborateurs</h1>

      {userAll && 
      userAll.map(user => <Card key={user.id} user={user}/>)
      }   
      </div>
      </div>
        
    </>
  );
}
