import { CashIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import React from "react";
import { Data } from "../../components/config/BasicData";
import TransactionBox from "../../components/dashboardComponents/TransactionBox";

export default function Basics() {
  function handleDevelopmentClicks() {
    // function to handle click for features which are under development
    alert("App under Development! some features are just template based ");
  }
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <div
          className="transition-all w-[45%] sm:w-48 m-2  px-2 py-4 ring-2 rounded-xl text-red-400 bg-red-50 ring-red-200 flex flex-col items-start justify-between gap-4 cursor-pointer  md:hover:ring-red-300 active:ring-red-400"
          onClick={handleDevelopmentClicks}
        >
          <CurrencyDollarIcon className="w-12" />
          <div className="text-2xl">Pay</div>
        </div>
        <div
          className="transition-all w-[45%] sm:w-48 m-2  px-2 py-4 ring-2 rounded-xl text-emerald-900 bg-emerald-50 ring-emerald-200 flex flex-col items-start justify-between gap-4 cursor-pointer  md:hover:ring-emerald-300 active:ring-emerald-400"
          onClick={handleDevelopmentClicks}
        >
          <CashIcon className="w-12" />
          <div className="text-2xl">Request</div>
        </div>
        <div
          className="transition-all w-[45%] sm:w-48 m-2  px-2 py-4 ring-2 rounded-xl text-cyan-900 bg-cyan-100 ring-cyan-200 flex flex-col items-start justify-between gap-4 cursor-pointer  md:hover:ring-cyan-300 active:ring-cyan-400"
          onClick={handleDevelopmentClicks}
        >
          <div className="font-medium text-3xl">Balance</div>
          <div className="text-2xl">{Data.bank.balance}</div>
        </div>
      </div>
      <div className="mt-12 mx-2">
        <div className="text-2xl">Transactions</div>
        {Data.bank.transactions.map(([name, type, amount, message, date]) => (
          <TransactionBox
            head={type === "send" ? `-${amount}` : `+${amount}`}
            type={type}
            key={date + name + message}
          >
            <div>
              <div>
                {type === "send" ? "To  " : "From "} {name}
              </div>
              <div>{message}</div> <div className="text-sm">{date}</div>
            </div>
          </TransactionBox>
        ))}
      </div>
    </div>
  );
}
