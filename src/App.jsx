import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Connexion from "./Pages/Connexion/Connexion";
import Listing from "./Pages/Listing/Listing";
import Infos from "./Pages/InfosPersonel/Infos";
import ModifyUser from "./Pages/ModifyUser/ModifyUser";
import CreateUser from "./Pages/CreateUser/CreateUser";

//Styles
import "./styles/App.css";


function App() {
  // const token = localStorage.getItem("token");
  // if (!token) {
  //   return ;
  // }
    
 

  // Routes avec React-router

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Connexion />} />
          <Route path="Home" element={<Home />} />
          <Route path="Liste" element={<Listing />} />
          <Route path="Infos" element={<Infos />} />
          <Route path="ModifyUser:id" element={<ModifyUser />} />
          <Route path="CreateUser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
