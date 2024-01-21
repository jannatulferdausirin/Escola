import React from "react";
import Flex from "./Flex";
import Heading from "./Heading";
import Button from "./Button";
import Container from "./Container";
import HeadingText from "./HeadingText";
import Image from "./Image";
import ImageOne from "../assets/young-students-studying-library-background copy 1.png";
import Imagetwo from "../assets/Isolation_Mode.png";
import Imagethree from "../assets/Isolation_Mode (2).png";
import ImageFour from "../assets/Isolation_Mode (1).png";
import ImageFive from "../assets/Frame (7).png";
import ImageSix from "../assets/Ellipse 1688 (1).png";


const Banner = () => {
  return (
    <div className={`bg-bannerImg bg-no-repeat bg-center bg-cover `}>
      <Container className={`w-[1290px] `}>
        <Flex className={`justify-between`}>
          <HeadingText
            text="Expand Your Horizons through #Education#"
            className={`text-[75px] font-bold leading-[91px] pt-[70px]`}
          />
          <div className="">
            <Heading
              as="h4"
              text="Education for a Better Tomorrow."
              className="text-[21px] font-normal leading-[31px] pb-4 pt-[118px] w-[330px]"
            />
            <Button text="Contact Us" />
          </div>
        </Flex>

        <Flex className={`gap-6 `}>
          <div className="bg-[#F3F6FB] h-[370px] w-[300px] mt-[134px] rounded-xl">
            <Image src={Imagethree} className="pb-8 mx-auto mt-6"/>
            <Image src={ImageFour} className={`mx-auto `}/>
          </div>
         <div className="relative ">
         <Image src={ImageOne} className={`h-420px w-[630px] pt-[90px] ` }/>
         <Image src={ImageFive} className={`absolute top-28 right-[108px] z-20`}/>
         <Image src={ImageSix } className={`absolute top-24 right-20 z-10`}/>
         </div>
          <Image src={Imagetwo} className={`w-[281px] h-[370px] bg-white rounded shadow-lg mt-[130px]`}/>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
