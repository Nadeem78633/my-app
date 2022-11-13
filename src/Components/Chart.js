import React from "react";

import Data from "./Data/Wine-Data.json";

//Echarts
import ReactEcharts from "echarts-for-react";

const Chart = ({ data }) => {
  const malicAcid = data["Malic Acid"];

  const newData = Data["Malic Acid"];
  console.log(newData);
  const alcohol = data.Alcohol;
  const colorIntensity = data["Color intensity"];
  const hue = data.Hue;

  return (
    <div>
      {/* Bar PLot */}

      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ["Alcohol", "Malic Acid"],
            name: "Alcohol",
          },
          yAxis: {
            type: "value",
            name: "Malic Acid",
            legend: {
              // Try 'horizontal'
              orient: "vertical",
              right: 10,
              top: "center",
            },
          },
          series: [
            {
              data: [alcohol, malicAcid],
              type: "bar",
              barWidth: "20%",
            },
          ],
        }}
      />
      {/* Scatter plot */}

      <ReactEcharts
        option={{
          xAxis: { type: "value", name: "Color Intensity" },
          yAxis: {
            name: "Hue",
          },
          series: [
            {
              symbolSize: 20,
              data: [colorIntensity, hue],
              type: "scatter",
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
