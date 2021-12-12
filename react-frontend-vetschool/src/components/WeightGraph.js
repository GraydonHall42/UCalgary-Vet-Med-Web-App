import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {Card} from "react-bootstrap";

const WeightGraph = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = (weightData) => {
    weightData.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.date) - new Date(b.date);
    });


    let weights = weightData.map(w => w.weight)
    let dates = weightData.map(w => w.date)


    setChartData({
      labels: dates,
      datasets: [
        {
          label: "Weight vs Time",
          data: weights,
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4
        }
      ]
    });
  };

  useEffect(() => {
    chart(props.weightData);
  },[props.weightData]) //this will ensure that this prop is watched for changes

  return (
    <Card>
      <Card.Title>Weight Vs Time</Card.Title>
      <div className="App">
        <div>
          <Line
            onElementsClick={e => console.log(e)}
            data={chartData}
            options={{
              responsive: true,
              // title: { text: "Weight vs Time", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: true
                    },
                    type: 'time',
                    time: {
                      unit: 'month'
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeightGraph;