import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar({ data, handleSelect }) {
  return (
    <Nav fill variant="tabs">
      {!!data &&
        data.MonitorType.map((item, i) => {
          const monitors = data.Monitor.filter(
            (monitor) => monitor.MonitorTypeId === item.Id
          );
          return (
            <NavDropdown key={i} title={item.Name}>
              {monitors.map((selected, i) => (
                <NavDropdown.Item
                  key={i}
                  onClick={() => handleSelect(selected, item.LegendId)}
                >
                  {selected.Name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          );
        })}
    </Nav>
  );
}
