import React from "react";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  function demoLogin() {
    localStorage.setItem("payon-web-user", "Spiderman");
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col md:flex-row items-center lg:py-12 ">
      <div className="w-full md:w-[60%] p-4 md:p-6 py-12">
        <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Key to all your Payments
        </div>
        <div className="mt-4 text-xl md:text-2xl font-base">
          Payon is a template website to show you a better approach of making
          payments having a simple and interactive interface{" "}
        </div>
        <button
          className="transition mt-8 mb-4 py-2 px-3 bg-slate-100  rounded-xl ring-4 text-xl md:text-2xl lg:text-3xl ring-slate-600 shadow-lg shadow-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:shadow-slate-800 dark:ring-slate-200 hover:translate-x-4"
          onClick={demoLogin}
        >
          Login as demo user
        </button>
      </div>
      <div className="w-full md:w-[40%]  p-4 md:p-6">
        <img src="/man_hero.svg" alt="hero" className="w-full" />
      </div>
    </div>
  );
}
