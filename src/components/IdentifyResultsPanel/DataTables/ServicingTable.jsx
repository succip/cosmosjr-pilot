import DetailsTable from "../../Common/DetailsTable";

const headings = ["Service", "Start Date", "End Date"];

const ServicingTable = ({ data }) => {
  return <DetailsTable headings={headings} data={data} />;
};

export default ServicingTable;
