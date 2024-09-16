import React, { useState, useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/context/LanguageContext";

const WhosUsing = () => {
  const { language } = useContext(LanguageContext);
  const [isHovered, setIsHovered] = useState(true);
  const contents = [
    {
      title:
        language === "MN"
          ? "Хүнсний үйлдвэрлэл худалдаа"
          : "Food production and trade",
      imgPath: "/img/whosUsing/Food.png",
      company1: "/img/companies/ubcab.png",
      company2: "/img/companies/ubcab.png",
      company3: "/img/companies/ubcab.png",
    },
    {
      title: language === "MN" ? "Гаалийн чөлөөт бүс" : "Customs free zone",
      imgPath: "/img/whosUsing/cholootBus.png",
      company1: "/img/companies/ubcab.png",
      company2: "/img/companies/ubcab.png",
      company3: "/img/companies/ubcab.png",
    },
    {
      title: language === "MN" ? "Жижиглэнгийн худалдаа" : "Retail trade",
      imgPath: "/img/whosUsing/SmallBusiness.png",
      company1: "/img/companies/ubcab.png",
      company2: "/img/companies/ubcab.png",
      company3: "/img/companies/ubcab.png",
    },
    {
      title:
        language === "MN"
          ? "Сургууль, боловсролын байгууллага"
          : "Schools and educational institutions",
      imgPath: "/img/whosUsing/schoolEducation.png",
      company1: "/img/companies/ubcab.png",
      company2: "/img/companies/ubcab.png",
      company3: "/img/companies/ubcab.png",
    },
    {
      title:
        language === "MN"
          ? "Төрийн бус байгууллага"
          : "Non-governmental organization",
      imgPath: "/img/whosUsing/toriinBusBaiguullga.png",
      company1: "/img/companies/ubcab.png",
      company2: "/img/companies/ubcab.png",
      company3: "/img/companies/ubcab.png",
    },
    {
      title:
        language === "MN"
          ? "Олон салбартай, их өгөгдөлтэй байгууллагууд"
          : "Multidisciplinary, data-intensive organizations",
      imgPath: "/img/whosUsing/HugeData.png",
      company1: "/img/companies/ubcab.png",
      company2: "/img/companies/ubcab.png",
      company3: "/img/companies/ubcab.png",
    },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
      <div
        className={`${
          isHovered ? "h-60 sm:w-3/5" : "h-10 sm:w-[6%]"
        } sm:h-80 2xl:h-96 bg-[url('/img/whosUsing/uildwerlel.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-end rounded-xl p-4 duration-500`}
      >
        <div className={`${isHovered ? "block" : "hidden"} ml-3 duration-500`}>
          <h3 className="text-3xl font-semibold mb-2">
            {language === "MN" ? "Үйлдвэрлэл" : "Production"}
          </h3>
          <div className="hidden gap-3">
            <Image
              src="/img/companies/ubcab.png"
              alt="test photo"
              height={25}
              width={25}
              style={{ width: "auto" }}
              className="rounded-full"
            />
            <Image
              src="/img/companies/ubcab.png"
              alt="test photo"
              height={25}
              width={25}
              style={{ width: "auto" }}
              className="rounded-full"
            />
            <Image
              src="/img/companies/ubcab.png"
              alt="test photo"
              height={25}
              width={25}
              style={{ width: "auto" }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {contents.map((el, index) => (
        <div
          key={index}
          className={`group hover:h-60 sm:hover:h-80 2xl:hover:h-96 sm:hover:w-3/5 w-full sm:w-[6%] h-10 sm:h-80 2xl:h-96 bg-cover bg-center bg-no-repeat flex flex-col justify-end rounded-xl p-4 duration-300`}
          style={{ backgroundImage: `url(${el.imgPath})` }}
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
        >
          <div className="hidden group-hover:block ml-3 duration-300">
            <h3 className="text-3xl font-semibold mb-2">{el.title}</h3>
            <div className="hidden gap-3">
              <Image
                src={`${el.company1}`}
                alt="test photo"
                height={25}
                width={25}
                className="rounded-full"
              />
              <Image
                src={`${el.company2}`}
                alt="test photo"
                height={25}
                width={25}
                className="rounded-full"
              />
              <Image
                src={`${el.company3}`}
                alt="test photo"
                height={25}
                width={25}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhosUsing;
