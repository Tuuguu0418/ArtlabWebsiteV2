import React, { useState, useRef, forwardRef, useMemo } from "react";
import { Input, Textarea, Select, SelectItem, Switch } from "@nextui-org/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(
  () => import("jodit-react").then((mod) => mod.default),
  { ssr: false }
);
const JoditEditorWithRef = React.forwardRef((props, ref) => (
  <JoditEditor ref={ref} {...props} />
));

const AddNews = ({
  data,
  setData,
  handleChange,
  handleSwitchChange,
  isSelected,
  seeNews,
  setSeeNews,
  seeEditNews,
}) => {
  const editor = useRef(null); //declared a null value
  const [content, setContent] = useState(""); //declare using state
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
  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleBodySave = () => {
    setData({ ...data, body: content });
    console.log("Saved data: ", data.body);
  };
  return (
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
        {/* <Textarea
          key="textarea-1"
          name="body"
          labelPlacement="outside"
          label="body"
          placeholder="something"
          minRows="6"
          onChange={handleChange}
        /> */}
        <div className="h-full w-full">
          {/* This is the main initialization of the Jodit editor */}
          <JoditEditor
            ref={editor} //This is important
            value={content} //This is important
            config={config} //Only use when you declare some custom configs
            onChange={handleContentChange} //handle the changes
            className="w-full h-[70%] mt-10 bg-white"
          />
          <style>{`.jodit-wysiwyg{height:300px !important}`}</style>
          <button
            className="bg-sky-700 w-1/3 p-1 rounded-md text-white mt-1"
            onClick={handleBodySave}
          >
            Хадгалах
          </button>
        </div>

        {/* <div className="my-10 h-full w-full">
          Preview:
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div> */}
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
      <div className="text-white flex gap-2 mt-10">
        <button className="bg-sky-700 w-1/3 p-1 rounded-md">Нэмэх</button>
        <button
          className="bg-sky-700 w-1/3 p-1 rounded-md"
          onClick={() => setSeeNews(!seeNews)}
        >
          {seeNews ? "Арилгах" : "Харах"}
        </button>
      </div>
    </div>
  );
};

export default AddNews;
