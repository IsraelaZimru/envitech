import React from "react";

export default function LegendCard({ data, closeLegend }) {
  return (
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
        {data.tags.map((tag) => (
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
