import Grid from "@mui/material/Grid";
import MapFrame from "./components/MapFrame";
import Controlbar from "./components/ControlBar/ControlBar";
import AppTitleBar from "./components/AppTitleBar/AppTitleBar";
import "./app.css";
import "toastify-js/src/toastify.css";

function App() {
  return (
    <>
      <AppTitleBar xs={12} />
      <Grid container direction="row">
        <Grid item className="controlDiv" xs={3} md={4} lg={3}>
          <Controlbar />
        </Grid>
        <Grid item className="viewDiv" xs={9} md={8} lg={9}>
          <MapFrame />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
