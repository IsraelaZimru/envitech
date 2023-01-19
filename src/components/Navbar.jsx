import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar({ data, handleSelect }) {
  return (
    <Nav fill variant="tabs">
      {!!data &&
        data.MonitorType.map((item, i) => {
          const MonitorTypeId = item.Id;
          return (
            <NavDropdown title={item.Name}>
              {data.Monitor.filter(
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
  );
}
