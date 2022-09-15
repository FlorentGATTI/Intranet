import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

//Styles 
import "./ModifyUser.css";

export default function ModifyUser() {
  
    return (
      <>
        <Navbar />
        <h1 className="text-center">Modifier un utilisateur</h1>
        <Form className="w-50 mx-auto pt-5">
      <Form.Group className="mb-3 ">
        <Form.Label>* Civilité :</Form.Label>
        <Form.Control type="Homme" placeholder="Homme" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>* Catégorie :</Form.Label>
        <Form.Control type="categorie" placeholder="Client" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>* Nom :</Form.Label>
        <Form.Control type="Admin" placeholder="Admin" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>* Prenom :</Form.Label>
        <Form.Control type="User" placeholder="User" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>* Email :</Form.Label>
        <Form.Control type="mail" placeholder="admin@admin.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mot de passe :</Form.Label>
        <Form.Control type="" placeholder="(min. 8 caractères)" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirmation :</Form.Label>
        <Form.Control type="password" placeholder="(min. 8 caractères)" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>* Téléphone :</Form.Label>
        <Form.Control type="tel" placeholder="07-39-81-18-27" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>* Date de naissance :</Form.Label>
        <Form.Control type="Birthday" placeholder="04/11/1988" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>* Ville :</Form.Label>
        <Form.Control type="City" placeholder="Paris" />
      </Form.Group>
      <button className="modifbtn mx-auto " type="submit">
        Modifier
      </button>
    </Form>
      </>
    );
}
