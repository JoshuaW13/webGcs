import React from 'react';

function ActionButton(props) {
    return (
        <button onClick={props.action}>{props.buttonText}</button>
    )
}

export default ActionButton