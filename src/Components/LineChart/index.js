import React from "react";
import { Wrapper } from './style';

import { Line } from "react-chartjs-2";

const data = {
  labels: ["2021-02-03", "2021-02-04", "2021-02-05", "2021-02-06", "2021-02-07", "2021-02-08", "2021-02-09", ""],
  datasets: [
    {
      label: "",
      data: [0, 0, 0, 0, 0, 0, 0, 1],
      fill: true,
      backgroundColor: "#fff",
      borderColor: "#55ccc1",
      tension: 0,
    }
  ]
};

const options = {
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      gridLines: {
        display: false
      },
      max: 1,
      min: 0,
      ticks: {
        stepSize: 0.25
      }
    }],
  },
  legend: {
    display: false
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem) {
        return tooltipItem.yLabel;
      }
    }
  }
}

export default function LineChart() {
  return (
    <Wrapper>
      <Line data={data} options={options} />
    </Wrapper>
  );
}