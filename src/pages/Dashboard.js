import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/global/Header";
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
            Dashboard Col 1
          </div>
          <div className="w-full lg:w-[80%] xl:w-[85%] p-4">
            Dashboard Col 2
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
