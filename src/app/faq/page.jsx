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
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

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
  return (
    <NextUIProvider>
      <div className="bg-black">
        {/* Showcase section */}
        <section
          data-textcolor="text-white"
          className="flex flex-row text-white pt-40 mb-36"
        >
          <div className="flex flex-col basis-3/5 justify-center items-end">
            <div className="w-2/3 mr-8">
              <h1 className="font-semibold text-3xl mb-4">
                Танд <span className="text-sky-600">тусламж</span>
                <br /> хэрэгтэй юу?
              </h1>
              <p className="text-xs leading-relaxed">
                Танд манай системийн талаар асуух зүйл байгаа, эсвэл
                бүртгэлийнхээ талаар тусламж хэрэгтэй байгаа эсэхээс үл хамааран
                манай найрсаг, хамт олон танд туслахад үргэлж таатай байх болно.
              </p>
            </div>
          </div>
          <Image
            src="/img/others/Group389.png"
            alt="Group photo"
            height={300}
            width={300}
          />
        </section>

        {/* Түгээмэл асуулт хариулт section */}
        <section
          data-textcolor="text-black"
          className="text-black bg-white m-2 rounded-xl"
        >
          <div className="flex flex-col items-center">
            <div className="text-center text-xs w-3/5 pt-8">
              <h2 className="text-2xl font-bold my-10">
                Түгээмэл <span className="text-sky-500">асуулт, хариулт</span>{" "}
                танд хүргье
              </h2>
              <p className="my-10">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className="my-10">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            <div className="rounded-lg shadow-md w-3/5 p-3 text-sm">
              <h3 className="text-blue-700 text-base font-semibold m-2">
                Системийн тухай
              </h3>
              <Accordion isCompact defaultExpandedKeys={["1"]}>
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

            <div className="border rounded-lg shadow-md w-3/5 p-3 text-sm my-6">
              <h3 className="text-blue-700 text-base font-semibold m-2">
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

            <div className="border rounded-lg shadow-md w-3/5 p-3 text-sm">
              <h3 className="text-blue-700 text-base font-semibold m-2">
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
              className="w-3/5 mt-6 mb-20 rounded-lg shadow-md p-4 text-xs"
              onSubmit={handleSubmit}
            >
              <h3 className="text-blue-700 text-base font-semibold mb-3">
                Тусламжын хүсэлт
              </h3>
              <textarea
                key="textarea-1"
                name="feedBack"
                rows="4"
                placeholder="Таны хүсэлт"
                onChange={handleChange}
                className="w-full mb-5 border rounded-xl p-4 placeholder-black font-medium"
              ></textarea>
              <div className="w-full flex justify-between">
                <div className="w-2/3 space-x-4 flex flex-row">
                  <input
                    key="input-1"
                    name="viewerName"
                    type="text"
                    placeholder="Таны нэр"
                    required
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-1/2 placeholder-black font-medium"
                  />
                  <input
                    key="input-2"
                    name="viewerPhone"
                    type="number"
                    placeholder="Утасны дугаар"
                    required
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-1/2 placeholder-black font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-sky-500 px-4 py-2 text-white"
                >
                  Хүсэлт илгээх
                </button>
              </div>
            </form>
            <div>
              <Image
                src="/img/logo/artlabLogoBlack.png"
                alt="Artlab Logo Black"
                height={50}
                width={170}
                className="my-6"
              />
              <div className="flex flex-row justify-center space-x-6 text-lg mb-5">
                <a target="_blank" href="https://www.facebook.com/artlab.mn/">
                  <FaFacebook />
                </a>
                <a target="_blank" href="https://www.instagram.com/artlab.mn/">
                  <FaInstagram />
                </a>
                <a target="_blank" href="">
                  <FaTelegram />
                </a>
                <a target="_blank" href="">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NextUIProvider>
  );
};

export default FrequentlyAQ;
