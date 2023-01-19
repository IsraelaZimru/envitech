import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navbar.css";

export default function MyNavbar({ data, handleSelect, selectedNavItemId }) {
  const [selected, setSelected] = useState(undefined);
  const [show, setShow] = useState(true);

  return (
    <Nav fill className="header">
      {!!data &&
        data.MonitorType.map((item, i) => {
          const monitors = data.Monitor.filter(
            (monitor) => monitor.MonitorTypeId === item.Id
          );
          return (
            <NavDropdown
              className={`costomDropDown ${
                selectedNavItemId === item.Id ? "white_bkgd" : "blue_bkgd"
              }`}
              drop="down-centered"
              key={i}
              title={item.Name}
            >
              {monitors.map((x, j) => (
                <NavDropdown.Item
                  className="nav_item"
                  key={j}
                  onClick={() => handleSelect(x, item)}
                >
                  {x.Name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          );
        })}
    </Nav>
  );
}
