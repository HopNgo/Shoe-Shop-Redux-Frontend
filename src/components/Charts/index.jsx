import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Năm", "Doanh số", "Chi phí", "Lợi nhuận"],
  ["Năm 2015", 100, 40, 60],
  ["Năm 2016", 117, 56, 62],
  ["Năm 2017", 66, 36, 30],
  ["Năm 2018", 103, 54, 49],
  ["Năm 2019", 103, 54, 49],
  ["Năm 2020", 113, 54, 59],
  ["Năm 2021", 93, 65, 28],
  ["Năm 2022", 20, 15, 5],
];

export const options = {
  chart: {
    title: "Hiệu suất của SHOE SHOP",
    subtitle: "Doanh số, chi phí và lợi nhuận năm 2015-2022",
  },
  axes: {
    y: {
      0: { side: "left", label: "Giá tiền (Triệu đồng)" }, // Top x-axis.
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
