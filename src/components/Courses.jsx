import React from 'react';
import Image from './Image';
import Flex from './Flex';
import Heading from './Heading';
import Paragraph from './Paragraph';

const Courses = ({DailyImage,DailyHeading,DailyPara}) => {
    return (
        <div className='bg-[#F3F6FB] w-[369px] rounded shadow'>

        <Flex className={`items-center justify-center gap-4`}>
        <div className='bg-green-400 rounded-full'>
        <Image src={DailyImage}  alt="imgDaily" className={`p-[25px] `}/>
        </div>
            <div>
                <Heading as="h3" text={DailyHeading} className=" text-[42px] font-bold leading-[54px] pt-[37px] text-[#6864ED]"/>
                <Paragraph text={DailyPara} className={` text-[21px] font-medium leading-[31px] capitalize tracking-wide pb-[37px]`}/>
            </div>
        </Flex>
        </div>
    );
};

export default Courses;