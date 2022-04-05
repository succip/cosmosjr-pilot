import { useEffect, useState } from "react";
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
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(testOptions);
  }, []);

  const onChange = (event = undefined, newValue) => {};

  const onClose = () => {
    setOptions([]);
  };

  return (
    <Autocomplete
      sx={searchBarStyle}
      options={options}
      getOptionLabel={(option) => option.ListValue}
      renderInput={(params) => <TextField {...params} label="Search COSMOS" />}
    />
  );
};

export default SearchBar;

const testOptions = [
  {
    FieldName: "",
    FieldValue: "",
    LayerName: "Aerial Photo April/May 2011",
    ListValue: "Aerial Photo April/May 2011 - Layer",
  },
  {
    FieldName: "GCROADS",
    FieldValue: "11 AVE",
    LayerName: "Road Centrelines",
    ListValue: "11 AVE - Road",
  },
  {
    FieldName: "INTID",
    FieldValue: "63995",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 161 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "6346",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 161A ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "6346",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 162 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "4554",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 163 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "36",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 163A ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "36",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 163B ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "3748",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 164 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66562",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 166 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60873",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 167 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61010",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 168 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60192",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 169 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62655",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 170 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65156",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 171 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66242",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 172 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62251",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 173 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61357",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 174 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60397",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 175 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "63642",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 176 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60116",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 177 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62867",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 178 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61106",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 179 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66534",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 180 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "63447",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 181 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62887",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 182 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65405",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 183 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66449",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 184 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65957",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 185 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66488",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 186 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65101",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 187 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65915",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 188 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62620",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 189 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "63978",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 190 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61588",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 191 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65395",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 192 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60885",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 193 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61672",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 194 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61515",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 195 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62699",
    LayerName: "Intersection Search",
    ListValue: "11 AVE & 196 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "63995",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 161 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "6346",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 161A ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "6346",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 162 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "4554",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 163 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "36",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 163A ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "36",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 163B ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "3748",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 164 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66562",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 166 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60873",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 167 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61010",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 168 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60192",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 169 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62655",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 170 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65156",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 171 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66242",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 172 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62251",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 173 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61357",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 174 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60397",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 175 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "63642",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 176 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60116",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 177 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62867",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 178 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61106",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 179 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66534",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 180 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "63447",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 181 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62887",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 182 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65405",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 183 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66449",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 184 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65957",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 185 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "66488",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 186 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65101",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 187 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65915",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 188 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62620",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 189 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "63978",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 190 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61588",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 191 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "65395",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 192 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "60885",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 193 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61672",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 194 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "61515",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 195 ST - Road Intersection",
  },
  {
    FieldName: "INTID",
    FieldValue: "62699",
    LayerName: "Intersection Search",
    ListValue: "11 AVE AND 196 ST - Road Intersection",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0001-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0001-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0002-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0002-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0003-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0003-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0004-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0004-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0006-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0006-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0007-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0007-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0008-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0008-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0009-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0009-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0010-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0010-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0012-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0012-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0013-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0013-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0014-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0014-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0015-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0015-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0016-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0016-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0017-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0017-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0017-00",
    LayerName: "Dev Apps - In Process",
    ListValue: "11-0017-00 - Dev Apps (In Process)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0019-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0019-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0020-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0020-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0021-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0021-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0022-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0022-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0024-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0024-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0025-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0025-00 - Dev Apps (All)",
  },
  {
    FieldName: "PROJECT_NO",
    FieldValue: "11-0026-00",
    LayerName: "Dev Apps - All",
    ListValue: "11-0026-00 - Dev Apps (All)",
  },
];
