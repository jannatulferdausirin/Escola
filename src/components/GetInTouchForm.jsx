import React from "react";
import Heading from "./Heading";
import Flex from "./Flex";
import Input from "./Input";
import Button from "./Button";

const GetInTouchForm = () => {
  return (
    <div>
      <Heading as="h3" text="GET IN TOUCH" className="text-[#2F57EF] text-[18px] font-bold leading-[31px] tracking-wide uppercase"/>
      <Heading as="h2" text="Bringing your vision to life " className="text-[#192335] text-[42px] font-bold leading-[54px] tracking-wide capitalize pb-8"/>
      <div>
        <Flex className={`py-4 gap-4`}>
          <Input type="text" inputPh="Your Name" />
          <Input type="text" inputPh="Your Email" />
        </Flex>
        <Flex className={`pb-4 gap-4`}>
          <Input type="text" inputPh="Your Number" />
          <Input
            type="text"
            inputPh="
        Subject"
          />
        </Flex>
      </div>
      <textarea
        placeholder="Massage "
        className="w-full p-4 text-black border rounded-xl h-[130px] "
      ></textarea>
      <Button
        text="Submit now"
        className={`block w-full bg-blue-600 text-white mt-4`}
      />
    </div>
  );
};

export default GetInTouchForm;
