import React from "react";


const BodyText = (props) => {
    console.log(props);
    const {title, date, exp} =props  
    return(
    <div className="body-text">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{exp}</p>
        {console.log(props.nasaDate)}
    </div>
    );
};

export default BodyText;
