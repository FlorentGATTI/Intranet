import axios from "axios";

// Appel API GET

// Pour générer un collab aléatoire

export const getRandomUser = async () => {
  const token = localStorage.getItem("token");

  try {
    const rescollab = await axios.get(`http://localhost:7000/api/collaborateurs/random`, { headers: { Authorization: `Bearer ${JSON.parse(token)} ` } });
    return rescollab.data;
  } catch (error) {
    console.log(error);
  }
};

// Pour générer tout les collabs

export const getAllUser = async () => {
  const token = localStorage.getItem("token");

  try {
    const rescollab = await axios.get(`http://localhost:7000/api/collaborateurs`, { headers: { Authorization: `Bearer ${JSON.parse(token)} ` } });
    // console.log("getcollab :", rescollab);
    return rescollab.data;
  } catch (error) {
    console.log(error);
  }
};
