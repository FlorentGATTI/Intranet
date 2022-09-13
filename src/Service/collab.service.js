import axios from "axios";

// Appel API

export const getPokemonData = async (id) => {
try {
    const res = await axios.get(``);
    return res;
}catch (error) {
  console.log(erreur);
}}