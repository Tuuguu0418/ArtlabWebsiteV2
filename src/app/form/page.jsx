"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Input, Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { formDataLanguage } from "@/utils/formPageLanguage";
import { LanguageContext } from "@/context/LanguageContext";

const Forms = () => {
  const [formData, setFormData] = React.useState({
    companyNameCyrillic: "",
    companyNameLatin: "",
    companyRegistrationNumber: "",
    businessField: "",
    companyPhone: "",
    accountantPhone: "",
    email: "",
    address: "",
    firstSignaturePosition: "",
    firstSignatureName: "",
    secondSignaturePosition: "",
    secondSignatureName: "",
    numberOfUsers: "",
    additionalCompany: "",
    additionalCompanyDescription: "",
    systemInfoDescription: "",
  });

  const [isAdditionalCompanySelected, setIsAdditionalCompanySelected] =
    React.useState(false);
  const [validationErrors, setValidationErrors] = React.useState({});

  const handleSelectChange = (value) => {
    setIsAdditionalCompanySelected(value === "Тийм");
    setFormData({ ...formData, additionalCompany: value });
    if (value) {
      setValidationErrors((prev) => ({ ...prev, additionalCompany: !value }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "numberOfUsers" && value < 0) return;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      setValidationErrors((prev) => ({
        ...prev,
        email: !validateEmail(value),
      }));
    } else {
      if (value) {
        setValidationErrors((prev) => ({ ...prev, [name]: !value }));
      }
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    const requiredFields = [
      "companyNameCyrillic",
      "companyNameLatin",
      "companyRegistrationNumber",
      "accountantPhone",
      "email",
      "firstSignaturePosition",
      "firstSignatureName",
      "secondSignaturePosition",
      "secondSignatureName",
      "numberOfUsers",
      "additionalCompany",
    ];

    const newValidationErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newValidationErrors[field] = true;
      }
    });

    if (Object.keys(newValidationErrors).length > 0) {
      setValidationErrors(newValidationErrors);
      alert("*-той хэсгүүдийг бүгдийг нь бөглөнө үү");
      return;
    }

    // const missingFields = requiredFields.filter(field => !formData[field]);

    // if (missingFields.length > 0) {
    //     alert("*-той хэсгүүдийг бүгдийг нь бөглөнө үү");
    //     return;
    // }

    console.log(formData);
  };

  const getValidationProps = (field) => {
    return validationErrors[field] ? { isInvalid: true } : {};
  };

  const { language } = React.useContext(LanguageContext);
  const content =
    language === "MN"
      ? formDataLanguage[0].language.mongolian
      : formDataLanguage[0].language.english;

  return (
    <NextUIProvider>
      <div className="w-full flex flex-row bg-white pt-20 z-30">
        <form className="w-4/5 lg:w-2/3 mx-auto">
          <div className="w-full bg-white rounded-lg shadow-md my-4 p-8">
            <p className="text-blue-500 font-bold text-sm lg:text-lg md:text-base">
              {content.part1.title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8 mt-6">
              <Input
                isRequired
                key="input-1"
                name="companyNameCyrillic"
                label={content.part1.inputLabel1}
                labelPlacement="outside"
                placeholder={content.part1.inputPholder1}
                onChange={handleChange}
                {...getValidationProps("companyNameLatin")}
              />
              <Input
                isRequired
                key="input-2"
                name="companyNameLatin"
                label={content.part1.inputLabel2}
                labelPlacement="outside"
                placeholder="Company A"
                onChange={handleChange}
                {...getValidationProps("companyNameLatin")}
              />
              <Input
                isRequired
                key="input-3"
                name="companyRegistrationNumber"
                label={content.part1.inputLabel3}
                labelPlacement="outside"
                placeholder={content.part1.inputPholder3}
                onChange={handleChange}
                {...getValidationProps("companyRegistrationNumber")}
              />
              <Input
                key="input-4"
                name="businessField"
                label={content.part1.inputLabel4}
                labelPlacement="outside"
                placeholder={content.part1.inputPholder4}
                onChange={handleChange}
              />
              <Input
                key="input-5"
                name="companyPhone"
                label={content.part1.inputLabel5}
                labelPlacement="outside"
                placeholder={content.part1.inputPholder5}
                onChange={handleChange}
              />
              <Input
                isRequired
                key="input-6"
                name="accountantPhone"
                type="number"
                label={content.part1.inputLabel6}
                labelPlacement="outside"
                placeholder={content.part1.inputPholder6}
                onChange={handleChange}
                {...getValidationProps("accountantPhone")}
              />
              <Input
                isRequired
                key="input-7"
                name="email"
                type="email"
                label={content.part1.inputLabel7}
                labelPlacement="outside"
                placeholder={content.part1.inputPholder7}
                onChange={handleChange}
                {...getValidationProps("email")}
              />
              <Input
                key="input-8"
                name="address"
                label={content.part1.inputLabel8}
                labelPlacement="outside"
                placeholder={content.part1.inputPholder8}
                onChange={handleChange}
              />
            </div>
            <p className="text-blue-500 font-bold mt-8 text-sm md:text-base lg:text-lg">
              {content.part2.title}
              <span className="text-slate-500 font-normal">
                {" "}
                {content.part2.titleText}
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 gap-x-8 mt-6">
              <Input
                isRequired
                key="input-9"
                name="firstSignaturePosition"
                label={content.part2.inputLabel1}
                labelPlacement="outside"
                placeholder={content.part2.inputPholder1}
                onChange={handleChange}
                {...getValidationProps("firstSignaturePosition")}
              />
              <Input
                isRequired
                key="input-10"
                name="firstSignatureName"
                placeholder={content.part2.inputPholder2}
                onChange={handleChange}
                className="mt-6"
                {...getValidationProps("firstSignatureName")}
              />
            </div>
            <p className="text-blue-500 font-bold mt-8 text-sm md:text-base lg:text-lg">
              {content.part3.title}
            </p>
            <div className="flex flex-col md:flex-row gap-4 gap-x-8 mt-6">
              <Input
                isRequired
                key="input-11"
                name="secondSignaturePosition"
                label={content.part3.inputLabel1}
                labelPlacement="outside"
                placeholder={content.part3.inputPholder1}
                onChange={handleChange}
                {...getValidationProps("secondSignaturePosition")}
              />
              <Input
                isRequired
                key="input-12"
                name="secondSignatureName"
                placeholder={content.part3.inputPholder2}
                onChange={handleChange}
                className="mt-6"
                {...getValidationProps("secondSignatureName")}
              />
            </div>
            <p className="text-blue-500 font-bold mt-8 text-sm md:text-base lg:text-lg">
              {content.part4.title}
            </p>
            <div className="flex flex-col lg:flex-row gap-4 gap-x-8 mt-6">
              <Input
                className="numberOfUsers"
                isRequired
                key="input-13"
                name="numberOfUsers"
                type="number"
                inputMode="numeric"
                label={content.part4.inputLabel1}
                labelPlacement="outside"
                placeholder="12"
                onChange={handleChange}
                {...getValidationProps("numberOfUsers")}
              />
              <Select
                isRequired
                key="select-1"
                name="additionalCompany"
                labelPlacement="outside"
                placeholder={content.part4.inputPholder2}
                label={content.part4.inputLabel2}
                className="max-w-none"
                onChange={(e) => handleSelectChange(e.target.value)}
                {...getValidationProps("additionalCompany")}
              >
                <SelectItem className="text-green-500" key="Тийм">
                  {content.part4.yes}
                </SelectItem>
                <SelectItem className="text-red-500" key="Үгүй">
                  {content.part4.no}
                </SelectItem>
              </Select>
            </div>
            <div className="mt-6">
              <Textarea
                key="textarea-1"
                name="additionalCompanyDescription"
                labelPlacement="outside"
                label={content.part5.textAreaLabel1}
                placeholder="Enter your description"
                minRows="6"
                isDisabled={!isAdditionalCompanySelected}
                onChange={handleChange}
                className="max-w-none mb-3"
                {...getValidationProps("additionalCompanyDescription")}
              />
              <Textarea
                key="textarea-2"
                name="systemInfoDescription"
                labelPlacement="outside"
                label={content.part5.textAreaLabel2}
                placeholder="Enter your description"
                minRows="6"
                onChange={handleChange}
                className="max-w-none"
                {...getValidationProps("systemInfoDescription")}
              />
            </div>
            <div className="flex flex-row mt-6 justify-end items-end">
              <Button className="bg-black text-white" onPress={handleSubmit}>
                {content.part5.buttonText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </NextUIProvider>
  );
};

export default Forms;
