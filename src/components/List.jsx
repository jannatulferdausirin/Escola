import React from 'react';



const List = ({href,text,className}) => {
    return (
      <ul>
        <li>
            <a href={href} className={`font-inter text-[16px] font-medium text-[#192335] leading-[80px] ${className}`}>{text}</a>
          
           
        </li>
      </ul>
    );
};

export default List;