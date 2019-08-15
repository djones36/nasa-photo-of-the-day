import React from "react";
const ImgDiv = (props) => {
    return(
        <div className="img-div">
            <img src={props.url} alt="planet"/>
        </div>
    );
};

export default ImgDiv;