import React, { useEffect, useState } from "react";
import Image from "next/image";
import SeeEditNewsShow from "../SeeEditedNews/page";
import AddNews from "../AddNewNews/page";

import { Input, Textarea, Select, SelectItem, Switch } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const AdminPanelProductDB = () => {
  const [arr, setArr] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [editNews, seeEditNews] = useState("Edit");
  const [content, setContent] = useState("Worlds best html page");
  const itemsPerPage = 5;

  const [seeNews, setSeeNews] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    body: "",
    type: "",
    category: "",
    active: isSelected,
  });

  const doSearch = async () => {
    try {
      const results = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
        }
      );

      if (results) {
        const data = await results.json();

        return data;
      }
    } catch (error) {
      console.log("There is a error: " + error);
    }
  };

  useEffect(() => {
    const seeData = async () => {
      const data = await doSearch();
      setArr(data.splice(0, 40));
    };

    seeData();
  }, []);

  const setNewsInformation = (data) => {
    setData({ ...data, title: data.title, body: data.body });
    seeEditNews("EditPerPage");
  };

  // Get current date
  const date = new Date();
  const newDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

  // Edit Per Page section
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setIsSelected(e.target.checked);
    setData({ ...data, active: e.target.checked });
  };

  const handleSave = () => {
    setData({ ...data, body: content });
    console.log("Saved data: ", data);
  };

  const renderNews = () => {
    return seeNews ? <SeeEditNewsShow newsData={data} /> : "";
  };
  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (editNews === "Edit") {
    return (
      <div className="w-full h-full flex justify-center text-black">
        <div className="w-11/12">
          <div className="flex justify-between overflow-hidden mt-4 text-xs mb-5">
            <button
              className="p-3 rounded-md bg-gray-300"
              onClick={() => seeEditNews("Add")}
            >
              <FiPlus className="text-2xl" />
            </button>
            {Array.from(
              { length: Math.ceil(arr.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-2 mx-1 border rounded-md ${
                    currentPage === i + 1 ? "bg-black text-white" : "text-black"
                  }`}
                >
                  category {i + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 mx-1 rounded-md bg-gray-300`}
            >
              <FaArrowLeftLong />
            </button>
            <div className="my-auto mx-2">{newDate}</div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(arr.length / itemsPerPage)}
              className={`px-3 py-2 mx-1 rounded-md bg-gray-300`}
            >
              <FaArrowRightLong />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {currentItems.map((el, index) => (
              <div
                key={index}
                className="relative flex gap-2 border rounded-lg p-2 cursor-pointer"
                onClick={() => setNewsInformation(el)}
              >
                <Image
                  src="/img/companies/spiderman.jpg"
                  alt="some"
                  height={50}
                  width={50}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-xs font-semibold">{el.title}</h1>
                  <p>{el.body}</p>
                </div>
                <p className="absolute right-2 top-2 font-semibold text-xs">
                  {newDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (editNews === "EditPerPage") {
    return (
      <NextUIProvider>
        <main className="w-full h-full p-6">
          <div className="flex justify-between">
            <div className="w-2/5">
              <div className="text-sm mb-10">
                <div className="flex items-center gap-2 mb-8">
                  <button
                    className="bg-gray-300 rounded-3xl p-3 hover:bg-gray-500 duration-300"
                    onClick={() => seeEditNews("Edit")}
                  >
                    <FaArrowLeftLong />
                  </button>
                  <p>БУЦАХ</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Input
                    key="input-1"
                    name="title"
                    label="Title"
                    placeholder="something"
                    labelPlacement="outside"
                    value={data.title}
                    onChange={handleChange}
                  />
                  <Input
                    key="input-2"
                    name="thumbnail"
                    label="Thumbnail"
                    placeholder="something"
                    labelPlacement="outside"
                    onChange={handleChange}
                  />
                  <Textarea
                    key="textarea-1"
                    name="body"
                    labelPlacement="outside"
                    label="body"
                    placeholder="something"
                    minRows="6"
                    value={data.body}
                    onChange={handleChange}
                  />
                  <Select
                    key="select-1"
                    name="type"
                    labelPlacement="outside"
                    placeholder="something"
                    label="Type"
                    onChange={handleChange}
                  >
                    <SelectItem key="Type 1">Type 1</SelectItem>
                    <SelectItem key="Type 2">Type 2</SelectItem>
                    <SelectItem key="Type 3">Type 3</SelectItem>
                  </Select>
                  <Select
                    key="select-2"
                    name="category"
                    labelPlacement="outside"
                    placeholder="something"
                    label="Category"
                    onChange={handleChange}
                  >
                    <SelectItem key="Category 1">Category 1</SelectItem>
                    <SelectItem key="Category 2">Category 2</SelectItem>
                    <SelectItem key="Category 3">Category 3</SelectItem>
                  </Select>
                  <div>
                    <p className="mb-2">Active</p>
                    <Switch
                      defaultSelected={isSelected}
                      aria-label="Automatic updates"
                      isSelected={isSelected}
                      onChange={handleSwitchChange}
                    />
                  </div>
                </div>
              </div>
              <div className="text-white flex gap-2">
                <button className="bg-sky-700 w-1/3 p-1 rounded-md">
                  Хадгалах
                </button>
                <button
                  className="bg-sky-700 w-1/3 p-1 rounded-md"
                  onClick={() => setSeeNews(!seeNews)}
                >
                  {seeNews ? "Арилгах" : "Харах"}
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full overflow-y-scroll">{renderNews()}</div>
          </div>
        </main>
      </NextUIProvider>
    );
  } else if (editNews === "Add") {
    return (
      <NextUIProvider>
        <main className="w-full h-full p-6">
          <div className="flex justify-between">
            <div className="w-2/5">
              <AddNews
                data={data}
                setData={setData}
                handleChange={handleChange}
                handleSwitchChange={handleSwitchChange}
                isSelected={isSelected}
                seeNews={seeNews}
                setSeeNews={setSeeNews}
                seeEditNews={seeEditNews}
              />
            </div>
            <div className="w-1/2 h-full overflow-y-scroll">{renderNews()}</div>
          </div>
        </main>
      </NextUIProvider>
    );
  }
};

export default AdminPanelProductDB;
