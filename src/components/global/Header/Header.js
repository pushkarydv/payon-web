import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon, LogoutIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const [logout, setLogout] = useState(false); // this state is used to show or hide logout button
  useEffect(() => {
    // getting if there any mode set by user
    if (localStorage.getItem("payon_dark") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }

    if (localStorage.getItem("payon-web-user")) {
      setLogout(true);
    }
  }, []);
  function changeTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      setDark(false);
      localStorage.setItem("payon_dark", "light");
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
      localStorage.setItem("payon_dark", "dark");
    }
  }
  // function to clear user from local storage and hence it log outs in our demo app
  function logoutUser() {
    localStorage.removeItem("payon-web-user");
    navigate("/");
  }

  return (
    <div className="flex flex-row text-4xl font-bold items-center justify-between px-4">
      <Link to={"/"} className="no-underline flex flex-row items-center">
        <img src="/logo.png" className="h-12 mr-2" alt="" /> Payon{" "}
      </Link>{" "}
      <div className="flex flex-row items-center">
        {/* show logout on the basis of state  */}
        {logout && (
          <button
            className="my-2 mx-auto bg-slate-100 p-2 rounded-full ring-2 ring-slate-600   dark:bg-slate-800 dark:text-slate-100  dark:ring-slate-200 mr-4"
            onClick={logoutUser}
          >
            <LogoutIcon className="w-4" />
          </button>
        )}

        <button onClick={changeTheme} className="transition active:scale-90">
          {/* show svg after checking if page is dark or light  */}
          {dark ? (
            <SunIcon className="h-8 stroke-[1.5]" />
          ) : (
            <MoonIcon className="h-8 stroke-[1.5]" />
          )}
        </button>
      </div>
    </div>
  );
}
