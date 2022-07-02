import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function TransactionBox({ head, type, children }) {
  const [open, setOpen] = useState(false);
  function toggle() {
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <div className="transition-all my-1 py-1 border-b-2 border-b-slate-100 dark:border-b-slate-700">
      <div
        className="flex flex-row justify-between text-lg cursor-pointer"
        onClick={toggle}
      >
        <div className={type === "send" ? "text-red-500" : "text-emerald-500"}>
          {head}
        </div>
        <button>
          {open ? (
            <ChevronUpIcon className="w-4" />
          ) : (
            <ChevronDownIcon className="w-4" />
          )}
        </button>
      </div>
      {open && <div className="transition-all">{children}</div>}
    </div>
  );
}
