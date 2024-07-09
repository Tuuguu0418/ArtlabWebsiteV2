"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiCircleQuestion } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LanguageContext } from "@/context/LanguageContext";
import { NextUIProvider } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Navigationbar = () => {
  const { language, setLanguage } = React.useContext(LanguageContext);

  const handleLanguageChange = (key) => {
    setLanguage(key);
  };

  const [textColor, setTextColor] = React.useState("text-white");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionTextColor = section.getAttribute("data-textcolor");

          if (
            scrollPosition >= sectionTop - 20 &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setTextColor(sectionTextColor);
          }
        });
      };

      if (
        window.location.pathname === "/service" ||
        window.location.pathname === "/form"
      ) {
        setTextColor("text-black");
      } else {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, []);

  const [nav, setNav] = React.useState(false);

  const links1 = [
    {
      id: "1",
      link: language === "MN" ? "Бүтээгдэхүүн" : "Product",
      href: "/#product",
    },
    {
      id: "2",
      link: language === "MN" ? "Бидний тухай" : "About us",
      href: "/#about",
    },
    {
      id: "3",
      link: language === "MN" ? "Үнэ" : "Price",
      href: "/#price",
    },
    {
      id: "4",
      link: language === "MN" ? "Холбогдох" : "Contact",
      href: "/#contact",
    },
  ];

  const links2 = [
    {
      id: "5",
      link: <CiCircleQuestion size={20} />,
      href: "/faq",
    },
    {
      id: "6",
      link: language === "MN" ? "Гэрээ" : "Contract",
      href: "/form",
    },
  ];

  return (
    <NextUIProvider>
      <nav
        className={`w-full backdrop-blur-lg ${textColor} fixed z-10 text-xs 2xl:text-base font-semibold p-5 transition-colors duration-200`}
      >
        <div className="flex flex-row w-full xl:w-4/5 xl:mx-auto justify-between">
          <div className="flex space-x-8">
            <a href="/">
              <Image
                src="/img/logo/artlablogoBlue.png"
                alt="artlab logo"
                height={50}
                width={100}
              />
            </a>
            <ul className="hidden xl:flex items-center space-x-8">
              {links1.map(({ id, link, href }) => (
                <li key={id}>
                  <a href={href}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <ul className="hidden lg:flex space-x-8 items-center">
              <li>
                <Link href="/faq">
                  <CiCircleQuestion size={20} />
                </Link>
              </li>
              <li>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      className={`text-xs 2xl:text-base font-semibold ${textColor}`}
                    >
                      {language === "MN" ? "MN" : "EN"}
                      <IoIosArrowDown />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    name="languages"
                    onAction={handleLanguageChange}
                  >
                    <DropdownItem key="MN" value="MN" className="text-black">
                      Mongolian
                    </DropdownItem>
                    <DropdownItem key="EN" value="EN" className="text-black">
                      English
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                {/* <select
                  name="languages"
                  className="bg-inherit"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="MN" className="bg-black text-white">
                    MN
                  </option>
                  <option value="EN" className="bg-black text-white">
                    EN
                  </option>
                </select> */}
              </li>
              <li>
                <Link href="/form">
                  {language === "MN" ? "Гэрээ" : "Contract"}
                </Link>
              </li>
              <li>
                <a
                  href="https://artlab.mn/"
                  target="_blank"
                  className="bg-sky-500 rounded-lg px-4 py-3"
                >
                  {language === "MN" ? "Нэвтрэх" : "Login"}
                </a>
              </li>
            </ul>
            <div
              onClick={() => setNav(!nav)}
              className={`cursor-pointer ml-8 z-10 ${textColor} xl:hidden`}
            >
              {nav ? (
                <FaX size={20} className="text-white" />
              ) : (
                <FaBarsStaggered size={20} />
              )}
            </div>

            {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black backdrop-blur-2xl text-white">
                {links1.map(({ id, link, href }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-4 text-sm font-medium"
                  >
                    <a href={href}>{link}</a>
                  </li>
                ))}
                <li className="px-4 cursor-pointer capitalize py-4 text-sm font-medium">
                  <select
                    name="languages"
                    className="bg-inherit"
                    value={language}
                    onChange={handleLanguageChange}
                  >
                    <option value="MN" className="bg-black">
                      MN
                    </option>
                    <option value="EN" className="bg-black">
                      EN
                    </option>
                  </select>
                </li>
                {links2.map(({ id, link, href }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-4 text-sm font-medium"
                  >
                    <Link href={href}>{link}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </NextUIProvider>
  );
};

export default Navigationbar;
