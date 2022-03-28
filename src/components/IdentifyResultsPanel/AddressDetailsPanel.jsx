import { useEffect, useState } from "react";
import settings from "../../config/Settings";
import AttributeTable from "./AttributeTable";
const axios = require("axios");

const AddressDetailsPanel = ({ mslink }) => {
  const [propertyData, setPropertyData] = useState([]);

  const fetchPropertyData = async () => {
    const url = `${settings.dataServiceUrl}/GetPropertyDataAll/${mslink};`;
    const { data } = await axios.get(url);
    setPropertyData(data);
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  return <>{<AttributeTable attributes={propertyData} />}</>;
};

export default AddressDetailsPanel;
