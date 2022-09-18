import axios from "axios";

export const getConnexData = async (data) => {
  // console.log("ma data :", data);
  try {
    const resconnex = await axios.post(
      'http://localhost:7000/api/login',
      
        // data
        data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log("getconnex :", resconnex);

    return resconnex.data;
  } catch (error) {
    console.log(error);
  }
};
