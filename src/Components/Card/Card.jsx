import React from "react";
import { Link } from "react-router-dom";
import CreateUser from '../../Pages/CreateUsers/CreateUser';

//styles
import "./Card.css";

export default function Card({ user }) {
  return (
    <div className="card">
      <img src={user.photo} alt={`photo de ${user.firstname}`} />
      {user.firstname}
      <br />
      {user.lastname}
      <br />
      {user.birthdate}
      <br />
      {user.email}
      <br />
      <a href={`tel:+${user.phone.replaceAll("-", " ")}`} >
      {user.phone}</a>
      <br />
    <Link to={{
              pathname: "/CreateUser",
            }}>
    <button>Editer</button>
    </Link>
    </div>
  );
}
