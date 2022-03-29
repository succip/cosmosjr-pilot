import { useEffect, useState } from "react";
import settings from "../../config/Settings";
import { dataServices } from "../../config/Settings";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AttributeTable from "./AttributeTable";
import AssessmentTable from "./DataTables/AssessmentTable";
import ServicingTable from "./DataTables/ServicingTable";
import OcpTable from "./DataTables/OcpTable";
import ZoningTable from "./DataTables/ZoningTable";
import SecondaryPlanTable from "./DataTables/SecondaryPlanTable";
import DetailsTable from "../Common/DetailsTable";
const axios = require("axios");

const AddressDetailsPanel = ({ mslink, propertyNumber }) => {
  const [propertyData, setPropertyData] = useState([]);
  const [assessmentData, setAssessmentData] = useState([]);
  const [servicingData, setServicingData] = useState([]);
  const [ocpData, setOcpData] = useState([]);
  const [zoningData, setZoningData] = useState([]);
  const [secondaryPlanData, setSecondaryPlanData] = useState([]);

  const fetchPropertyData = async () => {
    const url = `${settings.dataServiceUrl}/GetPropertyDataAll/${mslink};`;
    const { data } = await axios.get(url);
    setPropertyData(data);
  };

  useEffect(() => {
    fetchPropertyData();
    fetchData("secondaryPlan");
  }, []);

  const fetchData = async (type) => {
    switch (type) {
      case "assessment": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${propertyNumber}`);
        setAssessmentData(data);
        return;
      }
      case "servicing": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${propertyNumber}`);
        setServicingData(data);
        return;
      }
      case "ocp": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${mslink}`);
        setOcpData(data);
        return;
      }
      case "zoning": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${mslink}`);
        setZoningData(data);
        return;
      }
      case "secondaryPlan": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${mslink}`);
        setSecondaryPlanData(data);
        return;
      }
      default:
        return type;
    }
  };

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
          onClick={() => fetchData("assessment")}
          children={
            <DetailsTable headings={dataServices.assessment.headings} data={assessmentData} />
          }
        />
        <TreeItem
          nodeId={"2"}
          label={"Servicing Details"}
          onClick={() => fetchData("servicing")}
          children={<ServicingTable data={servicingData} />}
        />
        <TreeItem
          nodeId={"3"}
          label={"OCP Details"}
          onClick={() => fetchData("ocp")}
          children={<OcpTable data={ocpData} />}
        />
        <TreeItem
          nodeId={"4"}
          label={"Zoning Details"}
          onClick={() => fetchData("zoning")}
          children={<ZoningTable data={zoningData} />}
        />
        <TreeItem
          nodeId={"5"}
          label={"Secondary Plan Details"}
          onClick={() => fetchData("secondaryPlan")}
          children={<SecondaryPlanTable data={secondaryPlanData} />}
        />
      </TreeView>
    </>
  );
};

export default AddressDetailsPanel;
