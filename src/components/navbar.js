"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { koulenFont } from "@/asset/font";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const navigation = [
    {
      title: "Contact Us",
      nav: "https://www.ntu.edu.sg/about-us/contact-us",
    },
    {
      title: "About Us",
      nav: "/aboutus",
    },
    {
      title: "Login",
      nav: "LoginIn",
    },
  ];
  return (
    <div className="flex flex-col space-y-5 items-center pl-[10vw] pr-[10vw] pt-[3vh] pb-[2vh] ">
      <div className="w-[17vw]">
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={300}
            height={300}
            layout="responsive"
          />
        </Link>
      </div>
      <div>
        <ol className="flex flex-row  space-x-[10vw]">
          {navigation.map((item, index) => (
            <li key={index} className="">
              <button
                onClick={() => router.push(item.nav)}
                className={`${koulenFont.className} text-[30px]  px-6 py-2 rounded-full hover:bg-red-600 transition duration-300`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Navbar;
