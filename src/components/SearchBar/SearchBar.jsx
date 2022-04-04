import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
const searchBarStyle = {
  backgroundColor: "white",
  m: 1,
  p: 0,
  width: 500,
};

const SearchBar = () => {
  const options = [{ label: "Newton" }, { label: "Fleetwood" }];
  return (
    <Autocomplete
      options={options}
      sx={searchBarStyle}
      renderInput={(params) => <TextField {...params} label="Search COSMOS" />}
    />
  );
};

export default SearchBar;
