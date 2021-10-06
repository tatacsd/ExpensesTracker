import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // calculate the height of the bar
  let barFillHeight = "0%";

  // return a string for to use in css
  if (props.max > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* passing a js object as a style value */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
