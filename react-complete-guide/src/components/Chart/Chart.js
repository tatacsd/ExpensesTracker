import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // Get the dataPoints values and convert to numbers
  // to pass in Math.max instead of the array of objects

  // Array of number values (12 values)
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // ... pullout all the array values to be used stand alone (12 elements)
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
