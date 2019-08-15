import React from "react";


const BodyText = (props) => {
    return(
    <div className="body-text">
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p>{props.exp}</p>
        {console.log(props.nasaDate)}
    </div>
    );
};

export default BodyText;
