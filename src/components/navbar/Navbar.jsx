"use client"

import * as React from "react";
import Image from "next/image";
import Link from 'next/link';
import { CiCircleQuestion } from "react-icons/ci";

const Navigationbar = () => {
    const [textColor, setTextColor] = React.useState("text-white");

    const handleScroll =() =>{
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionTextColor = section.getAttribute("data-textcolor");

            if(scrollPosition >= sectionTop-20 && scrollPosition < sectionTop+sectionHeight){
                setTextColor(sectionTextColor);
            }
        });
    };
    React.useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className={`w-full backdrop-blur-lg ${textColor} fixed z-10 text-xs font-semibold p-5 transition-colors duration-200`}>
            <div className="flex flex-row justify-between mx-36">
                <div>
                    <ul className="flex items-center space-x-8">
                        <li>
                            <a href="#showcase">
                            <Image 
                                src="/img/logo/artlablogo.png"
                                alt="artlab logo"
                                height={40}
                                width={80}
                                className=""
                            />
                            </a>
                        </li>
                        <li><a href="#product">Бүтээгдэхүүн</a></li>
                        <li><a href="#about">Бидний тухай</a></li>
                        <li><a href="#price">Үнэ</a></li>
                        <li><a href="#contact">Холбогдох</a></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <ul className="flex space-x-8">
                        <li><CiCircleQuestion size={20}/></li>
                        <li>MN</li>
                        <li><Link href="/form">Гэрээ</Link></li>
                        <li><a href="https://artlab.mn/" target="_blank" className="bg-sky-500 rounded-xl px-4 py-3">Нэвтрэх</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigationbar;