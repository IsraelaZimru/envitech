import { useState } from "react";

import PageData from "../src/data/Legends.json";
import LegendCard from "./components/LegendCard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [selectedLegend, setSelectedLegend] = useState(PageData.Legends[1]);

  const handleSelect = (id) => {
    const legend = PageData.Legends.find((x) => x.Id === id);
    console.log("legend", legend);
    setSelectedLegend(legend);
    setShow(true);
  };

  const closeLegend = () => setShow(false);
  return (
    <div>
      <Navbar data={PageData} handleSelect={handleSelect}/>
      {show && <LegendCard data={selectedLegend} closeLegend={closeLegend} />}
    </div>
  );
}

export default App;
