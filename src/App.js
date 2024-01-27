import React from "react";
import Header from "./components/Header";
import TaskBord from "./components/task/TaskBord";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div className=" !bg-[#191D26] text-white">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBord />
      </div>

      <Footer />
    </div>
  );
};

export default App;
