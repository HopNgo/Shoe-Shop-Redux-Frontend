import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["year", "Sales", "Cost", "Profit"],
  ["2015", 100, 40, 60],
  ["2016", 117, 56, 62],
  ["2017", 66, 36, 30],
  ["2018", 103, 54, 49],
  ["2019", 103, 54, 49],
  ["2020", 113, 54, 59],
  ["2021", 93, 65, 28],
  ["2022", 20, 15, 5],
];

export const options = {
  chart: {
    title: "SHOE SHOP performance",
    subtitle: "Sales, costs and profits from 2015 to 2022",
  },
  axes: {
    y: {
      0: { side: "left", label: "Price (million dong)" }, // Top x-axis.
    },
  },
};

const Charts = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
};

export default Charts;
