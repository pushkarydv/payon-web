import React from "react";
import Header from "../components/global/Header";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <h1 className="text-3xl font-bold underline text-center text-slate-800 dark:text-slate-100">
        Home
      </h1>
    </>
  );
}
