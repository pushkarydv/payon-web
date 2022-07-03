import React from "react";
import { Data } from "../../components/config/BillsData";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//
// Expenses function
const ReccuringList = (arr, str) => {
  let newList = [];
  for (let i in arr) {
    if (arr[i].type === "send" && arr[i].recurring === str) {
      newList.push(parseInt(arr[i].amount));
    }
  }
  return newList;
};
// Income function
const IncomeList = (arr) => {
  let newList = [];
  for (let i in arr) {
    if (arr[i].type === "recieve") {
      newList.push(parseInt(arr[i].amount));
    }
  }
  return newList;
};

function sum(arr) {
  return arr.reduce((x, y) => x + y, 0);
}

//variables
const RECLIST = ReccuringList(Data.bank.transactions, "yes");
const NONRECLIST = ReccuringList(Data.bank.transactions, "no");
const INCOME = IncomeList(Data.bank.transactions);
const TOTALREC = sum(RECLIST);
const TOTALNONREC = sum(NONRECLIST);
const TOTALINC = sum(INCOME);
// variables end
export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Income/Expense Chart",
    },
  },
};

const labels = ["July"];
// added
export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [TOTALINC],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Reocurring Expenses",
      data: [TOTALREC],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Non Recurring Expenses",
      data: [TOTALNONREC],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
    },
  ],
};

//
const BarChat = () => {
  return (
    <>
      <Bar options={options} data={data} />;
    </>
  );
};

export default BarChat;
