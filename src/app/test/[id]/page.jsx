"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import FooterComponent from "@/components/FooterComponent";

const NewsShow = ({ params }) => {
  const { id } = params; // Get the id from the URL

  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://api.artlab.mn/inner/web/webpost/${id}`,
            {
              method: "GET",
            }
          );
          if (!response.ok) {
            notFound(); // If the response is not OK, show a 404 page
          }
          const data = await response.json();
          setNewsItem(data.value);
        } catch (error) {
          console.log("There is a error: ", error);
        }
      };
      fetchNews();
    }
  }, [id]);

  if (!newsItem) return <p>Loading...</p>;

  return (
    <main className="bg-white text-black">
      <div className="w-full h-full flex pt-20 justify-center">
        <div className="w-1/2 flex flex-col gap-8 rounded-xl shadow-md py-5 text-sm">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="w-11/12 font-semibold text-base">
              {newsItem.id}
              {newsItem.title}
            </h1>
            <Image
              src="/img/others/something.png"
              alt="something"
              height={600}
              width={600}
              className="w-11/12 h-3/5 rounded-xl"
            />
            <div className="w-11/12">
              {parse(newsItem.body)}
              <br />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h3 className="w-11/12 font-semibold text-base">Known unknown</h3>
          </div>
        </div>
      </div>
      <FooterComponent />
    </main>
  );
};

export default NewsShow;
