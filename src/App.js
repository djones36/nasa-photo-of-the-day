import React from "react";
import "./App.css";
import SiteWrapper from "./components/sitewrapper";
import ReloadButton from "./components/button";


function App() {
  return (
    <div className="site-wrapper">
      <div className="App">
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
