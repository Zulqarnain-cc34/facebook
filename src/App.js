import React from "react";

import "./App.css";
import Header from "./Componenets/Header";
import SideBar from "./Componenets/SideBar";
import Feed from "./Componenets/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
