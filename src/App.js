import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import HeaderDiv from "./components/header";
import ImgDiv from "./components/img";
import BodyText from "./components/body";




function App() {
  const [card, setCard] = useState();
  
  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=mhdnNKgBrx7O8X5dUViYetbmiNuLhzkxCPFjOg94')
    .then((response) => {
      // const {data} = response
      console.log(response.data);
      const nasaData =  response.data;
      setCard(nasaData)
    })
  }, [])

  if(!card)return <h3>loading...</h3>;

  return (
    <div className="site-wrapper">
      <HeaderDiv/>
      <div className="App">
        <ImgDiv url={card.url}/>
        <BodyText title={card.title} date={card.date} exp={card.explanation} />
      </div>
    </div>//site wrapper
  );
}

export default App;
