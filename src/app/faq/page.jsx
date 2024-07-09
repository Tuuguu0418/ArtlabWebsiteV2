"use client";

import * as React from "react";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SlUserFemale } from "react-icons/sl";
import { PiHandHeart } from "react-icons/pi";
import { CiBank } from "react-icons/ci";
import FooterComponent from "@/components/FooterComponent";
import { LanguageContext } from "@/context/LanguageContext";
import { faqData } from "@/utils/faqPageLanguage";

const FrequentlyAQ = () => {
  const [feedbackForm, setFeedbackForm] = React.useState({
    feedBack: "",
    viewerName: "",
    viewerPhone: "",
  });

  const [validationErrors, setValidationErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "viewerPhone" && value < 0) return;
    setFeedbackForm({ ...feedbackForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredFields = ["feedBack", "viewerName", "viewerPhone"];

    const newValidationErrors = {};
    requiredFields.forEach((field) => {
      if (!feedbackForm[field]) {
        newValidationErrors[field] = true;
      }
    });

    if (Object.keys(newValidationErrors).length > 0) {
      setValidationErrors(newValidationErrors);
      alert("Та бүх хэсгийг бөглөнө үү");
      return;
    }

    console.log(feedbackForm);
  };

  const { language } = React.useContext(LanguageContext);
  const content =
    language === "MN"
      ? faqData[0].languages.mongolian
      : faqData[0].languages.english;

  return (
    <NextUIProvider>
      <div className="bg-black">
        {/* Showcase section */}
        <section
          data-textcolor="text-white"
          className="flex flex-col-reverse gap-5 sm:gap-0 sm:flex-row text-white pt-40 mb-16 sm:mb-10 xl:mb-36"
        >
          <div className="flex flex-col basis-1/2 xl:basis-3/5 sm:justify-center items-center sm:items-end">
            <div className="w-11/12 sm:w-2/3 sm:mr-8">
              <h1 className="font-semibold text-3xl 2xl:text-5xl mb-2 sm:mb-4">
                {content.showcase.title1}{" "}
                <span className="text-sky-600">{content.showcase.title2}</span>
                <br /> {content.showcase.title3}
              </h1>
              <p className="text-xs 2xl:text-base leading-relaxed">
                {content.showcase.text}
              </p>
            </div>
          </div>
          <Image
            src="/img/others/Group389.png"
            alt="Group photo"
            height={350}
            width={350}
            className="w-11/12 sm:w-auto mx-auto sm:mx-0"
          />
        </section>

        {/* Түгээмэл асуулт хариулт section */}
        <section
          data-textcolor="text-black"
          className="text-black bg-white m-5 xl:m-2 rounded-3xl sm:rounded-xl"
        >
          <div className="flex flex-col items-center">
            <div className="text-center text-xs 2xl:text-base w-10/12 xl:w-3/5 pt-8">
              <h2 className="text-base sm:text-2xl 2xl:text-4xl font-bold mb-10 sm:my-10">
                {content.faqSection.title} {content.faqSection.title1}{" "}
                <span className="text-sky-500">
                  {content.faqSection.title2}
                </span>{" "}
                {content.faqSection.title3}
              </h2>
              <p className="my-10">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
              <p className="my-10">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
            </div>
            <div className="rounded-lg shadow-md w-[95%] sm:w-10/12 xl:w-3/5 p-3 text-sm 2xl:text-lg">
              <h3 className="text-blue-700 text-base 2xl:text-xl font-semibold m-2">
                {content.faq1.title}
              </h3>
              <Accordion isCompact defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Хэрэглэгчийн эрх"
                  subtitle="Press to expand"
                  title={content.faq1.subTitle1}
                  startContent={
                    <AiOutlineSafety className="text-sky-500 text-3xl" />
                  }
                  className=""
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <HiOutlineComputerDesktop className="text-lime-600 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <PiHandHeart className="text-orange-500 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <SlUserFemale className="text-blue-700 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <PiHandHeart className="text-yellow-700 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="6"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={<CiBank className="text-red-500 text-3xl" />}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
              </Accordion>
            </div>

            <div className="border rounded-lg shadow-md w-[95%] sm:w-10/12 xl:w-3/5 p-3 text-sm 2xl:text-lg my-6">
              <h3 className="text-blue-700 text-base 2xl:text-xl font-semibold m-2">
                Системийн тухай
              </h3>
              <Accordion isCompact>
                <AccordionItem
                  key="1"
                  aria-label="Хэрэглэгчийн эрх"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <AiOutlineSafety className="text-sky-500 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <HiOutlineComputerDesktop className="text-lime-600 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <PiHandHeart className="text-orange-500 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <SlUserFemale className="text-blue-700 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <PiHandHeart className="text-yellow-700 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="6"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={<CiBank className="text-red-500 text-3xl" />}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
              </Accordion>
            </div>

            <div className="border rounded-lg shadow-md w-[95%] sm:w-10/12 xl:w-3/5 p-3 text-sm 2xl:text-lg">
              <h3 className="text-blue-700 text-base 2xl:text-xl font-semibold m-2">
                Системийн тухай
              </h3>
              <Accordion isCompact>
                <AccordionItem
                  key="1"
                  aria-label="Хэрэглэгчийн эрх"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <AiOutlineSafety className="text-sky-500 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <HiOutlineComputerDesktop className="text-lime-600 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <PiHandHeart className="text-orange-500 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <SlUserFemale className="text-blue-700 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={
                    <PiHandHeart className="text-yellow-700 text-3xl" />
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  key="6"
                  aria-label="Accordion 3"
                  subtitle="Press to expand"
                  title="Хэрэглэгчийн эрх"
                  startContent={<CiBank className="text-red-500 text-3xl" />}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
              </Accordion>
            </div>
            <form
              className="w-[95%] sm:w-10/12 xl:w-3/5 mt-6 mb-10 sm:mb-14 rounded-lg shadow-md p-4 text-xs 2xl:text-base"
              onSubmit={handleSubmit}
            >
              <h3 className="text-blue-700 text-base 2xl:text-xl font-semibold mb-3">
                {content.contact.title}
              </h3>
              <textarea
                key="textarea-1"
                name="feedBack"
                rows="4"
                placeholder={content.contact.textareaText}
                onChange={handleChange}
                className="w-full mb-1 sm:mb-5 border rounded-xl p-4 placeholder-black font-medium"
              ></textarea>
              <div className="w-full flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col sm:flex-row w-2/3 gap-2 sm:gap-4">
                  <input
                    key="input-1"
                    name="viewerName"
                    type="text"
                    placeholder={content.contact.inputText1}
                    required
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-full sm:w-1/2 placeholder-black font-medium"
                  />
                  <input
                    key="input-2"
                    name="viewerPhone"
                    type="number"
                    placeholder={content.contact.inputText2}
                    required
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-full sm:w-1/2 placeholder-black font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-1/3 sm:w-auto rounded-md bg-sky-500 mt-2 sm:mt-0 px-0 sm:px-4 py-2 text-white"
                >
                  {content.contact.buttonText}
                </button>
              </div>
            </form>
            <FooterComponent />
          </div>
        </section>
      </div>
    </NextUIProvider>
  );
};

export default FrequentlyAQ;
