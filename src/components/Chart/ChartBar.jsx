import React from "react";
import './ChartBar.css'

const ChartBar = (props) => {
  let charFillHeight = "0%";

  if (props.max > 0) {
    charFillHeight = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          style={{ height: charFillHeight }}
          className="chart-bar__fill"
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
