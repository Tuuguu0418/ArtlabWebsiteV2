"use client";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="py-3">
      <div className="flex flex-col items-center">
        <Image
          src="/img/logo/artlabLogoBlack.png"
          alt="Artlab Logo Black"
          height={50}
          width={170}
          className="my-6"
        />
        <div className="flex flex-row justify-center space-x-6 text-lg 2xl:text-2xl mb-5">
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
    </footer>
  );
};

export default FooterComponent;
