"use client";

import * as React from "react";
import Image from "next/image";

const ServicePage = () => {
  return (
    <section data-textcolor="text-black" className="bg-white text-black py-40">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col lg:flex-row w-3/4 items-center justify-between 2xl:justify-evenly">
          <h1 className="text-lg sm:text-xl xl:text-3xl 2xl:text-4xl font-semibold mb-5 lg:mb-0 text-center sm:text-left">
            Чөлөөт бүсүүд
            <br />
            гаалийн мэдүүлгээ
            <br />
            <span className="text-sky-500">
              системээс илгээх <br />
              боломжтой
            </span>{" "}
            боллоо
          </h1>
          <Image
            src="/img/others/MongolianMap.png"
            alt="Mongolian Map"
            height={550}
            width={550}
            className="pl-5 sm:pl-0"
          />
        </div>
        <p className="w-5/6 sm:w-3/4 sm:px-10 text-xs 2xl:text-base mt-16 sm:mt-28 xl:mt-40 mb-12 sm:mb-32 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>

        <div className="w-11/12 text-[10px] sm:text-xs 2xl:text-base space-y-10 sm:space-y-20">
          <div className="flex flex-col sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <Image
              src="/img/others/NatureOfTree.png"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                Мэдүүлгээс Бараа материалаа орлогодох
              </h3>
              <p>
                Артлаб санхүүгийн системийн{" "}
                <span className="text-sky-500">
                  Гаалийн Мэдүүлгийн жагсаалт
                </span>
                 цэсээр орж{" "}
                <span className="text-sky-500">Гаалийн мэдүүлэг татах</span>
                 товч дарж хугацаагаа сонгож{" "}
                <span className="text-sky-500">Татах</span> дарж татна.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                Гааль рүү орлогын мэдээгээ илгээх
              </h3>
              <p>
                Татах товч дарснаар сонгогдсон хугацааны хоорондох гаальд
                мэдүүлсэн мэдүүлгүүд жагсаалтаар татагдаж орж ирнэ. <br />{" "}
                <br /> Орж ирсэн мэдүүлэг дэхь БМ, тоо хэмжээгээ шалгаад, систем
                дэх БМ-н дотоод кодыг тохируулж, хэрэв мэдүүлгийн тоо хэмжээ
                зөрүүтэй бол гараас засаад{" "}
                <span className="text-sky-500">
                  Гааль рүү орлогын мэдээ илгээх (Хадгалах)
                </span>
                 товч дарснаар гаалийн систем рүү илгээгдэнэ.
              </p>
            </div>
            <Image
              src="/img/others/Sounds-of-Nature.jpg"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <Image
              src="/img/others/NatureOfTree.png"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                Үйлчлүүлэгч сонгох
              </h3>
              <p>
                Үйлчлүүлэгчийн Баркодыг Үйлчлүүлэгчийн дугаар хэсэгт оруулснаар
                гаалийн системээс мэдээллийг автоматаар татна.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:space-x-8 xl:space-x-14 border p-4 rounded-2xl sm:border-none sm:p-0 sm:rounded-none items-center">
            <div className="text-center sm:text-start sm:my-auto sm:basis-1/2 xl:basis-2/6">
              <h3 className="text-xs sm:text-base 2xl:text-xl font-semibold mb-1">
                Гаалийн шалгуур
              </h3>
              <p>
                Үйлчлүүлэгчийн дугаарыг тохируулж, барааг сонгоод{" "}
                <span className="text-sky-500">Дуусгах</span>
                 товч дарах үед үйлчлүүлэгчийн мэдээлэл гаалийн систем дээр
                шалгагдаж шалгуурууд ажиллана. <br />
                <br /> Орлогот авсан бараа борлуулахдаа Артлаб ПОС-н системээр
                борлуулна.
              </p>
            </div>
            <Image
              src="/img/others/Sounds-of-Nature.jpg"
              alt=""
              height={185}
              width={350}
              className="rounded-xl sm:basis-1/2 xl:basis-4/6 mb-3 sm:mb-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
