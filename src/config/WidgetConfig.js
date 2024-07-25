import MapViewModeToggle from "../components/MapViewModeToggle/MapViewModeToggle";
import OpenDialogTest from "../components/OpenDialogTest";
import Widget from "../components/Widget/Widget";
import MapLayerList from "../components/LayerListLegendPanel/MapLayerList";

export const widgets = [
  {
    component: <MapViewModeToggle />,
    position: "top-right",
  },
  {
    component: (
      <Widget title={"Test Title"}>
        <MapLayerList />
      </Widget>
    ),
    position: "top-right",
  },
];
