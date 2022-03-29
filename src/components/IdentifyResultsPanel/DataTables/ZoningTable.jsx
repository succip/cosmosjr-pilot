import DetailsTable from "../../Common/DetailsTable";

const headings = ["Zone", "% of Lot", "Zone Bylaws", "Zone LUC"];

const ZoningTable = ({ data }) => {
  return <DetailsTable headings={headings} data={data} />;
};

export default ZoningTable;
