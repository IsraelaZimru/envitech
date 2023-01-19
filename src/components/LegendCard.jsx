import React from "react";
import Button from "react-bootstrap/Button";
import "../css/legend.css";

export default function LegendCard({
  data: { legend, monitor, MonitorType },
  closeLegend,
}) {
  return (
    <div id="container">
      <div id="card">
        {/* CLOSE BUTTON */}
        <Button
          variant="outline-danger"
          className="closeBtn"
          onClick={closeLegend}
        >
          X
        </Button>

        <h2>{monitor.Name}</h2>
        {legend.tags.map((tag) => (
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
  );
}
