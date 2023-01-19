import { useState } from "react";
import PageData from "../src/data/Legends.json";
import LegendCard from "./components/LegendCard";
import Navbar from "./components/Navbar";

function App() {
  const [show, setShow] = useState(false);
  const [selectedLegend, setSelectedLegend] = useState({
    monitor: null,
    legend: null,
  });

  const handleSelect = (monitor, MonitorTypeId) => {
    const legend = PageData.Legends.find((x) => x.Id === MonitorTypeId);
    // console.log("legend", legend);
    setSelectedLegend({ legend, monitor });
    setShow(true);
  };

  const closeLegend = () => setShow(false);

  return (
    <>
      <Navbar data={PageData} handleSelect={handleSelect} />
      {show && <LegendCard data={selectedLegend} closeLegend={closeLegend} />}
    </>
  );
}

export default App;
