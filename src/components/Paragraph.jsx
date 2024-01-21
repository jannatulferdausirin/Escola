import React from 'react';

const Paragraph = ({text,className}) => {
    return (
        <p className={`font-inter ${className}`}>
            {text}
        </p>
    );
};

export default Paragraph;