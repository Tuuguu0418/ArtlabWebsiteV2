"use client";

import Image from "next/image";
import * as React from "react";
import { WiStars } from "react-icons/wi";
import { MdLockOutline } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { LiaHandshake } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import styles from "./Home.module.css";
import ProductComponent from "@/components/productComponent";
import WorkersComponent from "@/components/workersComponent";
import { LanguageContext } from "@/context/LanguageContext";
import { data } from "@/utils/mainpagelanguage";

export default function Home() {
  // Showcase text animation
  React.useEffect(() => {
    const txts = document.querySelectorAll(`.${styles.animateText} span`);
    const txtsLen = txts.length;
    let index = 0;
    const textInTimer = 2000;
    const textOutTimer = 1500;

    function animateText() {
      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove(styles.text_in, styles.text_out);
      }
      txts[index].classList.add(styles.text_in);

      setTimeout(() => {
        txts[index].classList.add(styles.text_out);
      }, textOutTimer);

      setTimeout(() => {
        if (index === txtsLen - 1) {
          index = 0;
        } else {
          index++;
        }
        animateText();
      }, textInTimer);
    }

    animateText();
  }, []);

  // Хэл солих хэсэг
  const { language } = React.useContext(LanguageContext);
  const content =
    language === "MN" ? data[0].languages.mongolian : data[0].languages.english;

  // Үнийн мэдээлэл тооцоо бодох
  const [numUsers, setNumUsers] = React.useState();
  const [totalCost, setTotalCost] = React.useState(0);
  const [breakdown, setBreakdown] = React.useState([]);
  const [showTransition, setShowTransition] = React.useState(false);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumUsers(value);
      setShowTransition(false);
    } else {
      setNumUsers("Хэрэглэгч");
    }
  };

  const calculateCost = () => {
    if (numUsers < 5000 || numUsers === "Хэрэглэгч") {
      let cost = 0;
      let details = [];
      let users = numUsers;
      let totalUsers = numUsers;

      if (totalUsers >= 1) {
        const user1 = Math.min(users, 1);
        cost += user1 * 200000;
        details.push({
          label: "1 ",
          count: user1,
          cost: user1 * 200000,
        });
        users -= user1;
      }
      if (totalUsers >= 2) {
        const user23 = Math.min(users, 2);
        cost += user23 * 100000;
        details.push({
          label: "2-3 ",
          count: user23,
          cost: user23 * 100000,
        });
        users -= user23;
      }
      if (totalUsers >= 4) {
        const user410 = Math.min(users, 7);
        cost += user410 * 50000;
        details.push({
          label: "4-10 ",
          count: user410,
          cost: user410 * 50000,
        });
        users -= user410;
      }
      if (totalUsers >= 11) {
        const user1120 = Math.min(users, 10);
        cost += user1120 * 40000;
        details.push({
          label: "11-20 ",
          count: user1120,
          cost: user1120 * 40000,
        });
        users -= user1120;
      }
      if (totalUsers >= 21) {
        const user2130 = Math.min(users, 10);
        cost += user2130 * 30000;
        details.push({
          label: "21-30 ",
          count: user2130,
          cost: user2130 * 30000,
        });
        users -= user2130;
      }
      if (totalUsers >= 31) {
        const user31Plus = users;
        cost += user31Plus * 20000;
        details.push({
          label: "31-* ",
          count: user31Plus,
          cost: user31Plus * 20000,
        });
      }

      setTotalCost(cost);
      setBreakdown(details);
      setShowTransition(true);
    } else {
      alert("Та 5000-аас бага тоо оруулна уу");
      setTotalCost(0);
      setBreakdown([]);
      setShowTransition(false);
    }
  };

  const getClass = (min) => {
    return numUsers >= min && showTransition ? "border-sky-700" : "";
  };

  // Footer хэсэг
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
    <main className="bg-black z-30">
      {/* Showcase header */}
      <header
        id="showcase"
        className="grid grid-cols sm:grid-cols-2 text-white sm:h-screen w-full"
      >
        <div className="order-last sm:order-first flex flex-col p-5 sm:p-0 sm:justify-center sm:items-center">
          <div>
            <h2 className="sm:text-center text-4xl 2xl:text-5xl font-semibold">
              {content.showcase.showcaseTitle1}
              <br /> {content.showcase.showcaseTitle2}
            </h2>
            <p
              className={`font-semibold text-4xl 2xl:text-5xl overflow-hidden ${styles.animateText}`}
            >
              <span className={`hidden ${styles.textGradient}`}>
                {content.showcase.showcaseText1}
              </span>
              <span className={`hidden ${styles.textGradient}`}>
                {content.showcase.showcaseText2}
              </span>
              <span className={`hidden ${styles.textGradient}`}>
                {content.showcase.showcaseText3}
              </span>
            </p>
            <button className="w-full sm:w-auto font-semibold text-xs 2xl:text-base border rounded-lg py-2 2xl:py-1 px-12 mt-6 transition-all hover:text-sky-600 hover:border-sky-600">
              {content.showcase.showcaseButton}
            </button>
            <p className="flex justify-center sm:justify-normal items-center text-base 2xl:text-lg mt-2">
              <WiStars className="inline" /> {content.showcase.showcaseText4}
            </p>
          </div>
        </div>
        <div className="relative h-[30rem] sm:h-full w-full">
          <Image
            src="/img/others/something.png"
            fill
            style={{ objectFit: "cover" }}
            alt="something"
          />
        </div>
      </header>

      {/* Бүтээгдэхүүн  Section */}
      <section
        id="product"
        data-textcolor="text-white"
        className="flex flex-col text-white xl:h-screen w-full items-center justify-center my-24"
      >
        <div className="text-center">
          <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-bold mb-6">
            {content.product.title}
          </h2>
          <p className="text-xs 2xl:text-base w-3/4 mx-auto">
            {content.product.text}
          </p>
          <ProductComponent />
        </div>
      </section>

      {/* Бидний тухай Section */}
      <section id="about" data-textcolor="text-black" className="text-black">
        <div className="bg-white m-3 border rounded-lg h-full">
          <div className="text-center mt-10 xl:mt-20 w-full">
            <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-semibold mb-6">
              {content.aboutUs.title}
              <span className="text-sky-500">{content.aboutUs.title1}</span>
              {content.aboutUs.title2}
            </h2>
            <p className="text-xs 2xl:text-base w-4/5 mx-auto">
              {content.aboutUs.text}
            </p>
          </div>
          <div className="h-1/2 sm:h-3/5 xl:h-screen w-full mt-10 xl:mt-40 xl:relative">
            <div className="bg-[url('/img/backgrounds/Group285.svg')] bg-cover sm:bg-contain bg-center bg-no-repeat h-full xl:h-4/5 sm:w-full xl:w-5/6 flex flex-col sm:flex-row xl:flex-none items-center sm:justify-center gap-3 m-auto p-0 sm:py-10">
              <div className="rounded-md w-80 h-80 sm:w-96 sm:h-96 2xl:w-[40rem] 2xl:h-[40rem] bg-white shadow-md xl:absolute xl:-top-20 xl:left-44 p-3">
                <h3 className="font-semibold text-base 2xl:text-xl">
                  {content.aboutUs.introOneTitle}
                </h3>
                <p className="text-[10px] 2xl:text-sm">
                  {content.aboutUs.introOneText}
                </p>
              </div>
              <div className="rounded-md w-80 h-80 sm:w-96 sm:h-96 2xl:w-[40rem] 2xl:h-[40rem] bg-white shadow-md relative xl:absolute xl:bottom-10 xl:right-44">
                <div className="relative w-full h-3/4">
                  <Image
                    src="/img/others/mntower.png"
                    alt="MN Tower"
                    fill
                    objectFit="cover"
                    className="rounded-3xl p-3"
                  />
                </div>
                <h3 className="font-semibold text-sm 2xl:text-xl text-right mr-4">
                  MN tower #1407, Chingeltei, 5th khoroo <br />
                  Ulaanbaatar, Mongolia
                </h3>
                <div className="font-semibold text-slate-500 text-sm 2xl:text-lg absolute bottom-3 left-3 flex justify-between w-11/12">
                  <p>09:00 AM - 18:00 PM</p>
                  <p>+976 7505 6505</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/img/backgrounds/heroesbg.jpg')] bg-cover bg-center bg-no-repeat h-full rounded-2xl py-10">
            <h2 className="text-2xl 2xl:text-4xl text-center font-semibold mb-0 sm:mb-10">
              {content.aboutUs.title3}
            </h2>
            <WorkersComponent />
          </div>
        </div>
      </section>

      {/* Үнийн мэдээлэл Section */}
      <section
        id="price"
        data-textcolor="text-white"
        className="text-white py-20 flex flex-col items-center"
      >
        <h3 className="text-xl sm:text-2xl 2xl:text-4xl text-center font-semibold mb-10">
          {content.price.title}
        </h3>
        <div className="grid grid-cols sm:grid-cols-3 w-full max-w-sm sm:max-w-xl 2xl:max-w-4xl text-xs 2xl:text-base">
          <div className="order-last sm:order-first grid grid-cols-2 sm:flex sm:flex-col gap-x-2 sm:gap-0">
            <div
              id="price-1"
              className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
                1
              )} transition-all`}
            >
              <p>1 {content.price.textCustomer}</p>
              <p>200,000&#8366;</p>
            </div>
            <div
              id="price-2"
              className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
                2
              )} transition-all`}
            >
              <p>2-3 {content.price.textCustomer}</p>
              <p>100,000&#8366;</p>
            </div>
            <div
              id="price-3"
              className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
                4
              )} transition-all`}
            >
              <p>4-10 {content.price.textCustomer}</p>
              <p>50,000&#8366;</p>
            </div>
            <div
              id="price-4"
              className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
                11
              )} transition-all`}
            >
              <p>11-20 {content.price.textCustomer}</p>
              <p>40,000&#8366;</p>
            </div>
            <div
              id="price-5"
              className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
                21
              )} transition-all`}
            >
              <p>21-30 {content.price.textCustomer}</p>
              <p>30,000&#8366;</p>
            </div>
            <div
              id="price-6"
              className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
                31
              )} transition-all`}
            >
              <p>31-* {content.price.textCustomer}</p>
              <p>20,000&#8366;</p>
            </div>
          </div>
          <div className="sm:ml-20 sm:col-span-2 px-3 sm:px-0">
            <div className="flex flex-row mt-2">
              <input
                type="number"
                className="bg-black text-white border rounded-lg w-full mr-2 text-center"
                placeholder={content.price.textCustomer2}
                value={numUsers}
                onChange={handleInputChange}
                onBlur={calculateCost}
              />
              <button
                className="ml-4 bg-sky-500 rounded-md py-3 px-6"
                onClick={calculateCost}
              >
                {content.price.textButton}
              </button>
            </div>
            <div className="flex flex-col mt-6 mx-1">
              {breakdown.map((item, index) => (
                <div className="flex justify-between pb-3" key={index}>
                  <p className="w-[60%]">
                    {item.label}
                    {content.price.textCustomer}
                  </p>
                  <p className="w-[10%]">{item.count}</p>
                  <p className="w-[30%] text-right">
                    {item.cost.toLocaleString()}&#8366;
                  </p>
                </div>
              ))}
            </div>
            <div className="h-[1px] w-full bg-white block"></div>
            <div className="flex flex-col font-semibold mt-2 mx-1">
              <div className="flex justify-between pb-3">
                <p>{content.price.text1}</p>
                <p>{content.price.textFree}</p>
              </div>
              <div className="flex justify-between pb-3">
                <p>{content.price.text2}</p>
                <p>{content.price.textFree}</p>
              </div>
              <div className="flex justify-between pb-3">
                <p>{content.price.text3}</p>
                <p>{content.price.textFree}</p>
              </div>
              <div className="flex justify-between pb-3">
                <p>{content.price.text4}</p>
                <p>{content.price.textFree}</p>
              </div>
              <div className="flex justify-between">
                <p>{content.price.text5}</p>
                <p>{totalCost.toLocaleString()}&#8366;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Яагаад artlab Section */}
      <section id="why" data-textcolor="text-black" className="text-black">
        <div className="bg-white m-3 border rounded-lg">
          <div className="w-full text-center mt-12 sm:mt-20 mb-10">
            <h2 className="font-bold text-xl sm:text-2xl 2xl:text-4xl">
              {content.why.title1}{" "}
              <span className="text-sky-500">{content.why.title2}</span>{" "}
              {content.why.title3}
            </h2>
            <p className="w-4/5 text-xs 2xl:text-base my-6 mx-auto">
              {content.why.mainText}
            </p>
            <button className="bg-sky-500 border rounded-lg px-12 py-2 text-white text-sm 2xl:text-lg">
              {content.why.buttonText}
            </button>
          </div>
          <div className="bg-[url('/img/backgrounds/World_blue_dots.svg.png')] bg-cover sm:bg-contain bg-center bg-no-repeat h-full sm:h-[26rem] w-full sm:w-3/4 sm:m-auto">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-5 items-center sm:items-stretch text-center text-xs 2xl:text-base pt-20">
              <div className="basis-1/3 w-1/2 bg-white rounded-lg shadow-2xl pb-3 px-6 relative">
                <div className="inline-block bg-indigo-400 rounded-md p-3 text-white text-2xl 2xl:text-4xl -mt-6">
                  <MdLockOutline />
                </div>
                <h3 className="text-xs sm:text-sm 2xl:text-lg font-semibold my-5 sm:mb-4">
                  {content.why.subTitle1}
                </h3>
                <p>{content.why.subText1}</p>
              </div>
              <div className="basis-1/3 w-1/2 bg-white rounded-lg shadow-2xl pb-3 px-6">
                <div className="inline-block bg-pink-400 rounded-md p-3 text-white text-2xl 2xl:text-4xl -mt-6">
                  <FaWifi />
                </div>
                <h3 className="text-xs sm:text-sm 2xl:text-lg font-semibold my-5 sm:mb-4">
                  {content.why.subTitle2}
                </h3>
                <p>{content.why.subText2}</p>
              </div>
              <div className="basis-1/3 w-1/2 bg-white rounded-lg shadow-2xl pb-3 px-6">
                <div className="inline-block bg-orange-400 rounded-md p-3 text-white text-2xl 2xl:text-4xl -mt-6">
                  <LiaHandshake />
                </div>
                <h3 className="text-xs sm:text-sm 2xl:text-lg font-semibold my-5 sm:mb-4">
                  {content.why.subTitle3}
                </h3>
                <p>{content.why.subText3}</p>
              </div>
            </div>
          </div>
          <div className="my-20 w-full text-xs 2xl:text-base">
            <h2 className="text-2xl 2xl:text-4xl font-semibold text-center">
              {content.why.secondTitle}
            </h2>
            <p className="w-4/5 text-center my-6 mx-auto">
              {content.why.text2}
            </p>
            <div className="flex flex-col-reverse sm:flex-col gap-6 sm:gap-0">
              <div className="flex flex-row justify-center space-x-4">
                <a
                  href="https://apps.apple.com/us/app/artlab/id6499415731"
                  target="_blank"
                  className="relative h-9 w-32 block"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src="/img/others/downloadAppstore.png"
                      alt="Artlab Appstore"
                      fill
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=mn.artlab.mobileV2&hl=en_US&gl=US"
                  target="_blank"
                  className="relative h-9 w-32 block"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src="/img/others/onGoogleplay.png"
                      alt="Artlab Playstore"
                      fill
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </a>
              </div>
              <div className="grid sm:grid-cols-3 w-3/4 xl:w-1/2 my-5 sm:my-20 mx-auto text-base">
                <div className="hidden sm:grid sm:col-span-2 sm:pr-10">
                  <div className="flex flex-row">
                    <h4 className="bg-sky-500 text-white 2xl:text-xl mb-auto mr-4 px-4 py-2 rounded-lg">
                      1
                    </h4>
                    <div>
                      <h3 className="font-semibold 2xl:text-xl">
                        {content.why.textTitle1}
                      </h3>
                      <p>{content.why.text3}</p>
                    </div>
                  </div>
                  <div className="flex flex-row my-10">
                    <h4 className="bg-sky-500 text-white 2xl:text-xl mb-auto mr-4 px-4 py-2 rounded-lg">
                      2
                    </h4>
                    <div>
                      <h3 className="font-semibold 2xl:text-xl">
                        {content.why.textTitle2}
                      </h3>
                      <p>{content.why.text3}</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <h4 className="bg-sky-500 text-white 2xl:text-xl mb-auto mr-4 px-4 py-2 rounded-lg">
                      3
                    </h4>
                    <div>
                      <h3 className="font-semibold 2xl:text-xl">
                        {content.why.textTitle3}
                      </h3>
                      <p>{content.why.text3}</p>
                    </div>
                  </div>
                </div>
                <Image
                  src="/img/others/artlabphone.png"
                  alt="Artlab phone"
                  height={280}
                  width={230}
                  className="mx-auto sm:mx-0 sm:-mt-5 xl:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Санал хүсэлт Section */}
      <section id="contact" data-textcolor="text-white">
        <div className="bg-[url('/img/backgrounds/footer_bg.png')] bg-cover bg-center bg-no-repeat w-full pb-20 pt-32 xl:pt-52">
          <form
            className="w-11/12 sm:w-4/5 xl:w-2/3 text-xs 2xl:text-base text-white bg-black/60 backdrop-blur bg-opacity-75 border border-white/50 rounded-xl mx-auto py-5 px-7"
            onSubmit={handleSubmit}
          >
            <textarea
              key="textarea-1"
              name="feedBack"
              rows="6"
              placeholder={content.contact.textareaText}
              onChange={handleChange}
              className="w-full mb-5 border border-white/50 rounded-lg bg-black bg-opacity-0 p-4"
            ></textarea>
            <div className="w-full flex flex-col sm:flex-row sm:justify-between">
              <div className="flex flex-col sm:flex-row sm:w-2/3 gap-5 sm:gap-0 sm:space-x-4">
                <input
                  key="input-1"
                  name="viewerName"
                  type="text"
                  placeholder={content.contact.inputText1}
                  required
                  onChange={handleChange}
                  className="border border-white/50 rounded-md bg-black bg-opacity-0 px-4 py-2 sm:w-1/2"
                />
                <input
                  key="input-2"
                  name="viewerPhone"
                  type="number"
                  placeholder={content.contact.inputText2}
                  required
                  onChange={handleChange}
                  className="border border-white/50 rounded-md bg-black bg-opacity-0 px-4 py-2 sm:w-1/2"
                />
              </div>
              <button
                type="submit"
                className="w-1/3 sm:w-auto rounded-md bg-sky-500 px-4 py-2 mt-5 sm:mt-0 mx-auto sm:mx-0"
              >
                {content.contact.buttonText}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 text-center sm:text-left">
              <div className="flex flex-col space-y-2 mt-8">
                <p>
                  <span className="font-bold">
                    {content.contact.subText1}&emsp;
                  </span>
                  info@artlab.mn
                </p>
                <p>
                  <span className="font-bold">
                    {content.contact.subText2}&emsp;
                  </span>
                  7505 6505
                </p>
                <p>
                  <span className="font-bold">
                    {content.contact.subText3}&emsp;
                  </span>
                  MN tower #1407, Chingeltei, 5th khoroo, Ulaanbaatar, Mongolia
                </p>
              </div>
              <div className="mx-auto sm:mx-0 sm:relative">
                <ul className="flex space-x-4 sm:absolute sm:bottom-0 sm:right-0 text-2xl 2xl:text-4xl">
                  <li className="border rounded-lg p-2">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/artlab.mn/"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="border rounded-lg p-2">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/artlab.mn/"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="border rounded-lg p-2">
                    <a target="_blank" href="">
                      <FaTelegram />
                    </a>
                  </li>
                  <li className="border rounded-lg p-2">
                    <a target="_blank" href="">
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
