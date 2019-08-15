import React from "react";
import styled from "styled-components";

const BodySytle = styled.div` 
width: 90%;
// border:2px solid blue;
    h2{
        padding: 2.5%;
        border-bottom:2px solid black;
    }
`;

const BodyText = (props) => {
    console.log(props);
    const {title, date, exp} =props  
    return(
    <BodySytle className="body-text">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{exp}</p>
        {console.log(props.nasaDate)}
    </BodySytle>
    );
};

export default BodyText;
