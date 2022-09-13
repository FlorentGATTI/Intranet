import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Connexion from "./Pages/Connexion/Connexion";
import Listing from "./Pages/Listing/Listing";
import Navbar from "./Components/Navbar/Navbar";
import Infos from "./Pages/InfosPersonel/Infos";
import "./App.css";
import CreateUser from "./Pages/CreateUsers/CreateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />

        <Routes>

          <Route path="/" element={<Connexion />} />
          <Route path="Home" element={<Home />} />
          <Route path="Listing" element={<Listing />} />
          <Route path="Infos" element={<Infos />} />
          <Route path="Create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
