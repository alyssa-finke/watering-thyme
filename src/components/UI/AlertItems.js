import './Card.css'
import React from 'react';


function AlertItems(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default AlertItems; 