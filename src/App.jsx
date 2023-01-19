import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import PageData from "../src/data/Legends.json";
import LegendCard from "./components/LegendCard";
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
    <div className="App">
      <Nav fill variant="tabs">
        {!!PageData &&
          PageData.MonitorType.map((item, i) => {
            const MonitorTypeId = item.Id;
            return (
              <NavDropdown title={item.Name}>
                {PageData.Monitor.filter(
                  (x) => x.MonitorTypeId === MonitorTypeId
                ).map((link, i) => (
                  <NavDropdown.Item onClick={() => handleSelect(item.LegendId)}>
                    {link.Name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            );
          })}
      </Nav>
      {show && <LegendCard data={selectedLegend} closeLegend={closeLegend} />}
    </div>
  );
}

export default App;
