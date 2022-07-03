import React from "react";
import {
  MailIcon,
  MapIcon,
  MinusCircleIcon,
  PhoneIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

export default function Profile() {
  function handleDevelopmentClicks() {
    // function to handle click for features which are under development
    alert("App under Development! some features are just template based ");
  }
  return (
    <div>
      <div className="text-2xl font-medium flex flex-row items-center justify-between px-2">
        <div className="flex flex-row items-center">
          <UserCircleIcon className="w-8 mr-4" />
          Spiderman
        </div>
        <button
          className="transition-all text-base font-medium  mr-2 p-1 px-2 rounded-lg active:scale-95 bg-emerald-300  dark:bg-emerald-100/40"
          onClick={handleDevelopmentClicks}
        >
          Edit Profile
        </button>
      </div>
      <div className="p-2 mt-4">
        <div className="text-2xl">Linked Bank Accounts</div>
        <div className="flex flex-row flex-wrap  justify-start my-4 ">
          <div className="transition-all w-[45%] sm:w-48 m-2  p-2 ring-2 rounded-xl text-emerald-900 bg-emerald-50/60 dark:bg-emerald-50  ring-emerald-200/60 dark:ring-emerald-200 flex flex-col justify-between  cursor-pointer  md:hover:ring-emerald-300 active:ring-emerald-400">
            Bank:
            <div className="font-medium mb-2">PYX</div>
            Account:
            <div className="font-medium mb-2">23904829041</div>
            Will expire on:
            <div className="font-medium mb-2">2025/12/30</div>
            <button
              className="transition-all text-base font-medium  mr-2 p-1 px-2 rounded-lg active:scale-95 bg-red-400 hover:bg-red-500 text-slate-50 flex flex-row items-center justify-center"
              onClick={handleDevelopmentClicks}
            >
              <MinusCircleIcon className="w-6 mr-2" /> Remove
            </button>
          </div>
          <div className="transition-all w-[45%] sm:w-48 m-2  p-2 ring-2 rounded-xl text-emerald-900 bg-emerald-50/60 dark:bg-emerald-50  ring-emerald-200/60 dark:ring-emerald-200 flex flex-col justify-between  cursor-pointer  md:hover:ring-emerald-300 active:ring-emerald-400">
            Bank:
            <div className="font-medium mb-2">SHR</div>
            Account:
            <div className="font-medium mb-2">1324535624</div>
            Will expire on:
            <div className="font-medium mb-2">2023/6/30</div>
            <button
              className="transition-all text-base font-medium  mr-2 p-1 px-2 rounded-lg active:scale-95 bg-red-400 hover:bg-red-500 text-slate-50 flex flex-row items-center justify-center"
              onClick={handleDevelopmentClicks}
            >
              <MinusCircleIcon className="w-6 mr-2" /> Remove
            </button>
          </div>
          <div
            className="transition-all w-[45%] sm:w-48 m-2  p-2 ring-2 rounded-xl text-emerald-900 bg-emerald-50/60 dark:bg-emerald-50  ring-emerald-200/60 dark:ring-emerald-200 flex flex-col justify-center items-center cursor-pointer  md:hover:ring-emerald-300 active:ring-emerald-400 text-xl"
            onClick={handleDevelopmentClicks}
          >
            <PlusCircleIcon className="w-12" /> Add Account
          </div>
        </div>
        <div className="text-xl lg:text-2xl mt-8">
          Facing Any issues: Contact Support Team
          <div className="text-base lg:text-xl mt-4 flex flex-row items-center flex-wrap">
            {" "}
            <button className="transition-all text-center px-2 py-1 m-1 rounded-md bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200 flex flex-row items-center font-medium mx-2 hover:-translate-y-1">
              {" "}
              <MailIcon className="w-4 lg:w-6" /> Mail
            </button>
            <button className="transition-all text-center px-2 py-1 m-1 rounded-md bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200 flex flex-row items-center font-medium mx-2 hover:-translate-y-1">
              {" "}
              <PhoneIcon className="w-4 lg:w-6" /> Call
            </button>
            <button className="transition-all text-center px-2 py-1 m-1 rounded-md bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200 flex flex-row items-center font-medium mx-2 hover:-translate-y-1">
              {" "}
              <MapIcon className="w-4 lg:w-6" /> Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
