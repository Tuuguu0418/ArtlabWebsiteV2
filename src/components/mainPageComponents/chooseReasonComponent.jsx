import React from "react";

const ChooseReason = () => {
  const contents = [
    {
      title: "Үүлэн технологи",
      desc: "Орчин үеийн чиг хандлага болсон үүлэн технологийн (Cloud technology) ачаар бид харилцагчиддаа дэлхийн хаанаас ч, ямар ч төхөөрөмж ашиглан хандах боломжийг олгож чаддаг. Мөн энэхүү технологи нь бусад технологитой харьцуулахад серверийн зардлыг үлэмж ихээр багасган, аюулгүй найдвартай байдлыг санал болгодогоороо онцлогтой. Үйлчилгээнд суурилсан гэдэг зарчимтайгаа нийлээд ирэхээр, бид хамгийн хамгийн сүүлийн үеийн технологийг ашиглан, байнгын тасралтгүй сайжруулалт хөгжүүлэлтийг харилцагчиддаа хүргэхийг хичээдэг.",
      translateY: "",
    },
    {
      title: "Уян хатан төлбөрийн хэлбэр",
      desc: "Суурь хураамж, лицензийн төлбөргүй. Сургалт, зөвлөгөө үйлчилгээ үнэгүй. Серверийн зардал, өгөгдөл хадгалалт нь бүгд төлбөртөө багтсан. Мөн шаардлагатай* нэмэлт хөгжүүлэлтүүд дээр ч төлбөр авахгүй. Зөвхөн Сар бүр хэрэглээнийхээ хэрээр л төлбөр төлнө. Мөн хэрэглэгчийнхээ тооноос хамаарсан 80% хүртэлх шаталсан хөнгөлөлттэй.",
    },
    {
      title: "Үйлчилгээнд суурилсан",
      desc: "Артлаб ХХК нь үйлчилгээнд суурилсан бизнес модельтой (SAAS) учир нэг удаагийн борлуулалтаас илүү байнгын үйлчилгээ үзүүлэгч байж урт хугацааны хамтын ажиллагаанд түлхүү анхаардаг. Тийм ч учраас харилцагчиддаа тулгарах аливаа асуудал, бэрхшээл бүрт ойр байхын тулд тусламж, үйлчилгээ, санхүүгийн зөвлөгөөгөө улам боловсронгуй болгохыг хичээж ажилладаг.",
    },
  ];

  return (
    <div className="w-4/5 flex flex-col gap-5">
      <h2 className="border border-black w-fit  py-1 px-6 rounded-2xl text-base">
        сонгох шалтгаан
      </h2>
      {contents.map((el) => (
        <div className="flex gap-3 p-5 px-7 rounded-xl group hover:bg-gradient-to-l from-blue-600 to-cyan-500 hover:text-white duration-500">
          <div className="flex flex-col items-center pt-1">
            <div className="h-4 w-4 bg-black rounded-xl group-hover:bg-white duration-500 group-hover:translate-y-32"></div>
            <div className="h-full w-px bg-black group-hover:bg-white duration-500"></div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold">{el.title}</h2>
            <p>{el.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChooseReason;
