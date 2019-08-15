import React from "react";
import styled from "styled-components";

const ImgStyle = styled.div`
padding: 5%;
    img{
        width: 80%;
        height:auto:    }
`;

const ImgDiv = (props) => {
    return(
        <ImgStyle className="img-div">
            <img src={props.url} alt="planet"/>
        </ImgStyle>
    );
};

export default ImgDiv;