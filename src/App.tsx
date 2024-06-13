import { useState } from "react";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import UserProfile from "./components/shared/UserProfile";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="flex min-h-[100vh]  w-[97%] m-auto gap-5">
        <Navbar/>
      <div className="flex flex-col w-[80%] gap-16">
        <Header />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
