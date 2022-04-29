import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import settings from "../../config/Settings";
import { findFeature, findLayer } from "../../js/Search";
import Toast from "../Common/Toast";
import { generateId } from "../../js/Utilities";
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
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
      if (value.ListValue.includes("Layer")) {
        findLayer(value);
        setToastMessage(`Added layer to map: ${value.LayerName}`);
        setToastOpen(true);
      } else {
        findFeature(value);
      }
    }
  }, [value]);

  useEffect(() => {}, [options]);

  const fetchSearchData = async (query) => {
    setOpen(true);
    setNoOptionsText("Searching...");
    const { data: searchResults } = await axios.get(`${searchUrl}/${query}`);
    let newResults = [];

    if (searchResults.length > 0) {
      searchResults.forEach((searchResult) => {
        newResults.push({ ...searchResult, key: generateId() });
      });

      newResults = _.sortBy(newResults, "LayerName");
    } else {
      setNoOptionsText("No results found");
    }

    setOptions(newResults);
  };

  return (
    <>
      <Toast open={toastOpen} message={toastMessage} onClose={() => setToastOpen(false)} />
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
    </>
  );
};

export default SearchBar;
