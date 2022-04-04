import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import settings from "../../config/Settings";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 6);
const axios = require("axios");

const searchBarStyle = {
  backgroundColor: "white",
  m: 1,
  width: 500,
};

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [noOptionsText, setNoOptionsText] = useState("");
  const [open, setOpen] = useState(false);
  const searchUrl = `${settings.dataServiceUrl}/GetSearchData`;

  const onInputChange = async (undefined, searchQuery) => {
    if (searchQuery.length > 1) {
      setOpen(true);
      setNoOptionsText("Searching...");
      const { data: searchResults } = await axios.get(`${searchUrl}/${searchQuery}`);
      const newResults = [];
      searchResults.forEach((searchResult) => {
        newResults.push({ label: searchResult.ListValue, key: nanoid() });
      });

      setOptions(newResults);
    }
  };

  const onClose = () => {
    setOptions([]);
    setNoOptionsText("");
    setOpen(false);
  };

  return (
    <Autocomplete
      sx={searchBarStyle}
      options={options}
      noOptionsText={noOptionsText}
      open={open}
      onInputChange={onInputChange}
      onClose={onClose}
      renderInput={(params) => <TextField {...params} label="Search COSMOS" />}
      renderOption={(props, option) => (
        <li {...props} key={option.key}>
          {option.label}
        </li>
      )}
    />
  );
};

export default SearchBar;
