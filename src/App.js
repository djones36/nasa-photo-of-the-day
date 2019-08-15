import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import HeaderDiv from "./components/header";
import ImgDiv from "./components/img";
import BodyText from "./components/body";
import styled from "styled-components";

const AppStyle = styled.div`
background-color: grey;
`;
const AppDivStyle = styled.div`
background-color: lightgrey;
border:2px solid black;
width: 1024px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`;

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
    <AppStyle className="site-wrapper">
      <HeaderDiv/>
      <AppDivStyle className="App">
        <ImgDiv url={card.url}/>
        <BodyText title={card.title} date={card.date} exp={card.explanation} />
      </AppDivStyle>
    </AppStyle>//site wrapper
  );
}

export default App;
