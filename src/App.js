import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./scrollbar.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Basics from "./pages/DashboardPages/Basics";
import Bills from "./pages/DashboardPages/Bills";
import Manage from "./pages/DashboardPages/Manage";
import Profile from "./pages/DashboardPages/Profile";
import Broadcast from "./components/Broadcast";

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-50 custom-font">
      {/* added routes  */}
      <Broadcast />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="basics" element={<Basics />} />
            <Route path="bills" element={<Bills />} />
            <Route path="manage" element={<Manage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* if route does not exist the user will be redirected to "/" with the path = "*" below */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
