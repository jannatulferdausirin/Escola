import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Logo (1).png";
import Input from "../Input";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Menu from "../Menu";
import NavIcon from "../NavIcon";
import Section from "../Section";




const Navbar = () => {
  return (
    <Section className={` bg-white shadow-2xl`}>
      <Container>
      <Flex className={`items-center py-2 `}>
        <div className="w-[15%]">
          <Image src={logo} alt="logo" />
        </div>
        <Flex className={`gap-8 w-[60%]`}>
          <Menu text="Home" />
          <Menu text="About Us" />
          <Menu text="Services" />
          <Menu text="Projects" />
          <Menu text="Blog" />
          <Menu text="Page" />
          <Menu text="Contact" />
        </Flex>
        <Flex className={`items-center justify-around w-[25%]`}>
          <Input type="text" inputPh="Search" />
          <NavIcon iconName={ <IoIosSearch/> }/> 
          <NavIcon iconName={<IoCartOutline /> }/> 
        </Flex>
      
      </Flex>
    </Container>
    </Section>
    
  );
};

export default Navbar;
