"use client"

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Image} from "@nextui-org/react";
import { SlArrowDown } from "react-icons/sl";
import { CiCircleQuestion } from "react-icons/ci";

const testComponent = () =>{
  const [numUsers, setNumUsers] = React.useState();
  const [totalCost, setTotalCost] = React.useState(0);
  const [breakdown, setBreakdown] = React.useState([]);
  const [showTransition, setShowTransition] = React.useState(false);

  const handleInputChange = (e) => {
    setNumUsers(parseInt(e.target.value));
    setShowTransition(false);
  };

  const calculateCost = () => {
    let cost = 0;
    let details = [];
    let users = numUsers;
    let totalUsers = numUsers;

    if(totalUsers>=1){
      const user1 = Math.min(users, 1);
      cost += user1 * 200000;
      details.push({label: "1 хэрэглэгч", count: user1, cost: user1 * 200000});
      users -= user1;
    } 
    if(totalUsers>=2){
      const user23 = Math.min(users, 2);
      cost += user23 * 100000;
      details.push({label: "2-3 хэрэглэгч", count: user23, cost: user23 * 100000});
      users -= user23;
    } 
    if(totalUsers>=4){
      const user410 = Math.min(users, 7);
      cost += user410 * 50000;
      details.push({label: "4-10 хэрэглэгч", count: user410, cost: user410 * 50000});
      users -= user410;
    } 
    if(totalUsers>=11){
      const user1120 = Math.min(users, 10);
      cost += user1120 * 40000;
      details.push({label: "11-20 хэрэглэгч", count: user1120, cost: user1120 * 40000});
      users -= user1120;
    } 
    if(totalUsers>=21){
      const user2130 = Math.min(users, 10);
      cost += user2130 * 30000;
      details.push({label: "21-30 хэрэглэгч", count: user2130, cost: user2130 * 30000});
      users -= user2130;
    } 
    if(totalUsers>=31){
      const user31Plus = users;
      cost += user31Plus * 20000;
      details.push({label: "31-* хэрэглэгч", count: user31Plus, cost: user31Plus * 20000});
    } 

    setTotalCost(cost);
    setBreakdown(details);
    setShowTransition(true);
  };

  const getClass = (min) => {
    return numUsers >= min && showTransition ? 'border-sky-700' : '';  
  };
    
  return(
    <div>
      <NextUIProvider>
        <Navbar className="bg-black/4 sticky top-0 z-50 w-full" position="sticky">
                <NavbarContent className="hidden sm:flex gap-4" justify="start">
                    <NavbarItem isActive>
                    <Link href="#showcase" aria-current="page" className="font-bold text-inherit pr-4 transition-all transform">
                        <Image 
                            className="pt-2"
                            width={100}
                            height={50}
                            alt="Artlab Logo"
                            src="/img/logo/artlablogo.png"
                        />
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link  color="foreground" href="#product" className="text-white text-xs font-semibold pr-4 transition ease-linear duration-700">
                        Бүтээгдэхүүн
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="#about" className="text-white text-xs font-semibold pr-4">
                        Бидний тухай   
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="#price" className="text-white text-xs font-semibold pr-4">
                        Үнэ
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="#contact" className="text-white text-xs font-semibold">
                        Холбогдох
                    </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Link className="text-white text-xs font-semibold pt-2" color="foreground" href="#">
                            <CiCircleQuestion size={20}/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button className="text-white text-xs font-semibold" variant="light">   
                                MN
                                <SlArrowDown />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">Монгол</DropdownItem>
                                <DropdownItem key="copy">Англи</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="#" className="text-white text-xs font-semibold">
                        Гэрээ
                    </Link>
                    </NavbarItem>
                    <NavbarItem className="pl-4">
                    <Button className="text-xs" as={Link} color="primary" href="#">
                        Нэвтрэх
                    </Button>
                    </NavbarItem>
                </NavbarContent>
        </Navbar>
      </NextUIProvider>
    <section id="price" className="-mt-20 bg-black text-white mb-20 flex flex-col items-center">
      <h3 className="text-2xl text-center font-semibold mb-10">Үнийн мэдээлэл</h3>
      <div className="grid grid-cols-3 w-full max-w-xl text-xs">
        <div className="flex flex-col">
          <div id="price-1" className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(1)} transition-all`}>
            <p>1 хэрэглэгч</p>
            <p>200,000&#8366;</p>
          </div>
          <div id="price-2" className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(2)} transition-all`}>
            <p>2-3 хэрэглэгч</p>
            <p>100,000&#8366;</p>
          </div>
          <div id="price-3" className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(4)} transition-all`}>
            <p>4-10 хэрэглэгч</p>
            <p>50,000&#8366;</p>
          </div>
          <div id="price-4" className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(11)} transition-all`}>
            <p>11-20 хэрэглэгч</p>
            <p>40,000&#8366;</p>
          </div>
          <div id="price-5" className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(21)} transition-all`}>
            <p>21-30 хэрэглэгч</p>
            <p>30,000&#8366;</p>
          </div>
          <div id="price-6" className={`border rounded-md px-2 py-3 flex justify-between my-2 ${getClass(31)} transition-all`}>
            <p>31-* хэрэглэгч</p>
            <p>20,000&#8366;</p>
          </div>
        </div>
        <div className="ml-20 col-span-2">
          <div className="flex flex-row mt-2">
              {/* <div className="border rounded-md flex justify-between items-center w-60">
                <p className="pl-3">Хэрэглэгч</p>
                <input 
                  type="number" 
                  className="bg-black text-white border border-black w-10 mr-2" 
                  placeholder="1" 
                  value={numUsers} 
                  onChange={handleInputChange}
                  onBlur={calculateCost}
                />
              </div> */}
            <input 
                type="number" 
                className="bg-black text-white border border-black w-full mr-2 text-center" 
                placeholder="Хэрэглэгч" 
                value={numUsers} 
                onChange={handleInputChange}
                onBlur={calculateCost}
            />
            <button className="ml-4 bg-sky-500 rounded-md py-3 px-6" onClick={calculateCost}>Тооцоолох</button>
          </div>
          <div className="flex flex-col mt-6 mx-1">
            {breakdown.map((item, index)=>(
              <div className="flex justify-between pb-3" key={index}>
                <p className="w-[60%]">{item.label}</p>
                <p className="w-[10%]">{item.count}</p>
                <p className="w-[30%] text-right">{item.cost.toLocaleString()}&#8366;</p>
              </div>
            ))}
          </div>
          <div className="h-[1px] w-full bg-white block"></div>
          <div className="flex flex-col font-semibold mt-2 mx-1">
            <div className="flex justify-between pb-3">
              <p>Суурь хураамж</p>
              <p>Үнэгүй</p>
            </div>
            <div className="flex justify-between pb-3">
              <p>Нэвтрүүлэлт</p>
              <p>Үнэгүй</p>
            </div>
            <div className="flex justify-between pb-3">
              <p>Серверийн зардал</p>
              <p>Үнэгүй</p>
            </div>
            <div className="flex justify-between pb-3">
              <p>Сургалт</p>
              <p>Үнэгүй</p>
            </div>
            <div className="flex justify-between">
              <p>Нийт</p>
              <p>{totalCost.toLocaleString()}&#8366;</p>
            </div>
          </div>
        </div>
      </div>
    </section>  
    </div>
  )
}

export default testComponent;