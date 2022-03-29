import DetailsTable from "../../Common/DetailsTable";

const headings = ["Land Use", "% of Lot", "Plan Area", "Plan Type"];

const SecondaryPlanTable = ({ data }) => {
  return <DetailsTable headings={headings} data={data} />;
};

export default SecondaryPlanTable;
