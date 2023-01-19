import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";
import PageData from "../src/data/Legends.json";

function App() {
  const [show, setShow] = useState(false);

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div className="App">
      <Nav fill variant="tabs" onSelect={handleSelect}>
        {!!PageData &&
          PageData.MonitorType.map((item, i) => {
            const MonitorTypeId = item.Id;
            // console.log(
            //   "{item.name",
            //   item,
            //   "MonitorTypeId",
            //   MonitorTypeId,
            //   PageData.Monitor.filter((x) => x.MonitorTypeId === MonitorTypeId)
            // );
            return (
              <NavDropdown title={item.Name}>
                {PageData.Monitor.filter(
                  (x) => x.MonitorTypeId === MonitorTypeId
                ).map((link, i) => (
                  <NavDropdown.Item eventKey={item.LegendId}>
                    {link.Name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            );
          })}
      </Nav>
    </div>
  );
}

export default App;
