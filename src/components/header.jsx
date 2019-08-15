import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
background: black;
padding: 0.5%;
margin-bottom: 1%;
    h1{
        color:white;
        text-align: center;
    }
`;

const HeaderDiv = () => {
    return(
        <HeaderStyle>
            <h1>
                NASA Photo of the Day!
            </h1>
        </HeaderStyle>
    );
}

export default HeaderDiv;