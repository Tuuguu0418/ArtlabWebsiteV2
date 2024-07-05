"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiCircleQuestion } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const testComponent = () => {
  const [nav, setNav] = React.useState(false);

  const links1 = [
    {
      id: "1",
      link: "Бүтээгдэхүүн",
      href: "#product",
    },
    {
      id: "2",
      link: "Бидний тухай",
      href: "#about",
    },
    {
      id: "3",
      link: "Үнэ",
      href: "#price",
    },
    {
      id: "4",
      link: "Холбогдох",
      href: "#contact",
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
    <div>
      <nav
        className={`w-full backdrop-blur-lg text-white fixed z-10 text-xs font-semibold p-5 transition-colors duration-200`}
      >
        <div className="flex flex-row w-full xl:w-4/5 xl:mx-auto justify-between">
          <div className="flex space-x-8">
            <a href="#showcase">
              <Image
                src="/img/logo/artlablogoBlue.png"
                alt="artlab logo"
                height={40}
                width={80}
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
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/faq">
                  <CiCircleQuestion size={20} />
                </Link>
              </li>
              <li>
                <button>
                  MN
                  <FaAngleDown className="inline ml-1" />
                </button>
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
              className="cursor-pointer ml-8 z-10 text-white xl:hidden"
            >
              {nav ? <FaX size={20} /> : <FaBarsStaggered size={20} />}
            </div>

            {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-2xl text-white">
                {links1.map(({ id, link, href }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-4 text-sm font-medium"
                  >
                    <a href={href}>{link}</a>
                  </li>
                ))}
                <li className="px-4 cursor-pointer capitalize py-4 text-sm font-medium">
                  <button>
                    MN
                    <FaAngleDown className="inline ml-1" />
                  </button>
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
    </div>
  );
};

export default testComponent;
