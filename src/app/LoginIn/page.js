"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginInPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mt-[5vw] ml-[5vw] w-[10vw] flex ">
        <button
          className="border-[1px] p-[10px] rounded-[6px] border-gray-200 text-black cursor-pointer w-[100%] hover:bg-red-500 hover:text-white "
          onClick={() => router.push("/")}
        >
          Go Back Home Page
        </button>
      </div>
      <div className="flex justify-center mt-[10vh] w-[100vw]">
        <div className="border-[1px] border-gray-100 rounded-[10px] p-[50px] shadow-2xl space-y-[10px]">
          <h2>Login</h2>
          <form className="space-y-[20px]">
            <div className="flex flex-col space-y-[10px]">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border-[1px] rounded-[5px] p-[8px] m-[3px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-[1px] rounded-[5px] p-[8px] m-[3px]"
              />
            </div>
            <div className="flex justify-center">
              {" "}
              <button
                type="submit"
                className="border-[1px] p-[10px] rounded-[6px] border-gray-200 text-black cursor-pointer w-[100%] hover:bg-red-500 hover:text-white "
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
