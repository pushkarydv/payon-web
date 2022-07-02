import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/global/Header/Header";
export default function Dashboard() {
  const navigate = useNavigate();
  const currentRoute = useLocation();
  const [contentVisible, setContentVisible] = useState(false);
  // implemented first checkpoint
  useEffect(() => {
    if (localStorage.getItem("payon-web-user")) {
      setContentVisible(true);
    } else {
      navigate("/", { replace: true });
    }
    // check if current route is dashboard then it will open basics outlet by default
    if (currentRoute.pathname === "/dashboard") {
      navigate("/dashboard/basics", { replace: true });
    }
  }, [navigate, currentRoute.pathname]);

  return (
    <>
      <Header />
      {contentVisible ? (
        <div className="w-full flex flex-col  lg:flex-row flex-wrap">
          <div className="w-full lg:w-[20%] xl:w-[15%] p-4 flex flex-row overflow-x-auto justify-evenly lg:justify-start lg:flex-col text-lg  ">
            {[
              ["Basics", "/dashboard/basics"],
              ["Bills", "/dashboard/bills"],
              ["Manage", "/dashboard/manage"],
              ["Profile", "/dashboard/profile"],
            ].map(([name, route]) => (
              <Link
                key={name}
                className={
                  "transition mr-2 my-1 p-1 rounded-lg active:scale-95 " +
                  (route === currentRoute.pathname &&
                    "bg-emerald-100 ring-2 ring-emerald-300 dark:bg-emerald-100/20")
                }
                to={route}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="w-full lg:w-[80%] xl:w-[85%] p-4">
            {/* outlet is something by which the data flows 
            here when the route will be called /dashboard/... then it will come into outlet rather then going in a new page
            */}
            <Outlet />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
