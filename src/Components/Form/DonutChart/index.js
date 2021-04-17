import React from "react";
import { Wrapper } from './style';

import { Doughnut} from "react-chartjs-2";

const data = {
    labels: [
      'No. of Invites',
      'Duration of Event',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'doughnut',
    data: data,
  };

export default function LineChart() {
  return (
    <Wrapper>
      <Doughnut data={data}  config= {config} />
    </Wrapper>
  );
}