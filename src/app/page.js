"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const MyPage = () => {
  const router = useRouter();
  return (
    <div className="relative h-[100vh]">
      <div className=" relative z-10 flex flex-row justify-between pl-[10vw] pr-[10vw] pt-[20px]">
        <Image src="/logo.png" width={100} height={100} />
        <div className="flex justify-center items-center">
          <ol className="flex flex-row space-x-[10px]">
            <li>
              <button onClick={() => router.push("/Afterlogin")}>
                MealyStateMachine
              </button>
            </li>
            <li>
              <button onClick={() => router.push("/LoginIn")}>Login</button>
            </li>
          </ol>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-70 z-[-1]">
        <Image
          src="/landingImage.jpg"
          alt="student discuss together"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1] "
        />
      </div>
    </div>
  );
};

export default MyPage;
