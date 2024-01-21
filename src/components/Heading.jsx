import React from 'react';

const Heading = (props) => {
    return (
        <props.as className={`font-inter ${props.className}`}>
            {props.text}
        </props.as>
    );
};

export default Heading;