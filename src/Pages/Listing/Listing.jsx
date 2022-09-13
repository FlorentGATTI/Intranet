import React from "react";
import Card from "../../Components/Card/Card";
import './Listing.css'

export default function () {
  return (
    <div className="cardflex">
      <br />
      <br />
      <br />
      <h1>Page de listing !</h1>
      <Card>
        <h2>Hello Card</h2>
      </Card>
      <Card>
        <h2>Hello Card</h2>
      </Card>
      <Card>
        <h2>Hello Card</h2>
      </Card>
    </div>
  );
}
