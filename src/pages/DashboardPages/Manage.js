import React from "react";
import BarChat from "../../components/billsComponent/BarChart";
import { Data } from "../../components/config/BillsData";
//functions
function sum(arr) {
  return arr.reduce((x, y) => x + y, 0);
}
// To get list of expenses
const IncomeList = (arr) => {
  let newList = [];
  for (let i in arr) {
    if (arr[i].type === "recieve") {
      newList.push(parseInt(arr[i].amount));
    }
  }
  return newList;
};
// To get Recurring list

let MoneyList = IncomeList(Data.bank.transactions);
console.log(MoneyList);
export default function Manage() {
  return (
    <>
      {/* Manage data */}
      <div className="text-4xl text-center mb-4">Income data</div>
      <div>
        <h2 className="text-3xl m-10">
          Total amount Recieved
          <span className="text-red-500 ml-10">${sum(MoneyList)}</span>{" "}
        </h2>
        <BarChat />
      </div>
    </>
  );
}
