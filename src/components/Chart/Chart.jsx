import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const expensesValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxExpense = Math.max(...expensesValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={maxExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
