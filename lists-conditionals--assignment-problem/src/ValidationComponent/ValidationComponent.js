import React from 'react';

const validationComponent = (props) => {

    let validation = null;

    validation = props.len >= 5 ? "Text long enough" : "Text too short";

    return(
        <div>
            {validation}
        </div>
    )
};

export default validationComponent;