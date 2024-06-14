import { useState } from "react";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import UserProfile from "./components/shared/UserProfile";
import Header from "./components/shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ModifierDelegation from "./pages/ModifierDelegations";

function App() {
  return (
    <div className="flex min-h-[100vh] w-[99%] m-auto gap-5">
      <Navbar />
      <div className="flex flex-col w-[80%] gap-20">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/user" element={<UserProfile />} />
            <Route
              path="/user/délégations/modifier"
              element={<ModifierDelegation />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
