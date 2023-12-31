import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/*widgets*/}
      </div>
    </div>
  );
}

export default App;
