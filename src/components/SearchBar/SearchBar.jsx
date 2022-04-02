import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
  const options = [{ label: "Newton" }, { label: "Fleetwood" }];
  return (
    <Autocomplete
      options={options}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="Search COSMOS" />}
    />
  );
};

export default SearchBar;
