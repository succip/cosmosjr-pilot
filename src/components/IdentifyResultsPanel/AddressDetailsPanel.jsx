import { useEffect, useState } from "react";
import settings from "../../config/Settings";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import AttributeTable from "./AttributeTable";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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

  return (
    <>
      <TreeView
        defaultCollapseIcon={<KeyboardArrowDownIcon />}
        defaultExpandIcon={<KeyboardArrowRightIcon />}
      >
        <TreeItem
          nodeId={"0"}
          label={"Property Details"}
          children={<AttributeTable attributes={propertyData} />}
        />
        <TreeItem
          nodeId={"1"}
          label={"Assessment Details"}
          children={<AttributeTable attributes={propertyData} />}
        />
        <TreeItem
          nodeId={"2"}
          label={"Servicing Details"}
          children={<AttributeTable attributes={propertyData} />}
        />
        <TreeItem
          nodeId={"3"}
          label={"OCP Details"}
          children={<AttributeTable attributes={propertyData} />}
        />
        <TreeItem
          nodeId={"4"}
          label={"Zoning Details"}
          children={<AttributeTable attributes={propertyData} />}
        />
        <TreeItem
          nodeId={"5"}
          label={"Secondary Plan Details"}
          children={<AttributeTable attributes={propertyData} />}
        />
      </TreeView>
    </>
  );
};

export default AddressDetailsPanel;
