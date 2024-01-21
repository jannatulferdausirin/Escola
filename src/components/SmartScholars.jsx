import React from 'react';
import Flex from './Flex';
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';

const SmartScholars = ({smartImg,smartHeading,smartPara }) => {
    return (
        <Flex className={`gap-4 `}>
             <div>
                <Image src={smartImg } className={` bg-blue-700 p-[8px] rounded-full`}/>
                </div>
              <div>
                <Heading as="h3" text={smartHeading} className="text-[21px] font-bold capitalize leading-[31px] tracking-wide"/>
                <Paragraph text={smartPara} className="font-normal text-[17px] leading-[26px] pb-8" />
              </div>
            </Flex>
    );
};

export default SmartScholars;
