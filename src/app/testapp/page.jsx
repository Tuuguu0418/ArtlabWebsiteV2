"use client";

/* Imports */
import React from "react";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <NextUIProvider>
      <main className="w-full h-screen bg-white">
        <div className="h-full flex flex-col items-center justify-center text-black">
          <form
            action=""
            className="w-1/4 flex flex-col gap-4 p-10 rounded-lg shadow-md text-sm"
          >
            <Input
              type="email"
              variant="bordered"
              label="USERNAME"
              labelPlacement="outside"
              placeholder="Enter your username"
            />
            <Input
              label="PASSWORD"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <MdRemoveRedEye className="text-xl text-default-400 pointer-events-none" />
                  ) : (
                    <IoEyeOffSharp className="text-xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs"
            />
            <Select
              key="select-1"
              name="type"
              labelPlacement="outside"
              placeholder="something"
              label="Type"
              selectedKeys={""}
              value={""}
            >
              <SelectItem key="blog">blog</SelectItem>
              <SelectItem key="Type 2">Type 2</SelectItem>
              <SelectItem key="Type 3">Type 3</SelectItem>
            </Select>
            <button className="bg-black text-white p-2 rounded-lg">
              Login
            </button>
          </form>
          <div>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal
              size="2xl"
              scrollBehavior="inside"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Modal Title
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex flex-col gap-4 items-center  ">
                        <Image
                          src="/img/others/something.png"
                          alt="something"
                          height={600}
                          width={600}
                          className="h-3/5 rounded-xl"
                        />
                        <div className="w-full">
                          {/* {parse(props.newsData.body)} */}
                          Example desc
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
