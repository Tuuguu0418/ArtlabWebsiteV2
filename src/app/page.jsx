  "use client"

  import Image from "next/image";
  import * as React from "react";
  import { WiStars } from "react-icons/wi";
  import { MdLockOutline } from "react-icons/md";
  import { FaWifi } from "react-icons/fa6";
  import { LiaHandshake } from "react-icons/lia";
  import { FaFacebook } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { FaTelegram } from "react-icons/fa";
  import { FaEnvelope } from "react-icons/fa";
  import styles from './Home.module.css';
  import ProductComponent from "@/components/productComponent";
  import WorkersComponent from "@/components/workersComponent";

  export default function Home() {
    React.useEffect(() => {
      const txts = document.querySelectorAll(`.${styles.animateText} span`);
      const txtsLen = txts.length;
      let index = 0;
      const textInTimer = 2000;
      const textOutTimer = 1500;

      function animateText() {
        for (let i = 0; i < txtsLen; i++) {
          txts[i].classList.remove(styles.text_in, styles.text_out);
        }
        txts[index].classList.add(styles.text_in);

        setTimeout(() => {
          txts[index].classList.add(styles.text_out);
        }, textOutTimer);

        setTimeout(() => {
          if (index === txtsLen - 1) {
            index = 0;
          } else {
            index++;
          }
          animateText();
        }, textInTimer);
      }

      animateText();
    }, []);

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

    const [feedbackForm, setFeedbackForm] = React.useState({
      feedBack: "",
      viewerName: "",
      viewerPhone: "",
    });

    const [validationErrors, setValidationErrors] = React.useState({});

    const handleChange = (e) =>{
      const {name, value} = e.target;
      if(name === "viewerPhone" && value<0) return;
      setFeedbackForm({...feedbackForm, [name]: value});
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      const requiredFields = [
        "feedBack",
        "viewerName",
        "viewerPhone",
      ];

      const newValidationErrors = {};
      requiredFields.forEach((field)=>{
        if(!feedbackForm[field]){
          newValidationErrors[field]=true;
        }
      });

      if(Object.keys(newValidationErrors).length>0){
        setValidationErrors(newValidationErrors);
        alert("Та бүх хэсгийг бөглөнө үү");
        return;
      }

      console.log(feedbackForm);
    }

    return (
      <main className="bg-black z-30">
        {/* Showcase header */}
        <header id="showcase"  data-textcolor = "text-white" className="grid grid-cols-2 text-white h-screen">
          <div className="mt-2 flex flex-col justify-center items-center">
            <div className="">
              <h2 className="text-center text-4xl font-semibold">Бүгдийг нэг дор<br/> ашиглах систем</h2>
              <p className={`font-semibold text-4xl overflow-hidden ${styles.animateText}`}>
                <span className={`hidden ${styles.textGradient}`}>санхүү</span>
                <span className={`hidden ${styles.textGradient}`}>пос</span>
                <span className={`hidden ${styles.textGradient}`}>үйлдвэрлэл</span>
              </p>
              <button className="font-semibold text-xs border rounded-lg py-1 px-12 mt-4 transition-all hover:text-sky-600 hover:border-sky-600">
                Турших
              </button>
              <p className="flex items-center text-base mt-2"><WiStars className="inline"/> Амар, хялбар, Хурдан</p>
            </div>
          </div>
          <div className="flex items-center justify-end" >
            <div className="relative h-full w-full">
              <Image src="/img/others/something.png" fill style={{objectFit: 'cover'}} alt="something" />
            </div>
          </div>
        </header>

        {/* Бүтээгдэхүүн  Section */}
        <section id="product" data-textcolor = "text-white" className="flex flex-col text-white h-screen items-center justify-center my-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Хүссэн бүхэн нэг дор</h2>
            <p className="text-xs px-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam necessitatibus veritatis? Dolorem quo libero recusandae esse, corporis in possimus voluptates illum veniam exercitationem asperiores temporibus officiis praesentium dolores rerum cum quod ab. Quos ab maxime laboriosam, tempora deserunt voluptate error quam ipsa voluptas deleniti esse debitis eos optio enim.</p>
            <ProductComponent />
          </div>
        </section>

        {/* Бидний тухай Section */}
        <section id="about" data-textcolor = "text-black" className="text-black">
          <div className="bg-white m-3 border rounded-lg">
            <div className="text-center mt-20">
              <h2 className="text-2xl font-semibold my-4"><span className="text-sky-500">Бид</span>ний тухай</h2>
              <p className="text-xs px-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis voluptate deserunt sed eum quos pariatur aliquid, quam tenetur voluptates! Porro laboriosam vel quia. Doloribus quae et dicta dolore nesciunt assumenda voluptate soluta nobis. Eos quod quas dolorem accusamus, natus aliquam odit voluptatum nemo perspiciatis, praesentium expedita vero! Eaque, obcaecati dolores.</p>
            </div>
            <div className="h-screen mt-40 relative">
              <div className="bg-[url('/img/backgrounds/Group285.svg')] bg-contain bg-center bg-no-repeat h-4/5 w-5/6 m-auto">
                <div className="rounded-md w-96 h-96 bg-white shadow-xl absolute -top-20 left-44">
                  <h3 className="font-semibold text-base">Хамтрагч харилцагч байгууллагууд</h3>
                  <p className="text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad tenetur accusantium inventore, numquam, omnis voluptatum, placeat quam mollitia quaerat soluta veritatis quasi vel fugiat deleniti pariatur quis! Commodi qui ipsa dolorum laboriosam rem id natus non reiciendis error facilis.</p>
                </div>
                <div className="rounded-md w-96 h-96 bg-white shadow-xl absolute bottom-10 right-44">
                  <div className="relative w-full h-72">
                    <Image src="/img/others/mntower.png" alt="MN Tower" layout="fill" objectFit="cover" className="rounded-3xl p-3"/>
                  </div>
                  <h3 className="font-semibold text-sm text-right mr-4">MN tower #1407, Chingeltei, 5th khoroo <br />Ulaanbaatar, Mongolia</h3>
                  <div className="font-semibold text-slate-500 absolute text-sm absolute bottom-3 left-3 flex justify-between w-11/12">
                    <p>09:00 AM - 18:00 PM</p>
                    <p>+976 7505 6505</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/img/backgrounds/heroesbg.jpg')] bg-cover bg-center bg-no-repeat h-full rounded-2xl py-10">
              <h2 className="text-2xl text-center font-semibold mb-20">Сүпер баатрууд</h2>
              <WorkersComponent />
            </div>
          </div>
        </section>

        {/* Үнийн мэдээлэл Section */}
        <section id="price" data-textcolor="text-white" className="text-white my-20 flex flex-col items-center">
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
                <input 
                  type="number" 
                  className="bg-black text-white border rounded-lg w-full mr-2 text-center" 
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

        {/* Яагаад artlab Section */}
        <section id="why" data-textcolor = "text-black" className="text-black">
          <div className="bg-white m-3 border rounded-lg">
            <div className="text-center mt-20 mb-10">
              <h2 className="font-bold text-2xl">Яагаад <span className="text-sky-500">artlab</span> гэж?</h2>
              <p className="text-xs px-80 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure quae, fugiat non sequi amet animi libero veniam quia iste molestiae, distinctio debitis culpa eos ut voluptatem tenetur sint nostrum eum temporibus, eveniet aperiam! Quisquam.</p>
              <button className="bg-sky-500 border rounded-lg px-12 py-2 text-white text-sm">Харах</button>
            </div>
            <div className="bg-[url('/img/backgrounds/World_blue_dots.svg.png')] bg-contain bg-center bg-no-repeat h-[26rem] w-3/4 m-auto">
              <div className="flex flex-row text-center pt-20">
                <div className="basis-1/3 bg-white border rounded-lg shadow-xl pb-3 px-6 relative">
                  <div className="inline-block bg-indigo-400 rounded-md p-3 text-white text-2xl -mt-6"><MdLockOutline /></div>
                  <h3 className="text-sm font-semibold mb-4">ҮЙЛЧИЛГЭЭНД СУУРИЛСАН</h3>
                  <p className="text-xs">Харилцагчийн тусламж, үйлчилгээ болон санхүүгийн  зөвлөх үйлчилгээнд дээр төвлөрөхөөс гадна тасралтгүй  хөгжүүлэлт хийхийг зорьдог</p>
                </div>
                <div className="basis-1/3 bg-white border rounded-lg shadow-xl mx-5 pb-3 px-6">
                  <div className="inline-block bg-pink-400 rounded-md p-3 text-white text-2xl -mt-6"><FaWifi /></div>
                  <h3 className="text-sm font-semibold mb-4">ҮҮЛЭН ТЕХНОЛОГИ</h3>
                  <p className="text-xs">Дэлхийн хаанаас ч хандах боломж. Компьютерын хүчин  чадал харгалзахгүй, суурилуулалт хийгдэх шаардлагагүй</p>
                </div>
                <div className="basis-1/3 bg-white border rounded-lg shadow-xl pb-3 px-6">
                  <div className="inline-block bg-orange-400 rounded-md p-3 text-white text-2xl -mt-6"><LiaHandshake/></div>
                  <h3 className="text-sm font-semibold mb-4">УЯН ХАТАН</h3>
                  <p className="text-xs">Суурь хураамж, Лицензийн төлбөргүй.  Сургалт, зөвлөгөө үйлчилгээ болон шаардлагатай  тохиолдолд нэмэлт хөгжүүлэлт, Серверийн зардал бүгд  багтсан</p>
                </div>
              </div>
            </div>
            <div className="my-20">
              <h2 className="text-2xl font-semibold text-center">Технологи</h2>
              <p className="text-xs text-center px-80 my-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempore fugit deleniti debitis cumque amet hic, qui quibusdam nihil, impedit beatae architecto sapiente quis excepturi saepe harum incidunt ipsum ullam tempora quae officia. Exercitationem, excepturi.</p>
              <div className="flex flex-row justify-center space-x-4">
                <a href="https://apps.apple.com/us/app/artlab/id6499415731" target="_blank" className="relative h-9 w-32 block"><div className="relative h-full w-full"><Image src="/img/others/downloadAppstore.png" alt="Artlab Appstore" fill objectFit="cover" className="rounded-lg"/></div></a>
                <a href="https://play.google.com/store/apps/details?id=mn.artlab.mobileV2&hl=en_US&gl=US" target="_blank" className="relative h-9 w-32 block"><div className="relative h-full w-full"><Image src="/img/others/onGoogleplay.png" alt="Artlab Playstore" fill objectFit="cover" className="rounded-lg"/></div></a>
              </div>
              <div className="grid grid-cols-3 my-20 w-1/2 mx-auto text-base">
                <div className="col-span-2">
                  <div className="flex flex-row">
                    <h4 className="bg-sky-500 text-white mb-auto mr-4 px-4 py-2 rounded-lg">1</h4>
                    <div>
                      <h3 className="font-semibold">Artlab App татаж авах</h3>
                      <p className="text-xs">It is a long established fact that a reader will be </p>
                    </div>
                  </div>
                  <div className="flex flex-row my-10">
                    <h4 className="bg-sky-500 text-white mb-auto mr-4 px-4 py-2 rounded-lg">2</h4>
                    <div>
                      <h3 className="font-semibold">Нэр, нууц үгээр нэвтэрч орох</h3>
                      <p className="text-xs">It is a long established fact that a reader will be </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <h4 className="bg-sky-500 text-white mb-auto mr-4 px-4 py-2 rounded-lg">3</h4>
                    <div>
                      <h3 className="font-semibold">Ид шидийг мэдрэх</h3>
                      <p className="text-xs">It is a long established fact that a reader will be </p>
                    </div>
                  </div>
                </div>
                <Image src="/img/others/artlabphone.png" alt="Artlab phone" height={300} width={250} className=""/>
              </div>
            </div>
          </div>
        </section>
        
        {/* Санал хүсэлт Section */}
        <section id="contact" data-textcolor = "text-white">
          <div className="bg-[url('/img/backgrounds/footer_bg.png')] bg-cover bg-center bg-no-repeat pb-20 pt-52">
            <form className="text-xs text-white bg-black bg-opacity-75 border border-white rounded-xl w-2/3 mx-auto py-5 px-7" onSubmit={handleSubmit}>
              <textarea 
                key="textarea-1" 
                name="feedBack" 
                rows="6" 
                placeholder="Таны хүсэлт" 
                onChange={handleChange} 
                className="w-full mb-5 border rounded-lg bg-black bg-opacity-0 p-4">
              </textarea>
              <div className="w-full flex justify-between">
                <div className="w-2/3 space-x-4 flex flex-row">
                  <input 
                    key="input-1" 
                    name="viewerName" 
                    type="text" 
                    placeholder="Таны нэр" 
                    required 
                    onChange={handleChange} 
                    className="border rounded-md bg-black bg-opacity-0 px-4 py-2 w-1/2"
                  />
                  <input 
                    key="input-2" 
                    name="viewerPhone" 
                    type="number" 
                    placeholder="Утасны дугаар" 
                    required 
                    onChange={handleChange} 
                    className="border rounded-md bg-black bg-opacity-0 px-4 py-2 w-1/2"
                  />
                </div>
                <button type="submit" className="rounded-md bg-sky-500 px-4 py-2">Хүсэлт илгээх</button>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col space-y-2 mt-8">
                  <p><span className="font-bold">Үндсэн лавлах:&emsp;</span>info@artlab.mn</p>
                  <p><span className="font-bold">Утас:&emsp;</span>7505 6505</p>
                  <p><span className="font-bold">Хаяг:&emsp;</span>MN tower #1407, Chingeltei, 5th khoroo, Ulaanbaatar, Mongolia</p>
                </div>
                <div className="relative">
                  <ul className="flex space-x-4 absolute bottom-0 right-0 text-2xl">
                    <li className="border rounded-lg p-2"><a target="_blank" href="https://www.facebook.com/artlab.mn/"><FaFacebook /></a></li>
                    <li className="border rounded-lg p-2"><a target="_blank" href="https://www.instagram.com/artlab.mn/"><FaInstagram /></a></li>
                    <li className="border rounded-lg p-2"><a target="_blank" href=""><FaTelegram /></a></li>
                    <li className="border rounded-lg p-2"><a target="_blank" href=""><FaEnvelope /></a></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
