"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiCircleQuestion } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const Navigationbar = () => {
  const [textColor, setTextColor] = React.useState("text-white");

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
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [nav, setNav] = React.useState(false);

  const links1 = [
    {
      id: "1",
      link: "Бүтээгдэхүүн",
      href: "/#product",
    },
    {
      id: "2",
      link: "Бидний тухай",
      href: "/#about",
    },
    {
      id: "3",
      link: "Үнэ",
      href: "/#price",
    },
    {
      id: "4",
      link: "Холбогдох",
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
      link: "Гэрээ",
      href: "/form",
    },
  ];

  return (
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
          <ul className="hidden lg:flex space-x-8">
            <li>
              <Link href="/faq">
                <CiCircleQuestion size={20} />
              </Link>
            </li>
            <li>
              <select name="languages" className="bg-inherit">
                <option value="Mongolia" className="bg-black">
                  MN
                </option>
                <option value="English" className="bg-black">
                  EN
                </option>
              </select>
            </li>
            <li>
              <Link href="/form">Гэрээ</Link>
            </li>
            <li>
              <a
                href="https://artlab.mn/"
                target="_blank"
                className="bg-sky-500 rounded-lg px-4 py-3"
              >
                Нэвтрэх
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
                <select name="languages" className="bg-inherit">
                  <option value="Mongolia" className="bg-black">
                    MN
                  </option>
                  <option value="English" className="bg-black">
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
  );
};

export default Navigationbar;
