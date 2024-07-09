"use client";

import * as React from "react";
import ProductComponent from "@/components/productComponent";
import { LanguageContext } from "@/context/LanguageContext";
import { data } from "@/utils/mainpagelanguage";

const TestComponent = () => {
  const { language } = React.useContext(LanguageContext);
  const content =
    language === "MN" ? data[0].languages.mongolian : data[0].languages.english;

  return (
    <div>
      {/* Бүтээгдэхүүн  Section */}
      <section
        id="product"
        data-textcolor="text-white"
        className="flex flex-col text-white xl:h-screen w-full items-center justify-center my-24"
      >
        <div className="text-center">
          <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-bold mb-6">
            {content.title}
          </h2>
          <p className="text-xs 2xl:text-base w-3/4 mx-auto">{content.desc}</p>
          <ProductComponent />
        </div>
      </section>
    </div>
  );
};

export default TestComponent;
