import { useEffect, useState } from "react";
import settings from "../../config/Settings";
import { dataServices } from "../../config/Settings";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AttributeTable from "./AttributeTable";
import DetailsTable from "../Common/DetailsTable";
const axios = require("axios");

const AddressDetailsPanel = ({ mslink, propertyNumber }) => {
  const [propertyData, setPropertyData] = useState([]);
  const [assessmentData, setAssessmentData] = useState([]);
  const [servicingData, setServicingData] = useState([]);
  const [ocpData, setOcpData] = useState([]);
  const [zoningData, setZoningData] = useState([]);
  const [secondaryPlanData, setSecondaryPlanData] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const fetchPropertyData = async () => {
    const url = `${settings.dataServiceUrl}/GetPropertyDataAll/${mslink};`;
    const { data } = await axios.get(url);
    setPropertyData(data);
  };

  const onNodeToggle = (undefiend, nodeIds) => {
    const newestNode = nodeIds[0];
    console.log(nodeIds);
    setExpanded(nodeIds);
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
        break;
      }
      case "servicing": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${propertyNumber}`);
        setServicingData(data);
        break;
      }
      case "ocp": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${mslink}`);
        setOcpData(data);
        break;
      }
      case "zoning": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${mslink}`);
        setZoningData(data);
        break;
      }
      case "secondaryPlan": {
        const { data } = await axios.get(`${settings.dataServiceUrls[type]}/${mslink}`);
        setSecondaryPlanData(data);
        break;
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
        expanded={expanded}
        onNodeToggle={onNodeToggle}
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
          children={
            <DetailsTable headings={dataServices.servicing.headings} data={servicingData} />
          }
        />
        <TreeItem
          nodeId={"3"}
          label={"OCP Details"}
          onClick={() => fetchData("ocp")}
          children={<DetailsTable headings={dataServices.ocp.headings} data={ocpData} />}
        />
        <TreeItem
          nodeId={"4"}
          label={"Zoning Details"}
          onClick={() => fetchData("zoning")}
          children={<DetailsTable headings={dataServices.zoning.headings} data={zoningData} />}
        />
        {secondaryPlanData.length > 0 && (
          <TreeItem
            nodeId={"5"}
            label={"Secondary Plan Details"}
            onClick={() => fetchData("secondaryPlan")}
            children={
              <DetailsTable
                headings={dataServices.secondaryPlan.headings}
                data={secondaryPlanData}
              />
            }
          />
        )}
      </TreeView>
    </>
  );
};

export default AddressDetailsPanel;
