import React from "react";
import { Link } from "react-router-dom";
import ModifyUser from '../../Pages/ModifyUser/ModifyUser';

//styles
import "./Card.css";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export default function Card({ user }) {
 
  return (
    <div className="card mx-auto">
      <img src={user.photo} alt={`photo de ${user.firstname}`} />
      {user.service}<br/>
      {user.firstname} {user.lastname} ({getAge(user.birthdate) + " ans"})
      <br />
      {user.city}, {user.country}
      <br />
      <a href={`mailto:${user.email.replaceAll("-", " ")}`}>
      {user.email}
      </a>
      <br />
      <a href={`tel:+${user.phone.replaceAll("-", " ")}`} >
      {user.phone}</a>
      Anniversaire : {new Date(`${user.birthdate}`).toLocaleString('FR-fr',{ day:'numeric', month:'long'})}
      <br />
    <Link to={{
              pathname: "/ModifyUser",
            }}>
    <button>Editer</button>
    </Link>
    
    <button>Supprimer</button>
    </div>
  );
}
