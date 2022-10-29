import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
    // const data = {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    //     datasets: [
    //         {
    //             label: 'Sales for 2020(M)',
    //             data: [3, 2, 2, 1, 5]
    //         }
    //     ]
    // }

  return (
    //   <Line data={data} />
      <Line
        datasetIdKey='id'
        data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
            {
                id: 1,
                label: '',
                data: [5, 6, 7],
            },
            {
                id: 2,
                label: '',
                data: [3, 2, 1],
            },
            ],
        }}
      />
  )
}

export default LineChart;
