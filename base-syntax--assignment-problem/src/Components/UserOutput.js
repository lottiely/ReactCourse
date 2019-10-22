import React from 'react';
import './style.css';

const userOutput = (props) =>{
    return(
        <div className="useroutput">
            <p className="username">Username: {props.username}</p>
            <p>{props.quote}</p>
        </div>
    )
};

export default userOutput;