import { useEffect, useState } from "react";
import settings from "../../config/Settings";
import { dataServices, dataServiceUrls } from "../../config/Settings";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DetailsTable from "../Common/DetailsTable";
import { formatPropertyAttributes } from "../../js/Identify";
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
    const url = `${settings.dataServiceUrl}/GetPropertyDataAll/${propertyNumber}`;
    const { data } = await axios.get(url);
    setPropertyData(formatPropertyAttributes(data));
  };

  const onNodeToggle = async (event = undefined, nodeIds) => {
    if (nodeIds.length > expanded.length) await fetchData(nodeIds[0]);
    setExpanded(nodeIds);
  };

  useEffect(() => {
    fetchPropertyData();
    setExpanded(["property"]);
    fetchData("secondaryPlan");
  }, []);

  const fetchData = async (type) => {
    switch (type) {
      case "assessment": {
        if (!assessmentData.length) {
          const { data } = await axios.get(`${dataServiceUrls[type]}/${propertyNumber}`);
          setAssessmentData(data);
        }
        break;
      }
      case "servicing": {
        if (!servicingData.length) {
          const { data } = await axios.get(`${dataServiceUrls[type]}/${propertyNumber}`);
          setServicingData(data);
        }
        break;
      }
      case "ocp": {
        if (!ocpData.length) {
          const { data } = await axios.get(`${dataServiceUrls[type]}/${mslink}`);
          setOcpData(data);
        }
        break;
      }
      case "zoning": {
        if (!zoningData.length) {
          const { data } = await axios.get(`${dataServiceUrls[type]}/${mslink}`);
          setZoningData(formatPropertyAttributes(data));
        }
        break;
      }
      case "secondaryPlan": {
        if (!secondaryPlanData.length) {
          const { data } = await axios.get(`${dataServiceUrls[type]}/${mslink}`);
          setSecondaryPlanData(data);
        }
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
          nodeId={"property"}
          label={"Property Details"}
          children={<DetailsTable data={propertyData} />}
        />
        <TreeItem
          nodeId={"assessment"}
          label={"Assessment Details"}
          children={
            <DetailsTable headings={dataServices.assessment.headings} data={assessmentData} />
          }
        />
        <TreeItem
          nodeId={"servicing"}
          label={"Servicing Details"}
          children={
            <DetailsTable headings={dataServices.servicing.headings} data={servicingData} />
          }
        />
        <TreeItem
          nodeId={"ocp"}
          label={"OCP Details"}
          children={<DetailsTable headings={dataServices.ocp.headings} data={ocpData} />}
        />
        <TreeItem
          nodeId={"zoning"}
          label={"Zoning Details"}
          children={<DetailsTable headings={dataServices.zoning.headings} data={zoningData} />}
        />
        {secondaryPlanData.length > 0 && (
          <TreeItem
            nodeId={"secondaryPlan"}
            label={"Secondary Plan Details"}
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
