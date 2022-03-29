import DetailsTable from "../../Common/DetailsTable";

const headings = ["Year", "Gross Land", "Gross Improvements", "Gross Assessments"];

const AssessmentTable = ({ data }) => {
  return <DetailsTable headings={headings} data={data} />;
};

export default AssessmentTable;
