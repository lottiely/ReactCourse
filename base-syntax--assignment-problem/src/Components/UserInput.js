import React from 'react';
import './style.css';

const userInput = (props) => {
    const style = {
        textAlign: 'center'
    };
    const formStyle= {
        border: '2px solid gray'
    };

    return(
        <div style={style}>
            <input style={formStyle} type="text" onInput={props.input} value={props.username} />
        </div>
    )
};

export default userInput;