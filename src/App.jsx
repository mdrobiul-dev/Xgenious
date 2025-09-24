import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function App() {
  return (
    <>
      <section className="bg-[#E2FFF6]/20  ">
        <div className="px-28 flex justify-between items-center py-5 border-b-[1px] border-[#ECEDEF] ">
          <div className="w-[157px] h-[30px]">
            <a href="#">
              <img
                src="/images/logo.png"
                className="w-full h-full align-middle"
              />
            </a>
          </div>
          <nav>
            <ul className="flex gap-10 font-poppins font-normal text-base leading-6 cursor-pointer">
              <li>
                <div className="flex gap-1.5 items-center font-poppins font-normal text-base leading-6">
                  <a>Home</a>
                  <IoIosArrowDown className="pt-[2px]" />
                </div>
              </li>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Talents</a>
              </li>
              <li>
                <a>Subscriptions</a>
              </li>
              <li>
                <div className="flex gap-1.5 items-center font-poppins font-normal text-base leading-6">
                  <a>Pages</a>
                  <IoIosArrowDown className="pt-[2px]" />
                </div>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-3">
            <a className="font-poppins font-medium text-base leading-6 text-[#242B36] px-4.5 py-2.5 border-[1px] border-[#417D6E] rounded-full cursor-pointer">
              Community
            </a>
            <a className="font-poppins font-medium text-base leading-6 text-[#ECEDEF] px-4.5 py-2.5 bg-[#007456] rounded-full cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>
        {/* hero section */}
        <div className="w-full max-w-[1486px] flex mx-auto py-24">
          <div className="w-[60%] py-16 flex flex-col gap-8 pl-19">
            <div>
              <h1 className="text-[#242B36] font-poppins font-medium text-[64px] leading-20 pb-4">
                Connecting Ideas <br />
                with the Right Talent
              </h1>
              <p className="font-poppins font-normal text-base leading-6 text-[#3B4759]">
                We make it’s easier for talents and businesses to connect and we
                make it <br /> absolutely less charges. Hire Talents or Get
                Hired from our platform and work <br />
                independently
              </p>
            </div>
            <div className="flex gap-4 ">
              <button className="px-6 py-4 bg-[#007456] rounded-lg font-poppins font-medium text-[#FFFFFF] text-base leading-6 cursor-pointer">
                Find work
              </button>
              <button className="px-6 py-4 text-[#007456] border-2 border-[#007456] rounded-lg font-poppins font-medium text-base leading-6 cursor-pointer">
                Find talent
              </button>
            </div>
            <div className="flex items-center w-full max-w-xl">
              {/* Input */}
              <div className="relative w-full max-w-xl">
                <button className="rounded-md absolute right-1 top-1 bg-orange-500 p-3 hover:bg-orange-600 transition-colors cursor-pointer">
                  <IoSearchOutline className="text-white text-xl" />
                </button>
                <input
                  type="text"
                  placeholder="Search by role, service, skill or keywords"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 pl-5 pr-4 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="py-2 border-2 border-[#677181] rounded-sm w-full max-w-44 flex justify-center items-center">
                <a
                  href="#"
                  className="pr-1.5 font-poppins font-normal text-sm text-[#3B4759]"
                >
                  Design & Creative
                </a>
                <IoMdArrowForward className="inline text-sm" />
              </div>
              <div className="py-2 border-2 border-[#677181] rounded-sm w-full max-w-50 flex justify-center items-center">
                <a
                  href="#"
                  className="pr-1.5 font-poppins font-normal text-sm text-[#3B4759]"
                >
                  website Development
                </a>
                <IoMdArrowForward className="inline text-sm" />
              </div>
              <div className="py-2 border-2 border-[#677181] rounded-sm w-full max-w-20 flex justify-center items-center">
                <a
                  href="#"
                  className="pr-1.5 font-poppins font-normal text-sm text-[#3B4759]"
                >
                  SEO
                </a>
                <IoMdArrowForward className="inline text-sm" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="py-2 border-2 border-[#677181] rounded-sm w-full max-w-42 flex justify-center items-center">
                <a
                  href="#"
                  className="pr-1.5 font-poppins font-normal text-sm text-[#3B4759]"
                >
                  Design & Creative
                </a>
                <IoMdArrowForward className="inline text-sm" />
              </div>
              <div className="py-2 border-2 border-[#677181] rounded-sm w-full max-w-40 flex justify-center items-center">
                <a
                  href="#"
                  className="pr-1.5 font-poppins font-normal text-sm text-[#3B4759]"
                >
                  Design & Creative
                </a>
                <IoMdArrowForward className="inline text-sm" />
              </div>
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center relative">
            <div className="px-4 py-4.5 bg-white flex absolute z-20 rounded-xl gap-1 -left-10 top-[35%]">
              <div className="h-6 w-6">
                <img src="/images/fi_2.png" className="h-full w-full object-cover"/>
              </div>
              <div className="font-poppins font-medium text-lg leading-7 text-[#242B36] cursor-pointer">Complete Project</div>
            </div>
            <div className="px-4 py-4.5 bg-white flex absolute z-20 rounded-xl gap-1 -right-10 bottom-[35%]">
              <div className="h-6 w-6">
                <img src="/images/fi_1.png" className="h-full w-full object-cover"/>
              </div>
              <div className="font-poppins font-medium text-lg leading-7 text-[#242B36] cursor-pointer">Hired 41+ Talents</div>
            </div>
            <div className="absolute top-9">
              <img src="/images/herobg.png" />
            </div>
            <div className="z-10">
              <img src="/images/hero.png" />
            </div>
          </div>
        </div>
      </section>

      {/* popolar categories section  */}
      <section className="py-[120px] w-full max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-poppins font-medium text-4xl text-[#242B36] leading-11">
            Popular Categories
          </h2>
          <div className="py-2 border-2 border-[#007456] rounded-lg w-full max-w-58 flex justify-center items-center">
            <a
              href="#"
              className="pr-1.5 font-poppins font-medium text-base leading-6 text-[#007456]"
            >
              Browse all categories
            </a>
            <MdArrowOutward className="inline text-base text-[#007456]" />
          </div>
        </div>
        {/* cards */}
        <div className="flex gap-6">
          <div className="w-full max-w-[312px] p-6 shadow-[0_4px_25px_0_rgba(0,0,0,0.08)]">
            <div>
              <img src="/images/web.png" />
            </div>
            <div className="py-3">
              <h3 className="font-poppins font-medium text-lg text-[#242B36] leading-7">
                Website Development
              </h3>
              <p className="font-poppins font-normal text-sm text-[#414E62] leading-5 py-2">
                Customer experience and account management jobs.
              </p>
              <p className="font-poppins font-normal text-sm text-[#242B36] leading-5 pt-3">
                6 Jobs
              </p>
            </div>
          </div>
          {/* card-2 */}
          <div className="w-full max-w-[312px] p-6 shadow-[0_4px_25px_0_rgba(0,0,0,0.08)]">
            <div>
              <img src="/images/mob.png" />
            </div>
            <div className="py-3">
              <h3 className="font-poppins font-medium text-lg text-[#242B36] leading-7">
                Mobile App Development
              </h3>
              <p className="font-poppins font-normal text-sm text-[#414E62] leading-5 py-2">
                Customer experience and account management jobs.
              </p>
              <p className="font-poppins font-normal text-sm text-[#242B36] leading-5 pt-3">
                18 Jobs
              </p>
            </div>
          </div>
          {/* card-3 */}
          <div className="w-full max-w-[312px] p-6 shadow-[0_4px_25px_0_rgba(0,0,0,0.08)]">
            <div>
              <img src="/images/digi.png" />
            </div>
            <div className="py-3">
              <h3 className="font-poppins font-medium text-lg text-[#242B36] leading-7">
                Digital Marketing
              </h3>
              <p className="font-poppins font-normal text-sm text-[#414E62] leading-5 py-2">
                Customer experience and account management jobs.
              </p>
              <p className="font-poppins font-normal text-sm text-[#242B36] leading-5 pt-3">
                22 Jobs
              </p>
            </div>
          </div>
          {/* card- */}
          <div className="w-full max-w-[312px] p-6 shadow-[0_4px_25px_0_rgba(0,0,0,0.08)]">
            <div>
              <img src="/images/edi.png" />
            </div>
            <div className="py-3">
              <h3 className="font-poppins font-medium text-lg text-[#242B36] leading-7">
                Video Editing
              </h3>
              <p className="font-poppins font-normal text-sm text-[#414E62] leading-5 py-2">
                Customer experience and account management jobs.
              </p>
              <p className="font-poppins font-normal text-sm text-[#242B36] leading-5 pt-3">
                8 Jobs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* popolar servicess section  */}
      <section className="bg-[#007456]/5 py-[120px]">
        <div className="w-full max-w-[1320px] mx-auto">
          <div className="flex justify-between pb-10">
            <h3 className="font-poppins font-medium text-4xl text-[#242B36] leading-11">
              Popular Services
            </h3>
            <div className="flex gap-3">
              <div className="px-4.5 py-2.5 bg-white border-2 rounded-lg border-[#417D6E]/20">
                <a
                  href="#"
                  className="font-poppins font-medium text-base leading-6 text-[#007456] "
                >
                  Design & Creative
                </a>
              </div>
              <div className="px-4.5 py-2.5 border-2 rounded-lg border-[#417D6E]/20">
                <a
                  href="#"
                  className="font-poppins font-medium text-base leading-6 text-[#242B36]"
                >
                  Dev & IT
                </a>
              </div>
              <div className="px-4.5 py-2.5 border-2 rounded-lg border-[#417D6E]/20">
                <a
                  href="#"
                  className="font-poppins font-medium text-base leading-6 text-[#242B36]"
                >
                  Digital Marketing
                </a>
              </div>
            </div>
          </div>
          {/* popolar servicess cards */}
          <div>
            {/* first row */}
            <div className="flex gap-6">
              {/* card 1 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl">
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_img.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      {" "}
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl">
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_2.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      {" "}
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl">
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                   <div className=" cursor-pointer absolute h-10 w-10 rounded-full bg-white shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] left-5 top-[45%] flex items-center justify-center">
                    <IoIosArrowBack className="text-2xl"/>
                </div>
                <div className=" cursor-pointer absolute h-10 w-10 rounded-full bg-white shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] right-5 top-[45%] flex items-center justify-center">
                    <IoIosArrowForward className="text-2xl"/>
                </div>
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_3.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* secound row */}
            <div className="flex gap-6 py-8">
              {/* card 1 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl">
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_4.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      {" "}
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl">
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_5.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      {" "}
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl">
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_6.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      {" "}
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        {/* button */}
        <div className="w-fit flex items-center bg-[#007456] gap-1 border-2 border-[#007456] rounded-lg py-2.5 px-4.5 mx-auto">
              <a
                href="#"
                className="font-poppins font-medium text-sm leading-5 text-white "
              >
                All Services
              </a>
              <div className="pt-[1px]">
                <MdArrowOutward className="text-lg text-white" />
              </div>
            </div>
        </div>
      </section>

      {/* latest job */}
      <section className="py-[120px]">
        <div className="w-full max-w-[1320px] mx-auto">
          <div className="pb-10">
            <h2 className="font-poppins font-medium text-4xl leading-11 text-[#242B36]">
              Latest Job
            </h2>
          </div>
          {/* cards */}
          <div className="flex gap-6">
            {/* card 1 */}
            <div className="w-full px-6 py-8 max-w-[424px] border-2 rounded-xl border-[#1B2129]/10">
              <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                Logo Design for Business Loan Brokerage
              </h3>
              <div className="flex items-center gap-2.5 py-2">
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Jun 5, 2025
                </p>
                <div className="h-1.5 w-1.5 rounded bg-[#FA8C00]"></div>
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  MidLevel
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                  $260
                </p>
                <div className="py-1.5 px-3.5 rounded-full bg-[#ECEDEF] font-poppins font-medium text-sm leading-6 text-[#3B4759]">
                  Fixed
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Posted 3 hours ago
                </p>
              </div>
              <p className="font-poppins font-normal text-base leading-6 text-[#3B4759] py-4">
                We are seeking a talent graphic designer to create a
                professional logo for Our....
              </p>
              <div className="flex gap-2">
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Business Card Design
                </div>
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Graphic Design
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Graphic Design
                </div>
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Adobe Illustrator
                </div>
              </div>
              <div className="flex items-center gap-1 pt-4">
                <a
                  href="#"
                  className="font-poppins font-medium text-sm leading-5 text-[#007456]"
                >
                  View More
                </a>
                <div className="pt-[1px]">
                  <IoMdArrowForward className="text-lg text-[#007456]" />
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="w-full px-6 py-8 max-w-[424px] border-2 rounded-xl border-[#1B2129]/10">
              <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                Logo Design for Business Loan Brokerage
              </h3>
              <div className="flex items-center gap-2.5 py-2">
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Jun 5, 2025
                </p>
                <div className="h-1.5 w-1.5 rounded bg-[#FA8C00]"></div>
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  MidLevel
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                  $260
                </p>
                <div className="py-1.5 px-3.5 rounded-full bg-[#ECEDEF] font-poppins font-medium text-sm leading-6 text-[#3B4759]">
                  Fixed
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Posted 3 hours ago
                </p>
              </div>
              <p className="font-poppins font-normal text-base leading-6 text-[#3B4759] py-4">
                We are seeking a talent graphic designer to create a
                professional logo for Our....
              </p>
              <div className="flex gap-2">
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Business Card Design
                </div>
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Graphic Design
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Graphic Design
                </div>
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Adobe Illustrator
                </div>
              </div>
              <div className="flex items-center gap-1 pt-4">
                <a
                  href="#"
                  className="font-poppins font-medium text-sm leading-5 text-[#007456]"
                >
                  View More
                </a>
                <div className="pt-[1px]">
                  <IoMdArrowForward className="text-lg text-[#007456]" />
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="w-full px-6 py-8 max-w-[424px] border-2 rounded-xl border-[#1B2129]/10">
              <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                Logo Design for Business Loan Brokerage
              </h3>
              <div className="flex items-center gap-2.5 py-2">
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Jun 5, 2025
                </p>
                <div className="h-1.5 w-1.5 rounded bg-[#FA8C00]"></div>
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  MidLevel
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                  $260
                </p>
                <div className="py-1.5 px-3.5 rounded-full bg-[#ECEDEF] font-poppins font-medium text-sm leading-6 text-[#3B4759]">
                  Fixed
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Posted 3 hours ago
                </p>
              </div>
              <p className="font-poppins font-normal text-base leading-6 text-[#3B4759] py-4">
                We are seeking a talent graphic designer to create a
                professional logo for Our....
              </p>
              <div className="flex gap-2">
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Business Card Design
                </div>
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Graphic Design
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Graphic Design
                </div>
                <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">
                  Adobe Illustrator
                </div>
              </div>
              <div className="flex items-center gap-1 pt-4">
                <a
                  href="#"
                  className="font-poppins font-medium text-sm leading-5 text-[#007456]"
                >
                  View More
                </a>
                <div className="pt-[1px]">
                  <IoMdArrowForward className="text-lg text-[#007456]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hire the best */}
      <section className="mb-20 relative z-0">
        <div className="bg-[#F2F8F7] z-10 w-[70%] h-[90%] absolute top-0"></div>
        <div className="relative  z-50 w-full flex gap-30 max-w-[1320px] mx-auto py-37.5">
          <div className="w-1/2 py-16">
            <h2 className="font-poppins font-medium text-4xl leading-9 text-[#242B36] pb-11">
              All You Need to Hire The Best
            </h2>
            <div className="flex gap-3">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/images/hb_icon.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-poppins font-medium text-lg leading-6.5">
                  Verified Professionals
                </h4>
                <p className="font-poppins font-normal text-base leading-6 text-[#3B4759]">
                  Work with skilled freelancers who pass quality checks and
                  portfolio reviews.
                </p>
              </div>
            </div>
            <div className="flex gap-3 py-8">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/images/hb_2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-poppins font-medium text-lg leading-6.5">
                  Pay Only for Results
                </h4>
                <p className="font-poppins font-normal text-base leading-6 text-[#3B4759]">
                  Release payment once your project in successfully completed..
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/images/hb_3.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-poppins font-medium text-lg leading-6.5">
                  Secure & Transparent
                </h4>
                <p className="font-poppins font-normal text-base leading-6 text-[#3B4759]">
                  Built-in tools for communication, file sharing, and sage
                  payments.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="/images/hire.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* this div hide upper dive */}
      </section>

      {/* about us */}
      <section className="relative z-0 py-30">

        {/* <div className="absolute -z-20 top-[35%] w-fit h-fit pointer-events-none">
          <img
            src="/images/whatbg.png"
            className="w-full h-full object-cover"
          />
        </div> */}
        {/* this dive should be in top  */}
        <div className="relative z-50 w-full max-w-[1320px] mx-auto">
          <div>
            <h2 className="font-poppins font-medium text-4xl leading-11 text-[#242B36] pb-15 text-center ">
              What Freelancer are Thinking <br /> About Us
            </h2>
          </div>
          {/* cards */}
          <div>
            <div className="flex gap-6">
              {/* single card */}
              <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-[64px] w-[64px] mx-auto">
                    <img
                      src="/images/freelance-profile.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">
                    Esther Howard
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                    Professional Developer
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">
                  Joining this marketplace changed my career. I <br /> can
                  showcase my skills, connect with real <br /> clients, and get
                  paid on time. It feels amazing to ,<br /> grow my freelance
                  journey here.
                </p>
                <div className="h-10 w-10 mx-auto">
                  <img
                    src="/images/cmt_icon.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* single card */}
              <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-[64px] w-[64px] mx-auto">
                    <img
                      src="/images/profile_2.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">
                 Jane Cooper
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                    Product Designer
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">
                  Joining this marketplace changed my career. I <br /> can
                  showcase my skills, connect with real <br /> clients, and get
                  paid on time. It feels amazing to ,<br /> grow my freelance
                  journey here.
                </p>
                <div className="h-10 w-10 mx-auto">
                  <img
                    src="/images/cmt_icon.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* single card */}
              <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-[64px] w-[64px] mx-auto">
                    <img
                      src="/images/profile_3.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">
                    Wade Warren
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                  AI Services
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">
                  Joining this marketplace changed my career. I <br /> can
                  showcase my skills, connect with real <br /> clients, and get
                  paid on time. It feels amazing to ,<br /> grow my freelance
                  journey here.
                </p>
                <div className="h-10 w-10 mx-auto">
                  <img
                    src="/images/cmt_icon.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-7.5">
              {/* single card */}
              <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-[64px] w-[64px] mx-auto">
                    <img
                      src="/images/profile_4.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">
                    Jacob Jones
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                  Programmer
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">
                  Joining this marketplace changed my career. I <br /> can
                  showcase my skills, connect with real <br /> clients, and get
                  paid on time. It feels amazing to ,<br /> grow my freelance
                  journey here.
                </p>
                <div className="h-10 w-10 mx-auto">
                  <img
                    src="/images/cmt_icon.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* single card */}
              <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-[64px] w-[64px] mx-auto">
                    <img
                      src="/images/profile_5.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">
                    Robert Fox
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                     Customer support
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">
                  Joining this marketplace changed my career. I <br /> can
                  showcase my skills, connect with real <br /> clients, and get
                  paid on time. It feels amazing to ,<br /> grow my freelance
                  journey here.
                </p>
                <div className="h-10 w-10 mx-auto">
                  <img
                    src="/images/cmt_icon.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* single card */}
              <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-[64px] w-[64px] mx-auto">
                    <img
                      src="/images/profile.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">
                    Esther Howard
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                    Professional Developer
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">
                  Joining this marketplace changed my career. I <br /> can
                  showcase my skills, connect with real <br /> clients, and get
                  paid on time. It feels amazing to ,<br /> grow my freelance
                  journey here.
                </p>
                <div className="h-10 w-10 mx-auto">
                  <img
                    src="/images/cmt_icon.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* download card */}
      <section className="py-30">
        <div className="w-full max-w-[1320px] mx-auto flex gap-6">
           <div className="w-1/2 h-fit cursor-pointer">
               <img src="/images/download_1.png" className="h-full w-full object-cover"/>
           </div>
           <div className="w-1/2 h-fit cursor-pointer">
               <img src="/images/download_2.png" className="h-full w-full object-cover"/>
           </div>
        </div>
      </section>

      {/* trending servicess */}
      <section className="py-30 bg-[#F2F8F7]">
        <div className="w-full max-w-[1320px] mx-auto">
          <h2 className="font-poppins font-medium text-4xl leading-11 text-[#242B36]">
            Trending Services
          </h2>
          <div className="my-10">
            <div className="flex gap-6">
              {/* card 1 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl relative">
                <div className="cursor-pointer absolute h-14 w-14 rounded-full bg-white shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] -left-7 top-[45%] flex items-center justify-center">
                    <IoArrowBackOutline className="text-2xl"/>
                </div>
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_img.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl">
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_5.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      {" "}
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="w-full max-w-[424px] bg-white rounded-xl relative">
                 <div className=" cursor-pointer absolute h-14 w-14 rounded-full bg-[#FA8C00] shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] -right-7 top-[45%] flex items-center justify-center">
                    <IoMdArrowForward className="text-2xl text-white"/>
                </div>
                <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                  <img
                    src="/images/service_logo.png"
                    className="absolute right-6.5 top-6"
                  />
                  <img
                    src="/images/service_6.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <p className="py-3 font-poppins font-normal text-base text-[#414E62]">
                    Design & Creative
                  </p>
                  <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    I will do professional figma design for website UI UX and
                    mobile app desi....
                  </h4>
                  <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                    <div className="h-full w-full max-w-5 max-h-5">
                      <img
                        src="/images/star.png"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">
                      4.0
                    </p>
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                      (3 Reviews)
                    </p>
                  </div>
                  <div className="pt-3 pb-4 flex justify-between">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                        <img
                          src="/images/profile.png"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                        Robert Bross
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                        Starting at:
                      </p>
                      <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]">
                        {" "}
                        $29
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* choose your plan */}
      <section className="py-30">
        <div className="w-full max-w-[1320px] mx-auto">
          <h2 className=" text-center font-poppins font-medium text-4xl leading-11 text-[#242B36] pb-15">
            Choose Your Plan
          </h2>
          <div className="flex gap-6">
            {/* card 1 */}
            <div className="p-6 border-2 border-[#C4C8CE] rounded-2xl">
              <div>
                <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                  Free Plan
                </h3>
                <div className="flex pt-3 items-center">
                  <span className="font-poppins font-medium text-[28px] leading-9 text-[#414E62]">
                    $
                  </span>
                  <span className="font-poppins font-semibold text-4xl leading-11 text-[#242B36]">
                    0
                  </span>
                  <span className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                    /month
                  </span>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62] py-4">
                  For starting out teams building apps gor many <br /> public &
                  privet users
                </p>
                <button className="flex items-center justify-center text-white bg-[#007456] px-[118px] py-2.5 rounded-xl">
                  Start Free Trial
                  <div className="pt-1">
                    <IoMdArrowForward className="text-white text-xl" />
                  </div>
                </button>
                <div>
                  <h4 className="font-poppins font-medium text-base leading-6 text-[#242B36] py-6">
                    Marketplace Plan include:
                  </h4>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Get while register
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Must register as a freelancer
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        One time get
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Use for job proposal
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Totally Free
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Get only once
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        20 connects free for job
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="p-6 border-2 border-[#C4C8CE] rounded-2xl">
              <div>
                <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                  Free Plan
                </h3>
                <div className="flex pt-3 items-center">
                  <span className="font-poppins font-medium text-[28px] leading-9 text-[#414E62]">
                    $
                  </span>
                  <span className="font-poppins font-semibold text-4xl leading-11 text-[#242B36]">
                    49
                  </span>
                  <span className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                    /month
                  </span>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62] py-4">
                  For starting out teams building apps gor many <br /> public &
                  privet users
                </p>
                <button className="flex items-center justify-center text-white bg-[#007456] px-[118px] py-2.5 rounded-xl">
                  Start Free Trial
                  <div className="pt-1">
                    <IoMdArrowForward className="text-white text-xl" />
                  </div>
                </button>
                <div>
                  <h4 className="font-poppins font-medium text-base leading-6 text-[#242B36] py-6">
                    Marketplace Plan include:
                  </h4>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Get while register
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Must register as a freelancer
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        One time get
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Use for job proposal
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Totally Free
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Get only once
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        20 connects free for job
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="p-6 border-2 border-[#C4C8CE] rounded-2xl">
              <div>
                <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">
                  Free Plan
                </h3>
                <div className="flex pt-3 items-center">
                  <span className="font-poppins font-medium text-[28px] leading-9 text-[#414E62]">
                    $
                  </span>
                  <span className="font-poppins font-semibold text-4xl leading-11 text-[#242B36]">
                    126
                  </span>
                  <span className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                    /month
                  </span>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62] py-4">
                  For starting out teams building apps gor many <br /> public &
                  privet users
                </p>
                <button className="flex items-center justify-center text-white bg-[#007456] px-[118px] py-2.5 rounded-xl">
                  Start Free Trial
                  <div className="pt-1">
                    <IoMdArrowForward className="text-white text-xl" />
                  </div>
                </button>
                <div>
                  <h4 className="font-poppins font-medium text-base leading-6 text-[#242B36] py-6">
                    Marketplace Plan include:
                  </h4>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Get while register
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Must register as a freelancer
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        One time get
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Use for job proposal
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Totally Free
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        Get only once
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-2 items-center">
                        <div className="h-5 w-5">
                          <img
                            src="/images/slect_logo.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        20 connects free for job
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* brows service by categories */}
      <section className="py-[120px]  bg-[#F2F8F7]">
        <div className=" w-full max-w-[1320px] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-poppins font-medium text-4xl text-[#242B36] leading-11">
              Browse Service by Categories
            </h2>
            <div className="py-2.5 border-2  border-[#007456] rounded-lg w-full max-w-50 flex justify-center items-center">
              <a
                href="#"
                className="pr-1.5 font-poppins font-medium text-base leading-6 text-[#007456]"
              >
                View all Services
              </a>
              <MdArrowOutward className="inline text-xl text-[#007456]" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="h-full w-full max-w-78 max-h-90 bg-[url('/images/service_categories.png')] object-cover  align-middle relative">
             <div className="cursor-pointer absolute h-14 w-14 rounded-full bg-white shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] -left-7 top-[45%] flex items-center justify-center">
                    <IoArrowBackOutline className="text-2xl"/>
                </div>
              <p className="px-6 pt-6 pb-2.5 font-poppins font-normal text-base leading-7 text-[#FFFFFF]">
                8 Services
              </p>
              <h4 className="px-6 font-poppins font-medium text-xl leading-7 text-[#FFFFFF] pb-75">
                Web Development
              </h4>
            </div>
            <div className="h-full w-full max-w-78 max-h-90 bg-[url('/images/service_categories_2.png')] object-cover overflow-hidden align-middle">
              <p className="px-6 pt-6 pb-2.5 font-poppins font-normal text-base leading-7 text-[#FFFFFF]">
                12 Services
              </p>
              <h4 className="px-6 font-poppins font-medium text-xl leading-7 text-[#FFFFFF] pb-75">
                Content Writer
              </h4>
            </div>
            <div className="h-full w-full max-w-78 max-h-90 bg-[url('/images/service_categories_3.png')] object-cover overflow-hidden align-middle">
              <p className="px-6 pt-6 pb-2.5 font-poppins font-normal text-base leading-7 text-[#FFFFFF]">
                25 Services
              </p>
              <h4 className="px-6 font-poppins font-medium text-xl leading-7 text-[#FFFFFF] pb-75">
                Design & Creative
              </h4>
            </div>
            <div className="cursor-pointer h-full w-full max-w-78 max-h-90 bg-[url('/images/service_categories_4.png')] object-cover relative align-middle">
              <div className=" absolute h-14 w-14 rounded-full bg-[#FA8C00] shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] -right-7 top-[45%] flex items-center justify-center">
                    <IoMdArrowForward className="text-2xl text-white"/>
                </div>
              <p className="px-6 pt-6 pb-2.5 font-poppins font-normal text-base leading-7 text-[#FFFFFF]">
                9 Services
              </p>
              <h4 className="px-6 font-poppins font-medium text-xl leading-7 text-[#FFFFFF] pb-75">
                SEO Expert
              </h4>
            </div>
          </div>
        </div>
        {/* cards */}
      </section>

      {/* top rated freelancer */}
      <section className="py-[120px] w-full max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-poppins font-medium text-4xl text-[#242B36] leading-11">
            Top Rated Freelancers
          </h2>
          <div className="py-2 border-2 border-[#007456] rounded-lg w-full max-w-36 flex justify-center items-center">
            <a
              href="#"
              className="pr-1.5 font-poppins font-medium text-base leading-6 text-[#007456]"
            >
              Browse all
            </a>
            <MdArrowOutward className="inline text-xl text-[#007456]" />
          </div>
        </div>
        {/* cards */}
        <div className="flex  gap-6">
          <div className="p-7 w-full max-w-[424px]  border-2 border-[#C4C8CE] rounded-2xl">
            <div className="flex gap-3">
              <div className="h-full w-full max-h-20 max-w-20">
                <img
                  src="/images/freelance_1.png"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex">
                  <p className="pr-2.5 border-r-2 border-r-[#A8AEB7] mr-4 font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    Guy Hawkins
                  </p>
                  <div className="py-1 px-1.5 bg-[#007456]/15 text-[#007456] font-poppins font-medium text-sm leading-5 rounded-4xl">
                    Vetted Pro
                  </div>
                </div>
                <div className="flex items-center pb-1.5 gap-1">
                  <div className="h-5 w-5">
                    <img
                      src="/images/star.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-poppins font-medium text-sm leading-5 text-[#242B36]">
                    4.0
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                    (212)
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] pt-1.5">
                  Graphic & UI UX Designer
                </p>
              </div>
            </div>
            <div className="py-3 mt-3 flex gap-2.5">
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Figma
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Mobile App
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Branding
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Sales Copy
              </div>
            </div>
            <div className=" flex gap-2.5 items-center">
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Adobe Photoshop
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Flyer template
              </div>
              <p className="font-poppins font-medium text-sm leading-5 text-[#242B36]">
                +1
              </p>
            </div>
            <div className="flex py-6 gap-19">
              <div className="flex flex-col">
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  Location:
                </p>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Nicosia, Cyprus
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  Rate::
                </p>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  $25-&30 / hr
                </p>
              </div>
            </div>
            <div className="w-fit flex items-center gap-1 border-2 border-[#007456] rounded-lg py-2.5 px-4.5">
              <a
                href="#"
                className="font-poppins font-medium text-sm leading-5 text-[#007456]"
              >
                View Profile
              </a>
              <div className="pt-[1px]">
                <MdArrowOutward className="text-lg text-[#007456]" />
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-7 w-full max-w-[424px]  border-2 border-[#C4C8CE] rounded-2xl">
            <div className="flex gap-3">
              <div className="h-full w-full max-h-20 max-w-20">
                <img
                  src="/images/freelance-profile.png"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex">
                  <p className="pr-2.5 border-r-2 border-r-[#A8AEB7] mr-4 font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    Guy Hawkins
                  </p>
                  <div className="py-1 px-1.5 bg-[#007456]/15 text-[#007456] font-poppins font-medium text-sm leading-5 rounded-4xl">
                    Vetted Pro
                  </div>
                </div>
                <div className="flex items-center pb-1.5 gap-1">
                  <div className="h-5 w-5">
                    <img
                      src="/images/star.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-poppins font-medium text-sm leading-5 text-[#242B36]">
                    4.0
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                    (212)
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] pt-1.5">
                  Graphic & UI UX Designer
                </p>
              </div>
            </div>
            <div className="py-3 mt-3 flex gap-2.5">
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Figma
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Mobile App
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Branding
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Sales Copy
              </div>
            </div>
            <div className=" flex gap-2.5 items-center">
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Adobe Photoshop
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Flyer template
              </div>
              <p className="font-poppins font-medium text-sm leading-5 text-[#242B36]">
                +1
              </p>
            </div>
            <div className="flex py-6 gap-19">
              <div className="flex flex-col">
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  Location:
                </p>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Nicosia, Cyprus
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  Rate::
                </p>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  $25-&30 / hr
                </p>
              </div>
            </div>
            <div className="w-fit flex items-center bg-[#007456] gap-1 border-2 border-[#007456] rounded-lg py-2.5 px-4.5">
              <a
                href="#"
                className="font-poppins font-medium text-sm leading-5 text-white "
              >
                View Profile
              </a>
              <div className="pt-[1px]">
                <MdArrowOutward className="text-lg text-white" />
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-7 w-full max-w-[424px]  border-2 border-[#C4C8CE] rounded-2xl">
            <div className="flex gap-3">
              <div className="h-full w-full max-h-20 max-w-20">
                <img
                  src="/images/freelance_3.png"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex">
                  <p className="pr-2.5 border-r-2 border-r-[#A8AEB7] mr-4 font-poppins font-medium text-xl leading-7 text-[#242B36]">
                    Guy Hawkins
                  </p>
                  <div className="py-1 px-1.5 bg-[#007456]/15 text-[#007456] font-poppins font-medium text-sm leading-5 rounded-4xl">
                    Vetted Pro
                  </div>
                </div>
                <div className="flex items-center pb-1.5 gap-1">
                  <div className="h-5 w-5">
                    <img
                      src="/images/star.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-poppins font-medium text-sm leading-5 text-[#242B36]">
                    4.0
                  </p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">
                    (212)
                  </p>
                </div>
                <p className="font-poppins font-normal text-base leading-6 text-[#242B36] pt-1.5">
                  Graphic & UI UX Designer
                </p>
              </div>
            </div>
            <div className="py-3 mt-3 flex gap-2.5">
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Figma
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Mobile App
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Branding
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Sales Copy
              </div>
            </div>
            <div className=" flex gap-2.5 items-center">
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Adobe Photoshop
              </div>
              <div className="py-1.5 px-2 bg-[#ECEDEF] font-poppins font-normal text-sm leading-5 text-[#3B4759] w-fit rounded-lg">
                Flyer template
              </div>
              <p className="font-poppins font-medium text-sm leading-5 text-[#242B36]">
                +1
              </p>
            </div>
            <div className="flex py-6 gap-19">
              <div className="flex flex-col">
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  Location:
                </p>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  Nicosia, Cyprus
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">
                  Rate::
                </p>
                <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">
                  $25-&30 / hr
                </p>
              </div>
            </div>
            <div className="w-fit flex items-center gap-1 border-2 border-[#007456] rounded-lg py-2.5 px-4.5">
              <a
                href="#"
                className="font-poppins font-medium text-sm leading-5 text-[#007456]"
              >
                View Profile
              </a>
              <div className="pt-[1px]">
                <MdArrowOutward className="text-lg text-[#007456]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started with Xilancer */}
      <section className="mb-30">
        <div className="w-full max-w-[1320px] mx-auto bg-gradient-to-r from-[#007456]/10 to-[#FA8C00]/10 rounded-xl">
          <div className="mx-auto py-35">
            <h2 className="text-center font-poppins font-semibold text-4xl leading-11 text-[#242B36]">
              Get Started with Xilancer
            </h2>
            <p className="text-center font-poppins font-normal text-base leading-6 text-[#414E62] pt-6 pb-8">
              Connect with top freelancers or showcase your skills to clients
              worldwide. Start your journey today and turn ideas into successful
              projects.
            </p>
            <div className="w-fit flex items-center bg-[#FA8C00] gap-1  rounded-lg py-2.5 px-4.5 mx-auto">
              <a
                href="#"
                className="font-poppins font-medium text-sm leading-5 text-white "
              >
                Join Free
              </a>
              <div className="pt-[1px]">
                <MdArrowOutward className="text-lg text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer className="bg-[url('/images/Footer.png')] object-cover overflow-hidden align-middle ">
        <div className="bg-[#000000]/96">
          <div className=" w-full max-w-[1320px] mx-auto ">
            <div className="pt-30 flex gap-38 border-b-2 border-b-[#414E62] pb-31.5 cursor-pointer">
              {/* about */}
              <div>
                <h2 className=" text-white pb-8 font-poppins font-medium text-2xl leading-8 ">
                  About{" "}
                </h2>
                <ul className="flex flex-col gap-4 w-fit text-[#C4C8CE] pb-8 font-poppins font-normal text-lg leading-7">
                  <li>About US</li>
                  <li>Become Seller</li>
                  <li>Find Job</li>
                  <li>Pricing</li>
                  <li>Service</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              {/* categories */}
              <div>
                <h2 className=" text-white pb-8 font-poppins font-medium text-2xl leading-8 ">
                  Categories{" "}
                </h2>
                <ul className="flex flex-col gap-4 w-fit text-[#C4C8CE] pb-8 font-poppins font-normal text-lg leading-7 ">
                  <li>Design & Creative</li>
                  <li>Programming</li>
                  <li>Data</li>
                  <li>Development & IT</li>
                  <li>Writing & Translation</li>
                  <li>Finance & Accounting</li>
                  <li>Digital Marketing</li>
                  <li>Business</li>
                  <li>Photography</li>
                </ul>
              </div>
              {/* support */}
              <div>
                <h2 className=" text-white pb-8 font-poppins font-medium text-2xl leading-8">
                  Support{" "}
                </h2>
                <ul className="flex flex-col gap-4 w-fit text-[#C4C8CE] pb-8 font-poppins font-normal text-lg leading-7">
                  <li>Privacy Policy</li>
                  <li>Terms & condition</li>
                  <li>Help & Support</li>
                  <li>Contact Us</li>
                  <li>Documentation</li>
                </ul>
              </div>

              {/* subscrib */}
              <div>
                <h2 className=" text-white pb-8 font-poppins font-medium text-2xl leading-8">
                  Support{" "}
                </h2>
                <p className="font-poppins font-normal text-base leading-6 text-white pb-4">
                  Receive Xilancer news, updates,exclusive <br /> discounts and
                  early access.{" "}
                </p>
                <div className="relative w-full max-w-xl ">
                  <button className="rounded-md absolute right-1 top-1 bg-white p-3 hover:bg-white-600 transition-colors cursor-pointer">
                    <FiSend className="text-black text-xl" />
                  </button>
                  <input
                    type="text"
                    placeholder="your email address"
                    className="w-full rounded-md border bg-[#242B36] py-3 pl-5 pr-4 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* footer  */}
            <div className="flex justify-between py-5 mt-3 pb-11.5">
              <div className="h-fit w-fit">
                <img
                  src="/images/xilancer_logo.png"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-white font-poppins font-normal text-base leading-4">© 2025 All right reserved by xgenious</p>
              <div className="flex gap-3">
                <div className="h-6 w-6 p-1 bg-white rounded-sm">
                  <a href="#">
                    <img
                      src="/images/facebook.png"
                      className="h-full w-full object-cover"
                    />
                  </a>
                </div>
                <div className="h-6 w-6 p-1 bg-white rounded-sm">
                  <a href="#">
                    <img
                      src="/images/dribbble.png"
                      className="h-full w-full object-cover"
                    />
                  </a>
                </div>
                <div className="h-6 w-6 p-1 bg-white rounded-sm">
                  <a href="#">
                    <img
                      src="/images/twitter.png"
                      className="h-full w-full object-cover"
                    />
                  </a>
                </div>
                <div className="h-6 w-6 p-1 bg-white rounded-sm">
                  <a href="#">
                    <img
                      src="/images/linkedin.png"
                      className="h-full w-full object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
