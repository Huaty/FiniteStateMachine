import React from "react";
import logo from "@public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

const AfterLoginNavBar = () => {
  const router = useRouter();

  const links = [
    { name: "Home", href: "/statemachine" },
    { name: "State Machine", href: "/statemachine" },
    { name: "About Us", href: "/aboutus" },
  ];

  const handleLogoClick = () => {
    // Perform any additional actions when the logo is clicked
    console.log("Logo clicked");
    // You can navigate to a specific page or perform any other desired actions
    router.push("/Afterlogin");
  };
  const handleLogout = () => {
    // Remove the session token cookie
    Cookies.remove("sessionToken");

    // Redirect to the login page or update the UI as needed
    router.push("/LoginIn");
  };

  return (
    <div className="relative flex flex- justify-between items-center pl-[10rem] pr-[7rem] z-[1]">
      <div className="w-[15vw] mt-[5vh]" onClick={handleLogoClick}>
        <Image
          src={logo}
          alt="NTU Logo"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      {/* <div>
        <ol className="flex flex-row space-x-2">
          {links.map((variable, index) => (
            <li key={index}>
              <a href={variable.href}>{variable.name}</a>
            </li>
          ))}
        </ol>
      </div> */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default AfterLoginNavBar;
