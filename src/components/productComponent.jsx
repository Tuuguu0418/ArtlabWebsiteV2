"use client";

import * as React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowUpRight } from "react-icons/bs";

const ProductComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Санхүү, цалин",
      desc: "Ахисан түвшний нягтлан бодох бүртгэл. Цалингийн задаргаа мэйл рүү илгээх.",
      imgUrl: "/img/others/artlab1.png",
    },
    {
      title: "Үйлдвэрлэл",
      desc: "Үйлдвэрлэгдэж буй өртөг, дамжлага, зардлуудыг бодитоор хянах",
      imgUrl: "/img/others/artlab2.png",
    },
    {
      title: "Захиалгын систем",
      desc: "Захиалга авснаас хүлээлгэн өгөх хүртэлх бүх процессийг хянах.",
      imgUrl: "/img/others/something.png",
    },
    {
      title: "Кассын Пос",
      desc: "Санхүүрүү борлуулалтаа шууд хөрвүүлэх. Олон төлбөрийн хэрэгсэл.",
      imgUrl: "/img/others/artlab4.png",
    },
    {
      title: "Даатгал",
      desc: "Гэрээ байгуулах, Нөхөн төлбөрийн тооцоолол, Бүртгэл, Хяналт",
      imgUrl: "/img/others/artlab2.png",
    },
  ];
  return (
    <div className="mx-auto my-8 w-[80vw] xl:w-[60vw] 2xl:w-[80vw]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-4">
            <div className="relative h-80 xl:h-72 2xl:h-96">
              <Image
                src={slide.imgUrl}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="border border-white rounded-3xl"
              />
              <div className="absolute bottom-2 left-2 bg-white text-black p-3 rounded-3xl text-left w-[90%]">
                <h3 className="text-xs 2xl:text-base font-semibold">
                  {slide.title}
                </h3>
                <div className="flex flex-row">
                  <button className="rounded-xl bg-sky-500 text-white text-sm 2xl:text-xl p-3 my-auto">
                    <BsArrowUpRight />
                  </button>
                  <p className="mt-2 ml-2 text-[10px] 2xl:text-sm">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductComponent;
