import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import settings from "../../config/Settings";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 6);
const axios = require("axios");
const _ = require("lodash");

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

  const onInputChange = async (event = undefined, searchQuery) => {
    if (searchQuery.length > 1) {
      setOpen(true);
      setNoOptionsText("Searching...");
      const { data: searchResults } = await axios.get(`${searchUrl}/${searchQuery}`);
      let newResults = [];

      if (searchResults.length > 0) {
        searchResults.forEach((searchResult) => {
          newResults.push({ ...searchResult, key: nanoid() });
        });

        newResults = _.sortBy(newResults, "LayerName");
      } else {
        setNoOptionsText("No results found");
      }

      setOptions(newResults);
    } else {
      setOpen(false);
    }
  };

  const onChange = (event = undefined, newValue) => {
    if (newValue) {
      console.log(newValue);
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
      getOptionLabel={(option) => option.ListValue}
      groupBy={(option) => option.LayerName}
      isOptionEqualToValue={(option, value) => option.ListValue === value.ListValue}
      noOptionsText={noOptionsText}
      options={options}
      openOnFocus={false}
      open={open}
      onChange={onChange}
      onClose={onClose}
      onInputChange={onInputChange}
      renderInput={(params) => <TextField {...params} label="Search COSMOS" />}
      renderOption={(params, option) => {
        return (
          <li {...params} key={option.key}>
            {option.ListValue}
          </li>
        );
      }}
    />
  );
};

export default SearchBar;
