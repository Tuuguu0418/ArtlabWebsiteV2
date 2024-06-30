"use client"

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Input, Select, SelectItem, Textarea, Button} from "@nextui-org/react";
import Navigationbar from "@/components/navbar/navbar";

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

    const [isAdditionalCompanySelected, setIsAdditionalCompanySelected] = React.useState(false);
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
        if (name === 'numberOfUsers' && value < 0) return;
        setFormData({ ...formData, [name]: value });
        if (name === 'email') {
            setValidationErrors((prev) => ({ ...prev, email: !validateEmail(value) }));
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

    const getValidationProps  = (field) => {
        return validationErrors[field] ? { isInvalid: true } : {};
    };

    return(
        <NextUIProvider>
            <section bg-textcolor="text-black">
            <div className="w-full flex flex-row bg-white mt-20 z-30">
                <form className="w-4/5 lg:w-2/3 mx-auto">
                    <div className="w-full bg-white rounded-lg shadow-lg mt-4 p-8">
                        <p className="text-blue-500 font-bold text-sm md:text-base lg:text-lg">Байгууллагын мэдээлэл</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8 mt-6">
                            <Input
                                isRequired
                                key="input-1"
                                name="companyNameCyrillic"
                                label="Байгууллагын нэр /Кирилээр/"
                                labelPlacement="outside"
                                placeholder="Байгууллага А"
                                onChange={handleChange}
                                {...getValidationProps("companyNameLatin")}
                            />    
                            <Input
                                isRequired
                                key="input-2"
                                name="companyNameLatin"
                                label="Байгууллагын нэр /Латинаар/"
                                labelPlacement="outside"
                                placeholder="Company A"
                                onChange={handleChange}
                                {...getValidationProps("companyNameLatin")}
                            />
                            <Input
                                isRequired
                                key="input-3"
                                name="companyRegistrationNumber"
                                label="Байгууллагын рег. дугаар"
                                labelPlacement="outside"
                                placeholder="Регистрийн  дугаар"
                                onChange={handleChange}
                                {...getValidationProps("companyRegistrationNumber")}
                            />
                            <Input
                                key="input-4"
                                name="businessField"
                                label="Үйл ажиллагааны чиглэл"
                                labelPlacement="outside"
                                placeholder="Чиглэл"
                                onChange={handleChange}
                            />
                            <Input
                                key="input-5"
                                name="companyPhone"
                                label="Захирал/ Байгууллагын утас"
                                labelPlacement="outside"
                                placeholder="Байгууллагын утас ( Заавал биш )"
                                onChange={handleChange}
                            />
                            <Input
                                isRequired
                                key="input-6"
                                name="accountantPhone"
                                type="number"
                                label="Нягтлан бодогчийн утас"
                                labelPlacement="outside"
                                placeholder="Утасны дугаараа оруулна уу"
                                onChange={handleChange}
                                {...getValidationProps("accountantPhone")}
                            />
                            <Input
                                isRequired
                                key="input-7"
                                name="email"
                                type="email"
                                label="Имэйл"
                                labelPlacement="outside"
                                placeholder="Имэйлээ оруулна уу"
                                onChange={handleChange}
                                {...getValidationProps("email")}
                            />
                            <Input
                                key="input-8"
                                name="address"
                                label="Хаяг"
                                labelPlacement="outside"
                                placeholder="Хаягаа оруулна уу"
                                onChange={handleChange}
                            />
                        </div>
                        <p className="text-blue-500 font-bold mt-8">1-р гарын үсэг /<span className="text-slate-500 font-normal"> Гэрээний нүүрэн дээр бичигдэх</span></p>
                        <div className="flex flex-col lg:flex-row gap-4 gap-x-8 mt-6">
                        <Input
                            isRequired
                            key="input-9"
                            name="firstSignaturePosition"
                            label="Албан тушаал"
                            labelPlacement="outside"
                            placeholder="Гүйцэтгэх захирал..."
                            onChange={handleChange}
                            {...getValidationProps("firstSignaturePosition")}
                        />
                        <Input
                            isRequired
                            key="input-10"
                            name="firstSignatureName"
                            placeholder="Овог Нэр"
                            onChange={handleChange}
                            className="mt-6"
                            {...getValidationProps("firstSignatureName")}
                        />
                        </div>
                        <p className="text-blue-500 font-bold mt-8">2-р гарын үсэг</p>
                        <div className="flex flex-col lg:flex-row gap-4 gap-x-8 mt-6">
                        <Input
                            isRequired
                            key="input-11"
                            name="secondSignaturePosition"
                            label="Албан тушаал"
                            labelPlacement="outside"
                            placeholder="Менежер, Нягтлан бодогч, Инженер ..."
                            onChange={handleChange}
                            {...getValidationProps("secondSignaturePosition")}
                        />
                        <Input
                            isRequired
                            key="input-12"
                            name="secondSignatureName"
                            placeholder="Овог Нэр"
                            onChange={handleChange}
                            className="mt-6"
                            {...getValidationProps("secondSignatureName")}
                        />
                        </div>
                        <p className="text-blue-500 font-bold mt-8">Гэрээний мэдээлэл</p>
                        <div className="flex flex-col lg:flex-row gap-4 gap-x-8 mt-6">
                        <Input
                            className="numberOfUsers"
                            isRequired
                            key="input-13"
                            name="numberOfUsers"
                            type="number"
                            inputMode="numeric"
                            label="Авах хэрэглэгчийн тоо"
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
                            placeholder="Сонгох"
                            label="Нэмэлт бааз/компани авах эсэх"
                            className="max-w-xl"
                            onChange={(e) => handleSelectChange(e.target.value)}
                            {...getValidationProps("additionalCompany")}
                        >
                            <SelectItem className="text-green-500" key="Тийм">Тийм</SelectItem>
                            <SelectItem className="text-red-500" key="Үгүй">Үгүй</SelectItem>
                        </Select>
                        </div>
                        <div className="mt-6">
                        <Textarea
                            key="textarea-1"
                            name="additionalCompanyDescription"
                            labelPlacement="outside"
                            label="Тайлбар /Нэмэлт бааз авах бол компанийн нэр, РД оруулна уу/"
                            placeholder="Enter your description"
                            minRows="6"
                            isDisabled={!isAdditionalCompanySelected}
                            onChange={handleChange}
                            className="max-w-none"
                            {...getValidationProps("additionalCompanyDescription")}
                        />
                        <Textarea
                            key="textarea-2"
                            name="systemInfoDescription"
                            labelPlacement="outside"
                            label="Системийн талаарх мэдээллийг хаанаас авсан бэ?"
                            placeholder="Enter your description"
                            minRows="6"
                            onChange={handleChange}
                            className="max-w-none"
                            {...getValidationProps("systemInfoDescription")}
                        />
                        </div>
                        <div className="flex flex-row mt-6 justify-end items-end">
                        <Button className="bg-black text-white" onPress={handleSubmit}>Илгээх</Button>
                        </div>
                    </div>
                </form>
            </div>
            </section>
        </NextUIProvider>
    )
}

export default Forms;  