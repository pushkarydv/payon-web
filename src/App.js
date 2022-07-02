import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-50 custom-font">
      {/* added routes  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* if route does not exist the user will be redirected to "/" with the path = "*" below */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
