import settings from "../../config/Settings";
const axios = require("axios");

const AddressDetailsPanel = ({ mslink }) => {
  const url = `${settings.dataServiceUrl}/GetPropertyDataAll/${mslink};`;
  axios.get(url).then((results) => console.log(results));
  return <p>test</p>;
};

export default AddressDetailsPanel;
