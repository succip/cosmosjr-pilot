import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import settings from "../../config/Settings";
import { customAlphabet } from "nanoid";
import { getMapLayerByTitle } from "../../js/Layers";
const nanoid = customAlphabet("1234567890abcdef", 6);
const axios = require("axios");
const _ = require("lodash");

const searchBarStyle = {
  backgroundColor: "white",
  m: 1,
  width: 500,
};
const searchUrl = `${settings.dataServiceUrl}/GetSearchData`;

const SearchBar = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [noOptionsText, setNoOptionsText] = useState("");
  const [open, setOpen] = useState(false);

  const resetSearchBar = () => {
    setValue(null);
    setOpen(false);
    setOptions([]);
  };

  useEffect(() => {
    if (inputValue.length > 1) {
      fetchSearchData(inputValue);
    } else {
      setValue(null);
    }
  }, [inputValue]);

  useEffect(() => {
    if (value) {
      setOpen(false);
      findRecord(value);
    }
  }, [value]);

  const findRecord = ({ ListValue, LayerName }) => {
    if (ListValue.includes("Layer")) {
      const layer = getMapLayerByTitle(LayerName);
      console.log("Layer Found: ", layer);
    }
  };

  useEffect(() => {}, [options]);

  const fetchSearchData = async (query) => {
    setOpen(true);
    setNoOptionsText("Searching...");
    const { data: searchResults } = await axios.get(`${searchUrl}/${query}`);
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
  };

  return (
    <Autocomplete
      sx={searchBarStyle}
      disableCloseOnSelect={true}
      groupBy={(option) => option.LayerName}
      inputValue={inputValue}
      isOptionEqualToValue={(option, value) => option.ListValue === value.ListValue}
      noOptionsText={noOptionsText}
      open={open}
      options={options}
      onBlur={resetSearchBar}
      onChange={(event = undefined, newValue) => setValue(newValue)}
      onClose={resetSearchBar}
      onInputChange={(event = undefined, newInputValue) => setInputValue(newInputValue)}
      getOptionLabel={(option) => option.ListValue}
      renderInput={(params) => <TextField {...params} label="Search COSMOS" />}
      renderOption={(params, option) => {
        return (
          <li {...params} key={option.key}>
            {option.ListValue}
          </li>
        );
      }}
      value={value}
    />
  );
};

export default SearchBar;
