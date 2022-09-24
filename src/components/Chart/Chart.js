import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = function (props) {
  console.log(props);
  const dataPointsValues = props.dataPoints.map((data) => data.value);
  const totalMax = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((point) => {
        return (
          <ChartBar
            key={point.label}
            value={point.value}
            maxValue={totalMax}
            label={point.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
