import React from 'react';
import Flex from '../Flex';
import Heading from "../Heading";
import Section from "../Section"; 
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Container from '../Container';
const NavbarTop = () => {
    return (
        <Section className={`bg-[#F3F6FB]`}>
       <Container>
       <Flex className={`justify-between  py-4`}>
            <Flex className={`items-center gap-2`}>
            <FaLocationDot />
               <Heading as="h3" text="6391 Elgin St. Celina, 10299" className="text-[17px] font-normal leading-[26px]" />
            </Flex>
           <Flex className={`gap-4`}>
           <Flex className={`items-center gap-2`}>
            <BsTelephoneFill />
                <Heading as="h3" text="(629) 555-0129" className="text-[17px] font-normal leading-[26px]"/>
            </Flex>
            <Flex className={`items-center gap-2`}>
            <FaEnvelope />
            <Heading as="h3" text="info@example.com" className="text-[17px] font-normal leading-[26px]"/>  
            </Flex>
           </Flex>
        </Flex>
       </Container>
       </Section>
    );
};

export default NavbarTop;