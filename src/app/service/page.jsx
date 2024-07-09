"use client";

import * as React from "react";
import Image from "next/image";
import FooterComponent from "@/components/FooterComponent";
import { serviceData } from "@/utils/servicePageLanguage";
import { LanguageContext } from "@/context/LanguageContext";

const ServicePage = () => {
  const { language } = React.useContext(LanguageContext);
  const content =
    language === "MN"
      ? serviceData[0].languages.mongolian
      : serviceData[0].languages.english;

  return (
    <section data-textcolor="text-black" className="bg-white text-black pt-32">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col lg:flex-row w-3/4 items-center justify-between 2xl:justify-evenly">
          <h1 className="text-lg sm:text-xl xl:text-3xl 2xl:text-4xl font-semibold mb-5 lg:mb-0 text-center sm:text-left">
            {content.showcase.title1}
            <br />
            {content.showcase.title2}
            <br />
            <span className="text-sky-500">
              {content.showcase.title3} <br />
              {content.showcase.title4}
            </span>{" "}
            {content.showcase.title5}
          </h1>
          <Image
            src="/img/others/MongolianMap.png"
            alt="Mongolian Map"
            height={550}
            width={550}
            className="pl-5 sm:pl-0"
          />
        </div>
        <p className="w-5/6 sm:w-3/4 sm:px-10 text-xs 2xl:text-base mt-16 sm:mt-28 xl:mt-40 mb-12 sm:mb-32 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>

        <div className="w-11/12 text-[10px] sm:text-xs 2xl:text-base space-y-10 sm:space-y-20 mb-14">
          <div className="flex flex-col sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <Image
              src="/img/others/NatureOfTree.png"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                {content.subCase1.title}
              </h3>
              <p>
                {content.subCase1.text1}{" "}
                <span className="text-sky-500">
                  {content.subCase1.spanText1}
                </span>
                 {content.subCase1.text2}{" "}
                <span className="text-sky-500">
                  {content.subCase1.spanText2}
                </span>
                 {content.subCase1.text3}{" "}
                <span className="text-sky-500">
                  {content.subCase1.spanText3}
                </span>
                 {content.subCase1.text4}
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                {content.subCase2.title}
              </h3>
              <p>
                {content.subCase2.text1} <br /> <br /> {content.subCase2.text2}{" "}
                <span className="text-sky-500">
                  {content.subCase2.spanText1}
                </span>
                 {content.subCase2.text3}
              </p>
            </div>
            <Image
              src="/img/others/Sounds-of-Nature.jpg"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <Image
              src="/img/others/NatureOfTree.png"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                {content.subCase3.title}
              </h3>
              <p>{content.subCase3.text}</p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                {content.subCase4.title}
              </h3>
              <p>
                {content.subCase4.text1}{" "}
                <span className="text-sky-500">
                  {content.subCase4.spanText}
                </span>
                 {content.subCase4.text2} <br />
                <br /> {content.subCase4.text3}
              </p>
            </div>
            <Image
              src="/img/others/Sounds-of-Nature.jpg"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
          </div>
        </div>
        <FooterComponent />
      </div>
    </section>
  );
};

export default ServicePage;
