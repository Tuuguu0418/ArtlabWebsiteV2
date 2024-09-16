import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsComponent = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const slides = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Харилцааны тусламж, үнэлгээ болон санхүүгийн зөвлөх үйлчилгээ",
      image: "/img/others/artlab1.png",
    },
    {
      id: 2,
      title: "Slide 2",
      description:
        "Харилцааны тусламж, үнэлгээ болон санхүүгийн зөвлөх үйлчилгээ",
      image: "/img/others/something.png",
    },
    {
      id: 3,
      title: "Slide 3",
      description:
        "Харилцааны тусламж, үнэлгээ болон санхүүгийн зөвлөх үйлчилгээ",
      image: "/img/others/artlab4.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = slides[currentIndex];
  const nextSlideIndex = (currentIndex + 1) % slides.length;
  const nextSlideItem = slides[nextSlideIndex];

  return (
    <div className="w-full my-12">
      <div className="flex flex-col gap-10 items-center text-black">
        <div className="w-10/12 xl:w-4/6 flex justify-between">
          <div>
            <h1 className="text-2xl 2xl:text-4xl font-semibold mb-2">
              Мэдээ мэдээлэл
            </h1>
            <p>Бидний тухай илүү ихийг мэдээрэй</p>
          </div>
          <div className="hidden sm:flex gap-2 py-1">
            <button
              onClick={prevSlide}
              className="border-2 h-fit border-black/50 hover:border-transparent hover:text-white text-black/50 hover:bg-black duration-300 p-3 rounded-xl"
            >
              <FaArrowLeftLong className="text-medium 2xl:text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className="border-2 h-fit border-black/50 hover:border-transparent hover:text-white text-black/50 hover:bg-black duration-300 p-3 rounded-xl"
            >
              <FaArrowRightLong className="text-medium 2xl:text-2xl" />
            </button>
          </div>
        </div>
        <div className="w-10/12 xl:w-4/6 flex justify-between">
          <div className="relative group sm:w-1/2 overflow-hidden">
            <div className="transition-opacity duration-700 ease-in-out opacity-100 text-white">
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                width={450}
                height={250}
                className="rounded-xl w-full h-full"
              />
              <div className="w-4/5 rounded-xl group-hover:w-full px-14 p-4 absolute left-10 -bottom-28 sm:-bottom-20 2xl:-bottom-24 group-hover:left-0 group-hover:bottom-0 bg-gradient-to-t from-black/70 duration-300">
                <h1 className="mb-2 font-semibold 2xl:text-xl">
                  {currentSlide.title}
                </h1>
                <p className="text-xs 2xl:text-base">
                  {currentSlide.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 hidden sm:flex items-center justify-end opacity-50">
            <div className="w-11/12 h-4/5 relative group overflow-hidden">
              <Image
                src={nextSlideItem.image}
                alt={nextSlideItem.title}
                width={350}
                height={200}
                className="rounded-xl w-full h-full"
              />
            </div>
          </div>
        </div>
        <Link
          href="/news"
          className="border border-black/50 font-semibold px-4 py-2 2xl:px-6 rounded-3xl text-xs 2xl:text-base hover:border-transparent hover:text-white hover:bg-black duration-300"
        >
          Бүгдийг үзэх
        </Link>
      </div>
    </div>
  );
};

export default NewsComponent;
