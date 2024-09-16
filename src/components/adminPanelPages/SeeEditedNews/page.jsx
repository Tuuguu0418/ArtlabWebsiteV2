"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";

const SeeEditNewsShow = (props) => {
  const [newsItem, setNewsItem] = useState(null);
  useEffect(() => {
    console.log(props.newsData);
  }, []);

  return (
    <main className="bg-white text-black">
      <div className="w-full h-full flex pb-20 justify-center">
        <div className="flex flex-col gap-8 rounded-xl shadow-md py-5 text-sm">
          <div className="flex flex-col gap-4 items-center  ">
            <h1 className="w-11/12 font-semibold text-base">
              {props.newsData.title}
            </h1>
            <Image
              src="/img/others/something.png"
              alt="something"
              height={600}
              width={600}
              className="w-11/12 h-3/5 rounded-xl"
            />
            <div className="w-11/12">
              {parse(props.newsData.body)}
              <br />
              <br />
              {parse(props.newsData.body)}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h3 className="w-11/12 font-semibold text-base">Known unknown</h3>
            <div className="w-11/12">
              {parse(props.newsData.body)}
              <br />
              <br />
              {parse(props.newsData.body)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SeeEditNewsShow;
