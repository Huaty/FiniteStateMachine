"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@components/navbar";
import { poppinsFont, koulenFont } from "@/asset/font";

import { useRouter } from "next/navigation";

const MyPage = () => {
  const router = useRouter();
  return (
    <div className="">
      <Navbar />
      <div className="relative h-screen">
        <Image
          src="/landingImage.jpg"
          alt="student discuss together"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1]"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 container mx-auto flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              Learn Finite State Machine With Us!
            </h1>
            <p className={`text-lg mb-8 ${poppinsFont.className}`}>
              Discover the fascinating world of finite state machines with our
              interactive learning platform.
            </p>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700"
              onClick={() => router.push("/LoginIn")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto text-center">
          &copy; 2023 Nanyang Technological University, Singapore. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default MyPage;
