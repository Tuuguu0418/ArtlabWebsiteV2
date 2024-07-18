"use client";

import * as React from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { data } from "@/utils/mainpagelanguage";
import Image from "next/image";
import { WiStars } from "react-icons/wi";

const TestComponent = () => {
  const { language } = React.useContext(LanguageContext);
  const content =
    language === "MN" ? data[0].languages.mongolian : data[0].languages.english;

  return (
    <main className="bg-white">
      <header
        id="showcase"
        className="grid grid-cols sm:grid-cols-2 text-black sm:h-screen w-full"
      >
        <div className="order-last sm:order-first flex flex-col p-5 sm:p-0 sm:justify-center sm:items-center">
          <div>
            <p className="font-bold text-base">
              <WiStars className="inline text-yellow-400 text-2xl mr-2" />
              Ai prediction for everyone.
            </p>
            <h2 className="text-6xl font-bold my-5">
              Welcome to <br />
              the Future of <br />
              Sports
            </h2>
            <div className="flex text-xs 2xl:text-base gap-10">
              <a
                target="_blank"
                href="#"
                className="w-full sm:w-auto bg-black font-semibold text-white border rounded-2xl py-2 2xl:py-1 px-12 "
              >
                Get Started
              </a>
              <a href="#" className="border-b border-black px-7 py-2">
                Our Feature
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[30rem] sm:h-full w-full">
          <Image
            src="/img/resoltX/Rectangle201.png"
            fill
            style={{ objectFit: "cover" }}
            alt="something"
          />
        </div>
      </header>

      {/* Powered by AI section */}
      <section className="bg-black m-3 rounded-xl text-white text-xs pt-10">
        <div className="w-3/4 flex flex-col items-center mx-auto gap-8">
          <h1 className="text-2xl font-semibold">Powered by AI</h1>
          <Image
            src="/img/resoltX/Group9000.png"
            alt="AI"
            height={300}
            width={300}
          />
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            laudantium vero numquam dolorem mollitia iure sunt molestiae
            blanditiis explicabo cum soluta aspernatur dolores quae voluptates
            qui et doloremque, dicta tempore nesciunt esse ea libero. Mollitia
            earum repellendus, exercitationem maiores sint error quasi iure
            eveniet veritatis numquam consequuntur nulla deserunt quo eum ullam
            autem in dolorem obcaecati officiis dolore! Iure, ad in. Pariatur,
            illo! Iusto, provident!
          </p>
        </div>
        <div className="w-3/4 flex flex-col items-center mx-auto mt-40 gap-14">
          <h1 className="text-2xl font-semibold">Our Features</h1>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            laudantium vero numquam dolorem mollitia iure sunt molestiae
            blanditiis explicabo cum soluta aspernatur dolores quae voluptates
            qui et doloremque, dicta tempore nesciunt esse ea libero. Mollitia
            earum repellendus, exercitationem maiores sint error quasi iure
            eveniet veritatis numquam consequuntur nulla deserunt quo eum ullam
            autem in dolorem obcaecati officiis dolore! Iure, ad in. Pariatur,
            illo! Iusto, provident!
          </p>
        </div>
        <div className="w-11/12 flex flex-col mx-auto mt-10 bg-[url('/img/resoltX/Group9038.png')] bg-contain bg-center bg-no-repeat">
          <div className="w-72 h-40 mx-auto border border-white/50 bg-zinc-800 shadow-gray-500 shadow-sm rounded-2xl bg-opacity-80 backdrop-blur-sm py-6 px-4">
            <h3 className="text-base mb-2 font-semibold">Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              nulla aut labore, enim saepe molestias illum! Dicta sit fuga
              reprehenderit!
            </p>
          </div>
          <div className="flex flex-row justify-between px-10 mb-32 -mt-6">
            <div className="w-72 h-40 border border-white/50 bg-zinc-800 shadow-gray-500 shadow-sm rounded-2xl bg-opacity-80 backdrop-blur-sm py-6 px-4">
              <h3 className="text-base mb-2 font-semibold">Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nulla aut labore, enim saepe molestias illum! Dicta sit
                fuga reprehenderit!
              </p>
            </div>
            <div className="w-72 h-40 border border-white/50 bg-zinc-800 shadow-gray-500 shadow-sm rounded-2xl bg-opacity-80 backdrop-blur-sm py-6 px-4">
              <h3 className="text-base mb-2 font-semibold">Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nulla aut labore, enim saepe molestias illum! Dicta sit
                fuga reprehenderit!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full text-xs">
        <h1 className="text-2xl font-semibold">Choose your plan</h1>
        <p className="w-3/4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>
    </main>
  );
};

export default TestComponent;
