import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { putModifyUser } from "../../Service/modifyUser.service";

//Styles
import "./ModifyUser.css";

export default function ModifyUser() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = (userdata) => {
    putModifyUser(id, userdata);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center mt-4"><em>Modifier un utilisateur</em></h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto pt-5">
        <Form.Group className="mb-3 ">
          <Form.Label>* Civilité :</Form.Label>
          <Form.Select {...register("gender")} aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Catégorie :</Form.Label>
          <Form.Control {...register("service")} type="text" placeholder="Client" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Nom :</Form.Label>
          <Form.Control {...register("lastname")} type="text" placeholder="Nom" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Prenom :</Form.Label>
          <Form.Control {...register("firstname")} type="text" placeholder="Prenom" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Email :</Form.Label>
          <Form.Control {...register("email")} type="mail" placeholder="admin@admin.com" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mot de passe :</Form.Label>
          <Form.Control {...register("password")} type="password" placeholder="(min. 8 caractères)" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirmation :</Form.Label>
          <Form.Control {...register("password")} type="password" placeholder="(min. 8 caractères)" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Téléphone :</Form.Label>
          <Form.Control {...register("phone")} type="tel" placeholder="07-39-81-18-27" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Date de naissance :</Form.Label>
          <Form.Control {...register("birthdate")} type="date" placeholder="04/11/1988" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Ville :</Form.Label>
          <Form.Control {...register("city")} type="text" placeholder="Paris" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Pays :</Form.Label>
          <Form.Control {...register("country")} type="text" placeholder="France" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Image :</Form.Label>
          <Form.Control {...register("photo")} type="text" placeholder="..." required />
        </Form.Group>
        <button className="modifbtn mx-auto mt-3 mb-5" type="submit">
         <em>Modifier</em> 
        </button>
      </Form>
    </>
  );
}
