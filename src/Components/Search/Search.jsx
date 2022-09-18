import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, InputLabel, Input, Select } from "@mui/material";

const Search = ({ userAll, setFilteredUserAll }) => {
  const [filterType, setFilterType] = useState("Nom");
  const [filterText, setFilterText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const onChangeText = (event) => {
    setFilterText(event.target.value);
  };

  const onChangeType = (event) => {
    setFilterType(event.target.value);
  };

  const onChangeCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  // Filtre de recherche

  useEffect(() => {
    if (userAll) {
      let filteredList = [];
      if (filterType == "Localisation") {
        filteredList = userAll.filter((user) => {
          if (user.country.toLowerCase().includes(filterText.toLowerCase()) || user.city.toLowerCase().includes(filterText.toLowerCase())) return user;
        });
      } else if (filterType == "Nom") {
        filteredList = userAll.filter((user) => {
          if (user.firstname.toLowerCase().includes(filterText.toLowerCase()) || user.lastname.toLowerCase().includes(filterText.toLowerCase())) return user;
        });
      }
      if (filterCategory !== "") {
        filteredList = filteredList.filter((user) => user.service == filterCategory);
      }
      setFilteredUserAll(filteredList);
    }
  }, [filterText, filterCategory, filterType, userAll]);

  return (
    <>
      {/* affiche le champ recherche dans la navBar */}
      <div className="search">
        <FormControl>
          <InputLabel htmlFor="my-input">Rechercher ...</InputLabel>
          <Input value={filterText} onChange={onChangeText} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Rechercher par :</InputLabel>
          <Select value={filterType} onChange={onChangeType}>
            <MenuItem value={"Nom"}>Nom</MenuItem>
            <MenuItem value={"Localisation"}>Ville</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Catégories :</InputLabel>
          <Select value={filterCategory} onChange={onChangeCategory}>
            <MenuItem value={""}>- Aucun -</MenuItem>
            <MenuItem value={"Client"}>Clients</MenuItem>
            <MenuItem value={"Technique"}>Technique</MenuItem>
            <MenuItem value={"Marketing"}>Marketing</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Search;

// Function to normalize string without special characters

// const normalizeStringWithoutSC = (string) => {
//   return string
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/[^a-zA-Z ]/g, "")
//     .replace(/-/g, " ")
//     .toLowerCase();
// };
