import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageContext } from "@/context/LanguageContext";
import { data } from "@/utils/mainpagelanguage";

const PriceComponent = () => {
  // Үнийн мэдээлэл тооцоо бодох
  const [numUsers, setNumUsers] = useState();
  const [totalCost, setTotalCost] = useState(0);
  const [breakdown, setBreakdown] = useState([]);
  const [showTransition, setShowTransition] = useState(false);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumUsers(value);
      setShowTransition(false);
    } else {
      setNumUsers(0);
    }
  };

  const calculateCost = () => {
    if (numUsers < 10000) {
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
    } else if (numUsers === "Хэрэглэгч") {
      setTotalCost(0);
      setBreakdown([]);
      setShowTransition(false);
    } else {
      toast.error("Та 5000-аас бага тоо оруулна уу");
      setTotalCost(0);
      setBreakdown([]);
      setShowTransition(false);
    }
  };

  const getClass = (min) => {
    return numUsers >= min && showTransition ? "border-sky-700" : "";
  };

  // Хэл солих хэсэг
  const { language } = React.useContext(LanguageContext);
  const content =
    language === "MN" ? data[0].languages.mongolian : data[0].languages.english;

  return (
    <div className="grid grid-cols sm:grid-cols-3 w-full max-w-sm md:max-w-2xl lg:max-w-3xl 2xl:max-w-6xl text-xs 2xl:text-base">
      <div>
        <p className="text-end">{content.price.textPerUser}</p>
        <div className="order-last sm:order-first grid grid-cols-2 sm:flex sm:flex-col gap-x-2 sm:gap-0 px-1 sm:px-0">
          <div
            id="price-1"
            className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
              1
            )} transition-all`}
          >
            <p>{content.price.textUser1}</p>
            <p>200,000&#8366;</p>
          </div>
          <div
            id="price-2"
            className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
              2
            )} transition-all`}
          >
            <p>{content.price.textUser2}</p>
            <p>100,000&#8366;</p>
          </div>
          <div
            id="price-3"
            className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
              4
            )} transition-all`}
          >
            <p>{content.price.textUser3}</p>
            <p>50,000&#8366;</p>
          </div>
          <div
            id="price-4"
            className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
              11
            )} transition-all`}
          >
            <p>{content.price.textUser4}</p>
            <p>40,000&#8366;</p>
          </div>
          <div
            id="price-5"
            className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
              21
            )} transition-all`}
          >
            <p>{content.price.textUser5}</p>
            <p>30,000&#8366;</p>
          </div>
          <div
            id="price-6"
            className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(
              31
            )} transition-all`}
          >
            <p>{content.price.textUser6}</p>
            <p>20,000&#8366;</p>
          </div>
        </div>
        <p className="text-end">{content.price.textNote}</p>
      </div>
      <div className="sm:ml-20 sm:col-span-2 mt-4 px-3 sm:px-0">
        <div className="flex flex-row mt-2">
          <input
            type="number"
            className="bg-black text-white border rounded-lg w-full mr-2 text-center"
            placeholder={content.price.textNumUsers}
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
                {content.price.subText1}
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
  );
};

export default PriceComponent;
