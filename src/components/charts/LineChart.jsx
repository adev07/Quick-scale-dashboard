import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const MultiSeriesChart = () => {
  const { theme, isFilterEnabled } = useSelector((state) => state.dashboard);
  const rawData = [
    { date: "2021-01", value: 11, theme: "Generative AI" },
    { date: "2021-02", value: 10, theme: "Generative AI" },
    { date: "2021-03", value: 9, theme: "Generative AI" },
    { date: "2021-04", value: 8, theme: "Generative AI" },
    { date: "2021-05", value: 9, theme: "Generative AI" },
    { date: "2021-06", value: 9, theme: "Generative AI" },
    { date: "2021-07", value: 8, theme: "Generative AI" },
    { date: "2021-08", value: 5, theme: "Generative AI" },
    { date: "2021-09", value: 13, theme: "Generative AI" },
    { date: "2021-10", value: 10, theme: "Generative AI" },
    { date: "2021-11", value: 6, theme: "Generative AI" },
    { date: "2021-12", value: 5, theme: "Generative AI" },
    { date: "2022-01", value: 12, theme: "Generative AI" },
    { date: "2022-02", value: 8, theme: "Generative AI" },
    { date: "2022-03", value: 9, theme: "Generative AI" },
    { date: "2022-04", value: 13, theme: "Generative AI" },
    { date: "2022-05", value: 13, theme: "Generative AI" },
    { date: "2022-06", value: 13, theme: "Generative AI" },
    { date: "2022-07", value: 10, theme: "Generative AI" },
    { date: "2022-08", value: 25, theme: "Generative AI" },
    { date: "2022-09", value: 21, theme: "Generative AI" },
    { date: "2022-10", value: 19, theme: "Generative AI" },
    { date: "2022-11", value: 25, theme: "Generative AI" },
    { date: "2022-12", value: 19, theme: "Generative AI" },
    { date: "2023-01", value: 23, theme: "Generative AI" },
    { date: "2023-02", value: 31, theme: "Generative AI" },
    { date: "2023-03", value: 62, theme: "Generative AI" },
    { date: "2023-04", value: 72, theme: "Generative AI" },
    { date: "2023-05", value: 68, theme: "Generative AI" },
    { date: "2023-06", value: 58, theme: "Generative AI" },
    { date: "2023-07", value: 44, theme: "Generative AI" },
    { date: "2023-08", value: 54, theme: "Generative AI" },
    { date: "2023-09", value: 52, theme: "Generative AI" },
    { date: "2023-10", value: 64, theme: "Generative AI" },
    { date: "2023-11", value: 60, theme: "Generative AI" },
    { date: "2023-12", value: 70, theme: "Generative AI" },
    { date: "2024-01", value: 61, theme: "Generative AI" },
    { date: "2024-02", value: 67, theme: "Generative AI" },
    { date: "2024-03", value: 55, theme: "Generative AI" },
    { date: "2024-04", value: 44, theme: "Generative AI" },
    { date: "2024-05", value: 27, theme: "Generative AI" },
    { date: "2024-06", value: 10, theme: "Generative AI" },
    // Adding a second theme for demonstration
    { date: "2021-01", value: 5, theme: "AI Ethics" },
    { date: "2021-02", value: 6, theme: "AI Ethics" },
    { date: "2021-03", value: 7, theme: "AI Ethics" },
    { date: "2021-04", value: 8, theme: "AI Ethics" },
    { date: "2021-05", value: 6, theme: "AI Ethics" },
    { date: "2021-06", value: 7, theme: "AI Ethics" },
    { date: "2021-07", value: 9, theme: "AI Ethics" },
    { date: "2021-08", value: 10, theme: "AI Ethics" },
    { date: "2021-09", value: 11, theme: "AI Ethics" },
    { date: "2021-10", value: 12, theme: "AI Ethics" },
    { date: "2021-11", value: 13, theme: "AI Ethics" },
    { date: "2021-12", value: 14, theme: "AI Ethics" },
    { date: "2022-01", value: 15, theme: "AI Ethics" },
    { date: "2022-02", value: 14, theme: "AI Ethics" },
    { date: "2022-03", value: 13, theme: "AI Ethics" },
    { date: "2022-04", value: 12, theme: "AI Ethics" },
    { date: "2022-05", value: 11, theme: "AI Ethics" },
    { date: "2022-06", value: 10, theme: "AI Ethics" },
    { date: "2022-07", value: 9, theme: "AI Ethics" },
    { date: "2022-08", value: 8, theme: "AI Ethics" },
    { date: "2022-09", value: 7, theme: "AI Ethics" },
    { date: "2022-10", value: 6, theme: "AI Ethics" },
    { date: "2022-11", value: 5, theme: "AI Ethics" },
    { date: "2022-12", value: 4, theme: "AI Ethics" },
    { date: "2023-01", value: 3, theme: "AI Ethics" },
    { date: "2023-02", value: 2, theme: "AI Ethics" },
    { date: "2023-03", value: 1, theme: "AI Ethics" },
    { date: "2023-04", value: 2, theme: "AI Ethics" },
    { date: "2023-05", value: 3, theme: "AI Ethics" },
    { date: "2023-06", value: 4, theme: "AI Ethics" },
    { date: "2023-07", value: 5, theme: "AI Ethics" },
    { date: "2023-08", value: 6, theme: "AI Ethics" },
    { date: "2023-09", value: 7, theme: "AI Ethics" },
    { date: "2023-10", value: 8, theme: "AI Ethics" },
    { date: "2023-11", value: 9, theme: "AI Ethics" },
    { date: "2023-12", value: 10, theme: "AI Ethics" },
    { date: "2024-01", value: 11, theme: "AI Ethics" },
    { date: "2024-02", value: 12, theme: "AI Ethics" },
    { date: "2024-03", value: 13, theme: "AI Ethics" },
    { date: "2024-04", value: 14, theme: "AI Ethics" },
    { date: "2024-05", value: 15, theme: "AI Ethics" },
    { date: "2024-06", value: 16, theme: "AI Ethics" },
  ];

  const processData = (data) => {
    const themes = {};
    data.forEach((item) => {
      if (!themes[item.theme]) {
        themes[item.theme] = [];
      }
      themes[item.theme].push({ x: new Date(item.date), y: item.value });
    });

    return Object.keys(themes).map((theme) => ({
      name: theme,
      data: themes[theme],
    }));
  };

  const [chartsData, setChartsData] = useState([]);

  useEffect(() => {
    if(!isFilterEnabled)setChartsData(processData(rawData));
    else {
      const processedData = processData(rawData);
      setChartsData(processedData.filter((item) => item.name === theme));
    }
  }, [isFilterEnabled]);

  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      type: "datetime",
    },
    markers: {
      size: [4, 8, 12],
    },
  };

  return (
    <div>
      <Chart options={options} series={chartsData} type="line" height={350} />
    </div>
  );
};

export default MultiSeriesChart;
