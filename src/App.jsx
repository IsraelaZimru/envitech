import { useState } from "react";
import PageData from "../src/data/Legends.json";
import LegendCard from "./components/LegendCard";
import MyNavbar from "./components/MyNavbar";

function App() {
  const [show, setShow] = useState(false);
  const [selectedLegend, setSelectedLegend] = useState({
    monitor: null,
    legend: null,
    MonitorType: null,
  });

  const handleSelect = (monitor, MonitorType) => {
    const legend = PageData.Legends.find((x) => x.Id === MonitorType.LegendId);
    setSelectedLegend({ legend, monitor, MonitorType });
    setShow(true);
  };

  const closeLegend = () => {
    setShow(false);
    setSelectedLegend({});
  };

  return (
    <>
      <MyNavbar
        data={PageData}
        handleSelect={handleSelect}
        selectedNavItemId={selectedLegend?.MonitorType?.Id}
      />
      {show && <LegendCard data={selectedLegend} closeLegend={closeLegend} />}
    </>
  );
}

export default App;
