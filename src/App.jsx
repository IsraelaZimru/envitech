import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";
import PageData from "../src/data/Legends.json";

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
      {show && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              border: " 2px black solid",
              textAlign: "left",
              marginTop: "100px",
              padding: "20px 60px",
              alignSelf: "center",
              width: "40%",
            }}
          >
            {/* CLOSE BUTTON */}
            <p
              style={{ textAlign: "right", fontWeight: "bolder" }}
              onClick={closeLegend}
            >
              X
            </p>
            {selectedLegend.tags.map((tag) => (
              <p>
                <span
                  style={{
                    padding: "4px 20px",
                    marginRight: "10px",
                    backgroundColor: tag.Color,
                  }}
                ></span>
                {tag.Label}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
