import React from "react";
import { Data } from "../../components/config/BillsData";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const ReccuringList = (arr, str) => {
  let newList = [];
  for (let i in arr) {
    if (arr[i].type === "send" && arr[i].recurring === str) {
      newList.push(parseInt(arr[i].amount));
    }
  }
  return newList;
};

function sum(arr) {
  return arr.reduce((x, y) => x + y, 0);
}

// variables

const PieChart = () => {
  const RECLIST = ReccuringList(Data.bank.transactions, "yes");
  const NONRECLIST = ReccuringList(Data.bank.transactions, "no");
  const TOTALREC = sum(RECLIST);
  const TOTALNONREC = sum(NONRECLIST);
  // data

  return (
    <div className="m-10">
      <Pie
        data={{
          labels: ["Recurring", "Non Recurring"],
          datasets: [
            {
              label: "My First Dataset",
              data: [TOTALREC, TOTALNONREC],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],

              borderWidth: 1,
              hoverOffset: 4,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  reverse: false,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
