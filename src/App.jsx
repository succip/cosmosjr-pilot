import MapFrame from "./components/MapFrame";
import Controlbar from "./components/ControlBar";
import "./app.css";

function App() {
  return (
    <div className="row g-0">
      <div className="col-3">
        <Controlbar />
      </div>
      <div className="col-9">
        <MapFrame />
      </div>
    </div>
  );
}

export default App;
