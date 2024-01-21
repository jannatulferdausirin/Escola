import React from 'react';

const Input = ({className,type,inputPh}) => {
    return (
       <input type={type} placeholder={inputPh} className={` border border-gray-300  w-[293px] ps-4 rounded-xl text-[16px] font-medium leading-[60px] font-inter opacity-[0.72px] ${className}`}/>
    );
};

export default Input;