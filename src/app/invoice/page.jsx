import React from "react";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Invoice = () => {
  return (
    <NextUIProvider>
      <main className="bg-white py-20 text-xs text-black font-medium">
        <div className="flex justify-center">
          <div className="w-3/5 flex flex-col gap-3 border rounded-lg py-7 px-5">
            <section className="flex justify-between font-semibold">
              <div className="px-1 ml-2">
                <h1 className="text-2xl mb-1">Нэхэмжлэх</h1>
                <div className="flex gap-10">
                  <p className="text-black/50">
                    Дугаар: <span className="ml-3 text-black">242961</span>
                  </p>
                  <p className="text-black/50">
                    Огноо:{" "}
                    <span className="ml-3 text-black">
                      2024 оны 10-р сарын 2
                    </span>
                  </p>
                </div>
              </div>
              <Image
                src="/img/logo/artlabLogoBlue.png"
                alt="Logo"
                height={50}
                width={160}
              />
            </section>

            <section className="border rounded-lg divide-y-1 font-semibold">
              <div className="flex justify-between divide-x-1">
                <div className="w-full flex flex-col gap-3 p-7">
                  <h2 className="font-semibold text-sm">Нэхэмжлэгч</h2>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                </div>
                <div className="w-full flex flex-col gap-3 p-7">
                  <h2 className="font-semibold text-sm">Харилцагч</h2>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                </div>
              </div>
              <div className="p-7">
                <h2 className="mb-3 text-sm">Тайлбар</h2>
                <p className="text-black/50">
                  Гүйлгээний утга дээр нэхэмжлэхийн дугаараа ( 242961 ) бичнэ үү
                </p>
              </div>
            </section>

            <section>
              <table className="table-auto border w-full">
                <thead>
                  <tr className="text-black/50 bg-black/5">
                    <th className="border p-4 text-left font-medium">
                      Бараа, Ажил, Үйлчилгээ
                    </th>
                    <th className="border font-medium">Тоо</th>
                    <th className="border font-medium">Нэгж үнэ</th>
                    <th className="border font-medium">Нийт</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border p-4 text-left">
                      10001 - Үндсэн хэрэглэгч + Бааз Шинэ 200k
                    </td>
                    <td className="border">12</td>
                    <td className="border">200000 &#8366;</td>
                    <td className="border">
                      {parseInt(2400000).toLocaleString()} &#8366;
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 rounded-bl-lg text-left">
                      10001 - Үндсэн хэрэглэгч + Бааз Шинэ 200k
                    </td>
                    <td className="border">12</td>
                    <td className="border">200000 &#8366;</td>
                    <td className="border rounded-br-lg">2400000 &#8366;</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <div className="flex gap-3">
                <div className="w-3/5 h-fit flex flex-col gap-3 p-6 border rounded-lg">
                  <h2 className="font-semibold text-sm mb-1">
                    Төлбөрийн арга - Шилжүүлэг{" "}
                  </h2>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                </div>
                <div className="w-2/5 flex flex-col gap-3 p-6 border rounded-lg">
                  <h2 className="font-semibold text-sm mb-1">Үнийн мэдээлэл</h2>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-black/50">Нэр :</span>
                    <span>Артлаб ХХК</span>
                  </p>
                  <p className="flex justify-between border-t pt-3">
                    <span className="text-black/50">Нийт үнэ</span>
                    <span className="font-semibold text-sm">
                      3352000 &#8366;
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
};

export default Invoice;
