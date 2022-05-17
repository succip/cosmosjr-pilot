import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const PrintOutbox = ({ printedMaps }) => {
  return (
    <>
      <Typography align="center" variant="h6">
        Printed Maps
      </Typography>
      {printedMaps.map(({ titleText, url }, index) => {
        return (
          <Link key={index} href={url} target="_blank">
            {titleText ? titleText : "Your New Map"}
          </Link>
        );
      })}
    </>
  );
};

export default PrintOutbox;
