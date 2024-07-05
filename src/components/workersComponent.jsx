"use client";
import * as React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkersComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      name: "Б. Ганбат",
      role: "Гүйцэтгэх захирал",
      imageUrl: "/img/workers/thor.jpg",
    },
    {
      name: "З. Идэр",
      role: "Програм хангамжийн инженер",
      imageUrl: "/img/workers/ironmansuit.jpg",
    },
    {
      name: "Г. Одхүү",
      role: "Ерөнхий инженер",
      imageUrl: "/img/workers/vision.jpg",
    },
    {
      name: "Э. Энхжин",
      role: "Борлуулалтын менежер",
      imageUrl: "/img/workers/wonderwoman.jpg",
    },
    {
      name: "Б. Гандөрөө",
      role: "Програм хангамжийн инженер",
      imageUrl: "/img/workers/mkdspiderman.jpg",
    },
    {
      name: "Э. Цацрал",
      role: "Борлуулалтын менежер",
      imageUrl: "/img/workers/femalehero.jpg",
    },
    {
      name: "Б. Оюунчимэг",
      role: "Борлуулалтын менежер",
      imageUrl: "/img/workers/bentenhero.jpg",
    },
    {
      name: "О. Болортунгалаг",
      role: "Програм хангамжийн инженер",
      imageUrl: "/img/workers/somefemale.jpg",
    },
    {
      name: "Ч. Буянхишиг",
      role: "Програм хангамжийн инженер",
      imageUrl: "/img/workers/ironman.jpg",
    },
    {
      name: "Б. Анхбилэг",
      role: "Програм хангамжийн инженер",
      imageUrl: "/img/workers/vegeta.jpg",
    },
    {
      name: "Ж. Бадамхорол",
      role: "Борлуулалтын менежер",
      imageUrl: "/img/workers/the100.jpg",
    },
  ];

  return (
    <div className="mx-auto w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-4">
            <div className="relative h-72 2xl:h-96">
              <Image
                src={slide.imageUrl}
                alt={slide.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-40 text-white p-3 rounded-xl w-[90%]">
                <h3 className="text-sm font-semibold">{slide.name}</h3>
                <p className="mt-2 text-xs ">{slide.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkersComponent;
