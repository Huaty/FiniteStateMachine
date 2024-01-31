import react from "react";
import logo from "@public/logo.png";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/statemachine",
    },
    {
      name: "State Machine",
      href: "/statemachine",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
  ];
  return (
    <div className="flex flex- justify-between items-center pl-[10rem] pr-[7rem]">
      <div className="w-[5vw]">
        <Image
          src={logo}
          alt="NTU Logo"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <div>
        <ol className="flex flex-row space-x-2 ">
          {links.map((variable, index) => (
            <li>
              <a href={variable.href} key={index}>
                {variable.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default navbar;
