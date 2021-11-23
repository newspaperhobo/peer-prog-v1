import React from "react";

function Lightbulb( { color, id }) {
    return (
        <>
            <li className="light-string" />
            <li className="light-stem" />
            <li className="circle-container" id={ id } style={{ backgroundColor: color}} />
        </>
    );
}

export default Lightbulb;