import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/global/Header/Header";
export default function Dashboard() {
  const navigate = useNavigate();
  const [contentVisible, setContentVisible] = useState(false);
  // implemented first checkpoint
  useEffect(() => {
    if (localStorage.getItem("payon-web-user")) {
      setContentVisible(true);
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);
  // function to clear user from local storage and hence it log outs in our demo app
  function logout() {
    localStorage.removeItem("payon-web-user");
    navigate("/");
  }
  return (
    <>
      <Header />
      {contentVisible ? (
        <div className="w-full flex flex-col  lg:flex-row flex-wrap">
          <div className="w-full lg:w-[20%] xl:w-[15%] p-4 ">
            Dashboard Col 1 containing routes
          </div>
          <div className="w-full lg:w-[80%] xl:w-[85%] p-4">
            Dashboard Col 2 outlet for routes for more ref :{"  "}
            https://reactrouter.com/docs/en/v6/components/outlet
            <br />
            <button
              className="my-2 mx-auto py-1 bg-slate-100 px-2 rounded-lg ring-2 ring-slate-600 shadow-lg shadow-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:shadow-slate-800 dark:ring-slate-200"
              onClick={logout}
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
