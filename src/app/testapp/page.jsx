"use client";

/* Imports */
import React, { useState, useEffect, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "./style.module.css";

/* Using dynamic import of Jodit component as it can't render in server side*/
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

/*functions*/
export default function Home() {
  const editor = useRef(null); //declared a null value
  const [content, setContent] = useState("Worlds best html page"); //declare using state

  /* The most important point*/
  const config = useMemo(
    //  Using of useMemo while make custom configuration is strictly recomended
    () => ({
      //  if you don't use it the editor will lose focus every time when you make any change to the editor, even an addition of one character
      /* Custom image uploader button configuretion to accept image and convert it to base64 format */
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"], // this line is not much important , use if you only strictly want to allow some specific image format
      },
    }),
    []
  );
  /* function to handle the changes in the editor */
  const handleChange = (value) => {
    setContent(value);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => {
      card.onmousemove = function (e) {
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      };
    });
  }, []);

  return (
    <>
      {/* Below is a basic html page and we use Tailwind css to style*/}
      <Head>
        <title>Jodit Rich Text Editor on the Web | Soubhagyajit</title>
        <meta name="author" content="Soubhagyajit Borah" />
      </Head>
      <main className="my-20">
        <div className="h-screen w-screen flex items-center flex-col mt-20">
          <div className="m-10  flex flex-col items-center text-white">
            <span className="text-2xl text-center">
              Jodit Rich Text Editor on the Web
            </span>
            <div className="text-center">Author : Soubhagyajit Borah</div>
            <div className="text-center">
              visit{" "}
              <a
                href="https://www.soubhagyajit.com/blogs/adding-Jodit-js-:-rich-text-editor-to-a-react-(next.js)-application"
                target="_blank"
                className="text-blue-500"
              >
                www.soubhagyajit.com
              </a>{" "}
              for more information
            </div>
          </div>
          <div className="h-full w-1/3">
            {/* This is the main initialization of the Jodit editor */}
            <JoditEditor
              ref={editor} //This is important
              value={content} //This is important
              config={config} //Only use when you declare some custom configs
              onChange={handleChange} //handle the changes
              className="w-full h-[70%] bg-white"
            />
            <style>{`.jodit-wysiwyg{height:300px !important}`}</style>
          </div>

          <div className="my-10 h-full w-[90vw] text-white">
            Preview:
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
        <div className="w-full h-screen">
          <div className="flex min-h-screen items-center justify-center bg-[#222]">
            <div
              className={`${styles.container} flex justify-center items-center gap-12 flex-wrap`}
            >
              <div className={`${styles.card}`}></div>
              <div className={`${styles.card}`}></div>
              <div className={`${styles.card}`}></div>
              <div className={`${styles.card}`}></div>
              <div className={`${styles.card}`}></div>
              <div className={`${styles.card}`}></div>
              <div className={`${styles.card}`}></div>
              <div className={`${styles.card}`}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
