import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import HeaderDiv from "./components/header";
// import imgDiv from "./components/img";
import BodyText from "./components/body";
import ReloadButton from "./components/button";



function App() {
  const [nasa, setNasa] = useState([]);
  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=mhdnNKgBrx7O8X5dUViYetbmiNuLhzkxCPFjOg94&date=2012-03-14')
    .then((success) => {
      console.log(success.data);
    })
  }, [])
  return (
    <div className="site-wrapper">
      <HeaderDiv/>
      <div className="App">
        <BodyText />
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun !
        </p>
        <ReloadButton/>
      </div>
    </div>//site wrapper
  );
}

export default App;
