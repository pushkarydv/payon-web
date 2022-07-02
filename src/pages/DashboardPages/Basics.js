import { CashIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import React from "react";
import { Data } from "../../components/config/BasicData";

export default function Basics() {
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <div className="transition-all  w-48 m-2  px-2 py-4 ring-2 rounded-xl text-red-400 bg-red-50 ring-red-200 flex flex-col items-start justify-between gap-4 cursor-pointer hover:ring-red-400">
          <CurrencyDollarIcon className="w-12" />
          <div className="text-2xl">Pay</div>
        </div>
        <div className="transition-all  w-48 m-2  px-2 py-4 ring-2 rounded-xl text-emerald-900 bg-emerald-50 ring-emerald-200 flex flex-col items-start justify-between gap-4 cursor-pointer hover:ring-emerald-400">
          <CashIcon className="w-12" />
          <div className="text-2xl">Request</div>
        </div>
        <div className="transition-all  w-48 m-2  px-2 py-4 ring-2 rounded-xl text-cyan-900 bg-cyan-100 ring-cyan-200 flex flex-col items-start justify-between gap-4 cursor-pointer hover:ring-cyan-400">
          <div className="font-medium text-3xl">Balance</div>
          <div className="text-2xl">{Data.bank.balance}</div>
        </div>
      </div>
    </div>
  );
}
