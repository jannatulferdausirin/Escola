import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const NavIcon = ({iconName}) => {
    return (
        <button className=" bg-gray-200 hover:bg-[#25C6DA] rounded-xl p-[20px] hover:text-white text-[#25C6DA] duration-300 ease-out text-[20px] font-extrabold">
       {iconName}
      </button>
    );
};

export default NavIcon;