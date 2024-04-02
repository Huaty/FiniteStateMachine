import react from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { poppinsFont, koulenFont } from "@/asset/font";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-row w-[100vw] h-[65.9vh] mr-[10px] ">
        <div
          className={`w-[50vw] text-[25px] flex items-center justify-center text-center mr-[5vw] ml-[5vw] ${poppinsFont.className}`}
        >
          Welcome to our platform, dedicated to simplifying Finite State
          Machines (FSMs), specifically focusing on the Mealy and Moore models,
          essential for coursework. Our aim is to make these complex concepts
          more accessible and understandable for students at all levels. Dive
          into our resources for a clearer and more comprehensive understanding
          of FSMs.
        </div>
        <div className="w-[50vw] ">
          <div className="relative w-full h-[65.9vh] ">
            <Image src="/computerdiagram.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <div></div>
      <footer className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto text-center">
          &copy; 2023 Nanyang Technological University, Singapore. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
