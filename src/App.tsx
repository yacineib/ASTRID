import { useState } from "react";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import UserProfile from "./components/shared/UserProfile";
import Header from "./components/shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ModifierDelegation from "./pages/ModifierDelegations";
import ListeInterventions from "./pages/ListeInterventions";

const App = () => {
  return (
    <div className="flex h-screen">
      <Header />
      <Navbar />
      <div className="flex-grow p-16">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<UserProfile />} />
            <Route
              path="/user/délégations/modifier"
              element={<ModifierDelegation />}
            />
            <Route path="/interventions" element={<ListeInterventions />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
