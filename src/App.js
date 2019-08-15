import React from "react";
import "./App.css";
import headerDiv from "./components/header";
import imgDiv from "./components/img";
import bodyText from "./components/bodytext";
import ReloadButton from "./components/button";


function App() {
  return (
    <div className="site-wrapper">
      <headerDiv/>
      <div className="App">
        <imgDiv/>
        <bodyText/>
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
        </p>
        <ReloadButton/>
      </div>
    </div>//site wrapper
  );
}

export default App;
