import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      {contentVisible ? (
        <div className="w-full flex flex-row">
          <div className="w-[25%] p-4 text-lg">
            <button
              onClick={logout}
              className="mx-2 my-2 p-2 bg-sky-400 text-slate-50 rounded-xl ring-4 ring-sky-200"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
