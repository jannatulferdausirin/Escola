import React from 'react';
import Flex from './Flex';
import List from './List';
import { IoIosArrowDown } from 'react-icons/io';

const Menu = ({text}) => {
    return (
        <Flex className={`items-center  gap-1 `}>
        <List text={text} />
        <IoIosArrowDown className="mt-1"/>
        </Flex>
    );
};

export default Menu;