import React from 'react';
import Card from '../Card';
import Flex from '../Flex';
import cardImg from '../../assets/045-vector.png';
import cardImgOne from '../../assets/013-compass.png';
import cardImgTwo from '../../assets/036-idea.png';
import cardImgThree from '../../assets/035-magic wand.png';

const Cards = () => {
    return (
       <div className="w-[1290px] mx-auto pt-[180px] mb-[200px]">
         <Flex className={`justify-between`}>
            <Card cardSrc={cardImg } headingText="Future Focus"  />
            <Card cardSrc={cardImgOne} headingText="Smart Scholars"  />
            <Card cardSrc={ cardImgTwo} headingText="Knowledge Hub"  />
            <Card cardSrc={ cardImgThree} headingText="Knowledge Hub" />
           
        </Flex>
       </div>
    );
};

export default Cards;