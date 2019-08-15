import React from "react";
import "./App.css";
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
