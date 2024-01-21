import React from "react";
import Section from "./Section";
import Flex from "./Flex";
import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import imageDaily from "../assets/Rectangle 1407.png";
import imageDailyOne from "../assets/Frame (5).png";
import imageDailyTwo from "../assets/Frame (4).png";
import imageDailyThree from "../assets/Frame (6).png";
import imageDailyFour from "../assets/.png";
import Courses from "./Courses";
import SmartScholars from "./SmartScholars";

const DailyActivityCard = () => {
  return (
    <Section className={`my-16`}>
      <div className="w-[1290px] mx-auto">
        <Flex className={`gap-16`}>
          <div className="relative">
            <Image src={imageDaily} alt="imgDaily" className={`mb-8 `} />
            <div className="bg-white rounded w-[300px] shadow absolute top-5 left-5">
              <Flex className={`items-center justify-center gap-4`}>
                <div className="bg-blue-100 rounded-full">
                  <Image
                    src={imageDailyThree}
                    alt="imgDaily"
                    className={`p-[20px] `}
                  />
                </div>
                <div>
                  <Heading
                    as="h3"
                    text="Daily Activity"
                    className=" text-[21px] font-bold leading-[30px] pt-[25px] "
                  />
                  <Paragraph
                    text="lorem is ipsum"
                    className={` text-[17px] font-medium leading-[31px] capitalize tracking-wide pb-[20px]`}
                  />
                </div>
              </Flex>
            </div>
            <Flex className={`gap-4`}>
              <Courses
                DailyImage={imageDailyOne}
                DailyHeading="200+"
                DailyPara="Courses"
              />
              <Courses
                DailyImage={imageDailyTwo}
                DailyHeading="200+"
                DailyPara="Courses"
              />
            </Flex>
          </div>

          <div>
            <Heading
              as="h3"
              text="Top Popular Course"
              className="text-blue-600 text-[18px] font-bold leading-[31px] tracking-wide capitalize pt-4 pb-4"
            />
            <Heading
              as="h2"
              text="Knowledge is power  education is the key"
              className=" text-[42px] font-bold leading-[54px] tracking-wide text-[#192335]"
            />
            <Paragraph
              text="Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training"
              className={`text-[17px] font-normal leading-[26px] pt-8 pb-12 w-[400px]`}
            />
            <SmartScholars
              smartImg={imageDailyFour}
              smartHeading="Smart Scholars"
              smartPara="The goal of ecology is to understand how organisms interact with each other "
            />{" "}
            <SmartScholars
              smartImg={imageDailyFour}
              smartHeading="Smart Scholars"
              smartPara="The goal of ecology is to understand how organisms interact with each other "
            />
          </div>
        </Flex>
      </div>
    </Section>
  );
};

export default DailyActivityCard;
