import axios from "axios";

// Modifier un user

export const putModifyUser = async (id, data) => {
  const token = localStorage.getItem("token");
  console.log("token", token);
  console.log(`Bearer ${JSON.parse(token)}`);
  console.log("data", JSON.stringify(data));
  try {
    const rescollab = await axios.put(`http://localhost:7000/api/collaborateurs/${id}`, data, { headers: { Authorization: `Bearer ${JSON.parse(token)} ` } });
    console.log("rescollab", rescollab.data);
    return rescollab.data;
  } catch (error) {
    console.log(error);
  }
};
