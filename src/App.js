import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Learn from "./components/Learnings";
import Achievers from "./components/Achievers";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Learn/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
