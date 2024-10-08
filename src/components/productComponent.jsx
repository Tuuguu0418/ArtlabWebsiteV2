"use client";

import * as React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowUpRight } from "react-icons/bs";

const ProductComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
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
                fill
                style={{ objectFit: "cover" }}
                className="border border-white rounded-3xl"
              />
              <div className="absolute bottom-2 left-2 bg-white text-black p-2 rounded-3xl text-left w-[90%]">
                <div className="flex items-center gap-2">
                  <button className="rounded-md bg-sky-500 text-white text-sm 2xl:text-xl p-1 my-auto">
                    <BsArrowUpRight />
                  </button>
                  <h3 className="text-xs 2xl:text-base font-semibold">
                    {slide.title}
                  </h3>
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
