import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    // getting if there any mode set by user
    if (localStorage.getItem("payon_dark") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
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
  return (
    <div className="flex flex-row text-4xl font-bold items-center justify-between px-4">
      <button className="flex flex-row items-center">
        <img src="/logo.png" className="h-12 mr-2" alt="" /> Payon
      </button>

      <button onClick={changeTheme} className="transition active:scale-90">
        {/* show svg after checking if page is dark or light  */}
        {dark ? (
          <SunIcon className="h-8 stroke-[1.5]" />
        ) : (
          <MoonIcon className="h-8 stroke-[1.5]" />
        )}
      </button>
    </div>
  );
}
