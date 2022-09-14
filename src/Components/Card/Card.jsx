import React from "react";
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
    </div>
  );
}
