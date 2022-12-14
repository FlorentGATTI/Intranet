import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setconnex } from "../../Redux/features/connexReducer";
import { getConnexData } from "../../Service/connex.service";
import { useNavigate } from "react-router-dom";

// Styles
import "./Connexion.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();
  const [] = useSelector((state) => state.connex);
  const navigate = useNavigate();

  const getUser = async (data) => {
    const collabArray = await getConnexData(data);
    localStorage.setItem("token", JSON.stringify(collabArray.token));
    dispatch(setconnex());
    navigate("/Home");
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    getUser(data);
  };

  // Formulaire de connexion
  return (
    <div className="wrapper container-login100 wrap-login100 limiter d-flex text-center fontita">
      <form className="login100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="ft-2">Connexion</h1>
        <legend className="ft-2">Pour vous connecter à l'intranet,<br /> entrez votre identifiant et mot de passe.</legend>
        <fieldset>
          <div className="formInput">
            <label className="me-3">Email :</label>
            <input
              type="email"
              {...register("email", {
                required: "This is required",
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
            <span className="errorMsg">{errors.email && "Merci de rentrer une adresse valide !"}</span>
          </div>

          <div className="formInput pt-1">
            <label className="me-3">Mot de passe :</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z]).{2,20}$/,
              })}
            />
            <span className="errorMsg">{errors.password && "Le mot de passe est requis !"}</span>
          </div>
          <button className="btnstyle" type="submit"><em>Connexion</em></button>
        </fieldset>
      </form>
      <div className="login100-more bg-img"></div>
    </div>
  );
};

export default Form;
