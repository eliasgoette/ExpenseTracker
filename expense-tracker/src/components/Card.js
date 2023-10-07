import React from "react";
import "./Card.css";

// className and children are reserved for react and required for more generic components
function Card({className, children}) {
    const classes = "card " + className;

    return(
        <div className={classes}>
            {children}
        </div>
    );
}

export default Card;