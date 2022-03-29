import DetailsTable from "../../Common/DetailsTable";

const headings = ["Land Use", "% of Lot"];

const OcpTable = ({ data }) => {
  return <DetailsTable headings={headings} data={data} />;
};

export default OcpTable;
