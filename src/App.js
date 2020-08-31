import React from "react";
import "./App.css";
import Header from "./Componenets/Header";
import SideBar from "./Componenets/SideBar";
import Feed from "./Componenets/Feed";
import Widgets from "./Componenets/Widgets";
import { UseStateValue } from "./StateProvider";
import Login from "./Componenets/Login";

function App() {
  const [user, dispatch] = UseStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
