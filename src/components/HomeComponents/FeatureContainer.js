import React from "react";

export default function FeatureContainer({ children }) {
  return (
    <div className="transition-all w-[45%] sm:w-48 m-2  px-2 py-4 ring-2 rounded-xl text-emerald-900 bg-emerald-50/60 dark:bg-emerald-50  ring-emerald-200/60 dark:ring-emerald-200 flex flex-col items-center justify-between gap-4 cursor-pointer  md:hover:ring-emerald-300 active:ring-emerald-400">
      {children}
    </div>
  );
}
