import React from 'react';

const Button = ({className,text}) => {
    return (
        <button className={`w-[175px] border border-[#25C6DA] rounded-xl hover:bg-[#25C6DA] hover:text-white duration-300 ease-in text-[15px] font-medium leading-[60px] capitalize tracking-wide font-inter  ${className}`}>
            {text}
        </button>
    );
};

export default Button;