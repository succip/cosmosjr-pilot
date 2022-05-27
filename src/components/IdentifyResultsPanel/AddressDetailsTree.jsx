import { useEffect, useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoadingIcon from "../Common/LoadingIcon";
import DetailsTable from "../Common/DetailsTable";
import { formatPropertyAttributes } from "../../js/Identify";
import { toast } from "../../js/Utilities";
const axios = require("axios");

const AddressDetailsTreeItem = ({
  id,
  label,
  url,
  tableHeadings,
  lookupValue,
  mslink,
  propertyNumber,
}) => {
  const [detailsData, setDetailsData] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const onNodeToggle = async (event = undefined, nodeIds) => {
    if (nodeIds[0] === id && !detailsData.length) await fetchData();
    setExpanded(nodeIds);
  };

  const fetchData = async () => {
    setDataLoading(true);
    const searchValue = lookupValue === "mslink" ? mslink : propertyNumber;
    const { data } = await axios.get(`${url}/${searchValue}`);
    if (data.length) {
      id === "property" ? setDetailsData(formatPropertyAttributes(data)) : setDetailsData(data);
    } else {
      toast({ text: `No ${label} found for this address.` });
    }
    setDataLoading(false);
  };

  useEffect(() => {
    if (id === "property") {
      fetchData();
      setExpanded(["property"]);
    }
  }, []);

  return (
    <>
      <TreeView
        onNodeToggle={onNodeToggle}
        defaultExpandIcon={dataLoading ? <LoadingIcon /> : <KeyboardArrowRightIcon />}
        defaultCollapseIcon={<KeyboardArrowDownIcon />}
        expanded={expanded}
      >
        <TreeItem
          nodeId={id}
          label={label}
          children={<DetailsTable data={detailsData} headings={tableHeadings} />}
        />
      </TreeView>
    </>
  );
};

export default AddressDetailsTreeItem;
