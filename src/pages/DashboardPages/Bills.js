import React from "react";
import PieChart from "../../components/billsComponent/PieChart";
import { Data } from "../../components/config/BasicData";

function sum(arr) {
  return arr.reduce((x, y) => x + y, 0);
}
// To get list of expenses
const ExpensesList = (arr) => {
  let newList = [];
  for (let i in arr) {
    if (arr[i].type === "send") {
      newList.push(parseInt(arr[i].amount));
    }
  }
  return newList;
};
// To get Recurring list
const ReccuringList = (arr, str) => {
  let newList = [];
  for (let i in arr) {
    if (arr[i].type === "send" && arr[i].recurring === str) {
      newList.push(parseInt(arr[i].amount));
    }
  }
  return newList;
};

let ExpenseList = ExpensesList(Data.bank.transactions);
const RECLIST = ReccuringList(Data.bank.transactions, "yes");
const NONRECLIST = ReccuringList(Data.bank.transactions, "no");
// const TOTALREC = sum(RECLIST);
// const TOTALNONREC = sum(NONRECLIST);
// console.log(ExpenseList);
// console.log(TOTALREC);
// console.log(RecList);

export default function Bills() {
  return (
    <>
      <div className="text-4xl text-center mb-4">Bills data</div>
      <div>
        <h2 className="text-3xl m-10">
          Total amount Spent on Expenses
          <span className="text-red-500 ml-10">${sum(ExpenseList)}</span>{" "}
        </h2>

        {/* {Data.bank.transactions.map((Array1) => {
          return <h2 key={Array1.id}>{Array1.amount}</h2>;
        })} */}

        {/* circular graph */}
        <PieChart />
        {/* Recurring Costs */}
        <div className="flex justify-evenly mt-14 ">
          <div className="text-2xl">
            Recurring Cost
            {/* <p>The func which you used earlier can be used here</p> */}
          </div>
          {/* One time */}
          <div className="text-2xl">Non Recurring Cost</div>
        </div>
      </div>
    </>
  );
}
