import React from 'react';
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';


const Card = ({cardSrc,headingText}) => {
    return (
        <div className='text-center bg-white rounded-xl shadow-2xl hover:mt-[30px] duration-300 ease-in-out h-[298px]'>
            <Image src={cardSrc} className={`pt-[55px] px-[125px] inline-block`}/>
            <Heading as="h3" text={headingText} className={`py-4 text-[21px] font-bold leading-[31px] capitalize tracking-wide`} />
            <Paragraph text="Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam" className={`text-[17px] font-normal leading-[26px] capitalize tracking-wide w-[240px] inline-block pb-8`}/>
           
        </div>
    );
};

export default Card;