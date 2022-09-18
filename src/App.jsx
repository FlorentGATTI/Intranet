import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Connexion from "./Pages/Connexion/Connexion";
import Listing from "./Pages/Listing/Listing";
import ModifyUser from "./Pages/ModifyUser/ModifyUser";
import CreateUser from "./Pages/CreateUser/CreateUser";

function App() {
  // Routes avec React-router v6

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Connexion />} />
          <Route path="Home" element={<Home />} />
          <Route path="Liste" element={<Listing />} />
          <Route path="ModifyUser:id" element={<ModifyUser />} />
          <Route path="CreateUser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
