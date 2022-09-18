import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
  const onDelete = async () => {
    const token = localStorage.getItem("token");

    try {
      const rescollab = await axios.delete(`http://localhost:7000/api/collaborateurs/${user.id}`, { headers: { Authorization: `Bearer ${JSON.parse(token)} ` } });
      console.log("rescollab", rescollab.data);
      location.reload();
      return rescollab.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card mx-auto">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <img src={user.photo} alt={`photo de ${user.firstname}`} />
        </div>
        <div className="card-body">
          {user.service}
          <br />
          {user.firstname} {user.lastname} ({getAge(user.birthdate) + " ans"})
          <br />
          {user.city}, {user.country}
          <br />
          <a href={`mailto:${user.email.replaceAll("-", " ")}`}>{user.email}</a>
          <br />
          <a href={`tel:+${user.phone.replaceAll("-", " ")}`}>{user.phone}</a>
          <br />
          Anniversaire : {new Date(`${user.birthdate}`).toLocaleString("FR-fr", { day: "numeric", month: "long" })}
          <br />
          <Link
            to={{
              pathname: `/ModifyUser${user.id}`,
            }}
          >
            <button className="btnmodif">Editer</button>
          </Link>
          <button className="btnmodif1" onClick={onDelete}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
