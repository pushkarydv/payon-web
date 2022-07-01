import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/global/Header/Header";

export default function Home() {
  const navigate = useNavigate();
  function demoLogin() {
    localStorage.setItem("payon-web-user", "Demo User");
    navigate("/dashboard");
  }
  return (
    <>
      {" "}
      <Header />
      <div className="p-2 flex flex-col gap-2 place-items-center">
        just for testing phase this will be removed later
        <button
          className="my-2 mx-auto py-1 bg-slate-100 px-2 rounded-lg ring-2 text-xl ring-slate-600 shadow-lg shadow-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:shadow-slate-800 dark:ring-slate-200"
          onClick={demoLogin}
        >
          Initiate a demo login
        </button>
      </div>
    </>
  );
}
