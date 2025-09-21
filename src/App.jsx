import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
function App() {
  return (
    <>
      <section className="bg-[#E2FFF6]/20 ">
        <div className="px-28 flex justify-between items-center py-5 border-b-[1px] border-[#ECEDEF]">
          <div className="w-[157px] h-[30px]">
            <a href="#">
              <img
                src="/images/logo.png"
                className="w-full h-full align-middle"
              />
            </a>
          </div>
          <nav>
            <ul className="flex gap-10 font-poppins font-normal text-base leading-6">
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
            <div className="absolute top-7">
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
          <h3 className="font-poppins font-medium text-4xl text-[#242B36] leading-11">Popular Services</h3>
          <div className="flex gap-3">
            <div className="px-4.5 py-2.5 bg-white border-2 rounded-lg border-[#417D6E]/20">
              <a href="#" className="font-poppins font-medium text-base leading-6 text-[#007456] ">Design & Creative</a>
            </div>
            <div className="px-4.5 py-2.5 border-2 rounded-lg border-[#417D6E]/20">
              <a href="#" className="font-poppins font-medium text-base leading-6 text-[#242B36]">Dev & IT</a>
            </div>
            <div className="px-4.5 py-2.5 border-2 rounded-lg border-[#417D6E]/20">
              <a href="#" className="font-poppins font-medium text-base leading-6 text-[#242B36]">Digital Marketing</a>
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
                <img src="/images/service_logo.png" className="absolute right-6.5 top-6"/>
                <img src="/images/service_img.png" className="h-full w-full object-cover"/>
              </div>
              <div className="px-4">
                <p className="py-3 font-poppins font-normal text-base text-[#414E62]">Design & Creative</p>
                <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">I will do professional figma design for website  UI UX and mobile app desi....</h4>
                <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                 <div className="h-full w-full max-w-5 max-h-5"> <img src="/images/star.png" className="h-full w-full object-cover" /></div>
                  <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">4.0</p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">(3 Reviews)</p>
                </div>
                <div className="pt-3 pb-4 flex justify-between">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                      <img src="/images/profile.png" className="h-full w-full object-cover" />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">Robert Bross</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Starting at:</p>
                    <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]"> $29</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
             <div className="w-full max-w-[424px] bg-white rounded-xl">
              <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                <img src="/images/service_logo.png" className="absolute right-6.5 top-6"/>
                <img src="/images/service_img.png" className="h-full w-full object-cover"/>
              </div>
              <div className="px-4">
                <p className="py-3 font-poppins font-normal text-base text-[#414E62]">Design & Creative</p>
                <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">I will do professional figma design for website  UI UX and mobile app desi....</h4>
                <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                 <div className="h-full w-full max-w-5 max-h-5"> <img src="/images/star.png" className="h-full w-full object-cover" /></div>
                  <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">4.0</p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">(3 Reviews)</p>
                </div>
                <div className="pt-3 pb-4 flex justify-between">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                      <img src="/images/profile.png" className="h-full w-full object-cover" />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">Robert Bross</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Starting at:</p>
                    <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]"> $29</p>
                  </div>
                </div>
              </div>
            </div>
           {/* card 3 */}
            <div className="w-full max-w-[424px] bg-white rounded-xl">
              <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                <img src="/images/service_logo.png" className="absolute right-6.5 top-6"/>
                <img src="/images/service_img.png" className="h-full w-full object-cover"/>
              </div>
              <div className="px-4">
                <p className="py-3 font-poppins font-normal text-base text-[#414E62]">Design & Creative</p>
                <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">I will do professional figma design for website  UI UX and mobile app desi....</h4>
                <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                 <div className="h-full w-full max-w-5 max-h-5"> <img src="/images/star.png" className="h-full w-full object-cover" /></div>
                  <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">4.0</p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">(3 Reviews)</p>
                </div>
                <div className="pt-3 pb-4 flex justify-between">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                      <img src="/images/profile.png" className="h-full w-full object-cover" />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">Robert Bross</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Starting at:</p>
                    <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]"> $29</p>
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
                <img src="/images/service_logo.png" className="absolute right-6.5 top-6"/>
                <img src="/images/service_img.png" className="h-full w-full object-cover"/>
              </div>
              <div className="px-4">
                <p className="py-3 font-poppins font-normal text-base text-[#414E62]">Design & Creative</p>
                <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">I will do professional figma design for website  UI UX and mobile app desi....</h4>
                <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                 <div className="h-full w-full max-w-5 max-h-5"> <img src="/images/star.png" className="h-full w-full object-cover" /></div>
                  <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">4.0</p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">(3 Reviews)</p>
                </div>
                <div className="pt-3 pb-4 flex justify-between">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                      <img src="/images/profile.png" className="h-full w-full object-cover" />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">Robert Bross</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Starting at:</p>
                    <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]"> $29</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
             <div className="w-full max-w-[424px] bg-white rounded-xl">
              <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                <img src="/images/service_logo.png" className="absolute right-6.5 top-6"/>
                <img src="/images/service_img.png" className="h-full w-full object-cover"/>
              </div>
              <div className="px-4">
                <p className="py-3 font-poppins font-normal text-base text-[#414E62]">Design & Creative</p>
                <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">I will do professional figma design for website  UI UX and mobile app desi....</h4>
                <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                 <div className="h-full w-full max-w-5 max-h-5"> <img src="/images/star.png" className="h-full w-full object-cover" /></div>
                  <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">4.0</p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">(3 Reviews)</p>
                </div>
                <div className="pt-3 pb-4 flex justify-between">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                      <img src="/images/profile.png" className="h-full w-full object-cover" />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">Robert Bross</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Starting at:</p>
                    <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]"> $29</p>
                  </div>
                </div>
              </div>
            </div>
           {/* card 3 */}
            <div className="w-full max-w-[424px] bg-white rounded-xl">
              <div className="p-4 w-full h-full max-h-[224px] overflow-hidden relative">
                <img src="/images/service_logo.png" className="absolute right-6.5 top-6"/>
                <img src="/images/service_img.png" className="h-full w-full object-cover"/>
              </div>
              <div className="px-4">
                <p className="py-3 font-poppins font-normal text-base text-[#414E62]">Design & Creative</p>
                <h4 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">I will do professional figma design for website  UI UX and mobile app desi....</h4>
                <div className="flex gap-1 items-center py-3 border-b-2 border-[#1B2129]/10">
                 <div className="h-full w-full max-w-5 max-h-5"> <img src="/images/star.png" className="h-full w-full object-cover" /></div>
                  <p className="font-poppins font-medium text-base leading-6 text-[#3B4759]">4.0</p>
                  <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">(3 Reviews)</p>
                </div>
                <div className="pt-3 pb-4 flex justify-between">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-full h-full max-h-9 max-w-9 overflow-hidden">
                      <img src="/images/profile.png" className="h-full w-full object-cover" />
                    </div>
                    <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">Robert Bross</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Starting at:</p>
                    <p className="font-poppins font-semibold text-base leading-6 text-[#242B36]"> $29</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
         </div>
       </section>

       {/* latest job */}
       <section className="py-[120px]">
         <div className="w-full max-w-[1320px] mx-auto">
          <div className="pb-10">
            <h2 className="font-poppins font-medium text-4xl leading-11 text-[#242B36]">Latest Job</h2>
          </div>
          {/* cards */}
          <div className="flex gap-6">
            {/* card 1 */}
            <div className="w-full px-6 py-8 max-w-[424px] border-2 rounded-xl border-[#1B2129]/10">
            <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">Logo Design for Business Loan Brokerage</h3>
            <div className="flex items-center gap-2.5 py-2">
              <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">Jun 5, 2025</p>
              <div className="h-1.5 w-1.5 rounded bg-[#FA8C00]"></div>
              <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">MidLevel</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-poppins font-medium text-xl leading-7 text-[#242B36]">$260</p>
              <div className="py-1.5 px-3.5 rounded-full bg-[#ECEDEF] font-poppins font-medium text-sm leading-6 text-[#3B4759]">Fixed</div>
              <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">Posted 3 hours ago</p>
            </div>
            <p className="font-poppins font-normal text-base leading-6 text-[#3B4759] py-4">We are seeking a talent graphic designer to create a professional logo for Our....</p>
            <div className="flex gap-2">
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Business Card Design</div>
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Graphic Design</div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Graphic Design</div>
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Adobe Illustrator</div>
            </div>
            <div className="flex items-center gap-1 pt-4">
              <a href="#" className="font-poppins font-medium text-sm leading-5 text-[#007456]">View More</a>
              <div className="pt-[1px]">
                <IoMdArrowForward className="text-lg text-[#007456]"/>
              </div>
            </div>
            </div>
            {/* card 2 */}
             <div className="w-full px-6 py-8 max-w-[424px] border-2 rounded-xl border-[#1B2129]/10">
            <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">Logo Design for Business Loan Brokerage</h3>
            <div className="flex items-center gap-2.5 py-2">
              <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">Jun 5, 2025</p>
              <div className="h-1.5 w-1.5 rounded bg-[#FA8C00]"></div>
              <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">MidLevel</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-poppins font-medium text-xl leading-7 text-[#242B36]">$260</p>
              <div className="py-1.5 px-3.5 rounded-full bg-[#ECEDEF] font-poppins font-medium text-sm leading-6 text-[#3B4759]">Fixed</div>
              <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">Posted 3 hours ago</p>
            </div>
            <p className="font-poppins font-normal text-base leading-6 text-[#3B4759] py-4">We are seeking a talent graphic designer to create a professional logo for Our....</p>
            <div className="flex gap-2">
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Business Card Design</div>
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Graphic Design</div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Graphic Design</div>
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Adobe Illustrator</div>
            </div>
            <div className="flex items-center gap-1 pt-4">
              <a href="#" className="font-poppins font-medium text-sm leading-5 text-[#007456]">View More</a>
              <div className="pt-[1px]">
                <IoMdArrowForward className="text-lg text-[#007456]"/>
              </div>
            </div>
            </div>
            {/* card 3 */}
             <div className="w-full px-6 py-8 max-w-[424px] border-2 rounded-xl border-[#1B2129]/10">
            <h3 className="font-poppins font-medium text-xl leading-7 text-[#242B36]">Logo Design for Business Loan Brokerage</h3>
            <div className="flex items-center gap-2.5 py-2">
              <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">Jun 5, 2025</p>
              <div className="h-1.5 w-1.5 rounded bg-[#FA8C00]"></div>
              <p className="font-poppins font-medium text-base leading-6 text-[#242B36]">MidLevel</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-poppins font-medium text-xl leading-7 text-[#242B36]">$260</p>
              <div className="py-1.5 px-3.5 rounded-full bg-[#ECEDEF] font-poppins font-medium text-sm leading-6 text-[#3B4759]">Fixed</div>
              <p className="font-poppins font-normal text-base leading-6 text-[#414E62]">Posted 3 hours ago</p>
            </div>
            <p className="font-poppins font-normal text-base leading-6 text-[#3B4759] py-4">We are seeking a talent graphic designer to create a professional logo for Our....</p>
            <div className="flex gap-2">
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Business Card Design</div>
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Graphic Design</div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Graphic Design</div>
              <div className="w-fit px-3.5 py-1.5 font-poppins font-normal text-sm leading-5 text-[#414E62] border-2 border-[#C4C8CE] rounded-2xl">Adobe Illustrator</div>
            </div>
            <div className="flex items-center gap-1 pt-4">
              <a href="#" className="font-poppins font-medium text-sm leading-5 text-[#007456]">View More</a>
              <div className="pt-[1px]">
                <IoMdArrowForward className="text-lg text-[#007456]"/>
              </div>
            </div>
            </div>
          </div>
         </div>
       </section>

       {/* hire the best */}
       <section className="mb-20 relative z-0">
          <div className="bg-[#F2F8F7] z-10 w-[70%] h-[90%] absolute top-0">
          </div>
            <div className="relative  z-50 w-full flex gap-30 max-w-[1320px] mx-auto py-37.5">
              <div className="w-1/2 py-16">
                <h2 className="font-poppins font-medium text-4xl leading-9 text-[#242B36] pb-11">All You Need to Hire The Best</h2>
                <div className="flex gap-3">
                  <div className="h-[32px] w-[32px]">
                    <img src="/images/hb_icon.png"  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg leading-6.5">Verified Professionals</h4>
                    <p className="font-poppins font-normal text-base leading-6 text-[#3B4759]">Work with skilled freelancers who pass quality checks and portfolio reviews.</p>
                  </div>
                </div>
                <div className="flex gap-3 py-8">
                  <div className="h-[32px] w-[32px]">
                    <img src="/images/hb_icon.png"  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg leading-6.5">Pay Only for Results</h4>
                    <p className="font-poppins font-normal text-base leading-6 text-[#3B4759]">Release payment once your project in successfully completed..</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-[32px] w-[32px]">
                    <img src="/images/hb_icon.png"  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg leading-6.5">Secure & Transparent</h4>
                    <p className="font-poppins font-normal text-base leading-6 text-[#3B4759]">Built-in tools for communication, file sharing, and sage payments.</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
              <img src="/images/hire.png" className="w-full h-full object-cover"/>
              </div>
            </div>
            {/* this div hide upper dive */}
       </section>

       {/* about us */}
       <section className="relative z-0">
        <div className="absolute -z-10 top-[35%] w-fit h-fit">
          <img src="/images/whatbg.png" className="w-full h-full object-cover" />
        </div>
        {/* this dive should be in top  */}
        <div className="relative z-50 w-full max-w-[1320px] mx-auto">
          <div>
            <h2 className="font-poppins font-medium text-4xl leading-11 text-[#242B36] pb-15 text-center ">What Freelancer are Thinking <br /> About Us</h2>
          </div>
          {/* cards */}
          <div>
              <div className="flex gap-6">
                {/* single card */}
                <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-[64px] w-[64px] mx-auto">
                    <img src="/images/freelance-profile.png" className="w-full h-full object-cover"/>
                  </div>
                   <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">Esther Howard</p>
                   <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Professional Developer</p>
                  </div>
                  <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">Joining this marketplace changed my career. I <br /> can showcase my skills, connect with real <br /> clients, and get paid on time. It feels amazing to ,<br /> grow my freelance journey here.</p>
                  <div className="h-10 w-10 mx-auto">
                    <img src="/images/cmt_icon.png" className="w-full h-full object-cover"/>
                  </div>
                </div>
                 {/* single card */}
                <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-[64px] w-[64px] mx-auto">
                    <img src="/images/freelance-profile.png" className="w-full h-full object-cover"/>
                  </div>
                   <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">Esther Howard</p>
                   <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Professional Developer</p>
                  </div>
                  <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">Joining this marketplace changed my career. I <br /> can showcase my skills, connect with real <br /> clients, and get paid on time. It feels amazing to ,<br /> grow my freelance journey here.</p>
                  <div className="h-10 w-10 mx-auto">
                    <img src="/images/cmt_icon.png" className="w-full h-full object-cover"/>
                  </div>
                </div>
                 {/* single card */}
                <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-[64px] w-[64px] mx-auto">
                    <img src="/images/freelance-profile.png" className="w-full h-full object-cover"/>
                  </div>
                   <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">Esther Howard</p>
                   <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Professional Developer</p>
                  </div>
                  <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">Joining this marketplace changed my career. I <br /> can showcase my skills, connect with real <br /> clients, and get paid on time. It feels amazing to ,<br /> grow my freelance journey here.</p>
                  <div className="h-10 w-10 mx-auto">
                    <img src="/images/cmt_icon.png" className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>
               <div className="flex gap-6 mt-7.5">
                {/* single card */}
                <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-[64px] w-[64px] mx-auto">
                    <img src="/images/freelance-profile.png" className="w-full h-full object-cover"/>
                  </div>
                   <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">Esther Howard</p>
                   <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Professional Developer</p>
                  </div>
                  <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">Joining this marketplace changed my career. I <br /> can showcase my skills, connect with real <br /> clients, and get paid on time. It feels amazing to ,<br /> grow my freelance journey here.</p>
                  <div className="h-10 w-10 mx-auto">
                    <img src="/images/cmt_icon.png" className="w-full h-full object-cover"/>
                  </div>
                </div>
                 {/* single card */}
                <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-[64px] w-[64px] mx-auto">
                    <img src="/images/freelance-profile.png" className="w-full h-full object-cover"/>
                  </div>
                   <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">Esther Howard</p>
                   <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Professional Developer</p>
                  </div>
                  <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">Joining this marketplace changed my career. I <br /> can showcase my skills, connect with real <br /> clients, and get paid on time. It feels amazing to ,<br /> grow my freelance journey here.</p>
                  <div className="h-10 w-10 mx-auto">
                    <img src="/images/cmt_icon.png" className="w-full h-full object-cover"/>
                  </div>
                </div>
                 {/* single card */}
                <div className="w-full max-w-[424px] py-5 px-5 shadow-[0_4px_25px_0_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-[64px] w-[64px] mx-auto">
                    <img src="/images/freelance-profile.png" className="w-full h-full object-cover"/>
                  </div>
                   <p className="py-2 font-poppins font-medium text-lg leading-6.5 text-[#242B36]">Esther Howard</p>
                   <p className="font-poppins font-normal text-sm leading-5 text-[#414E62]">Professional Developer</p>
                  </div>
                  <p className="font-poppins font-normal text-base leading-6 text-[#242B36] text-center mb-6">Joining this marketplace changed my career. I <br /> can showcase my skills, connect with real <br /> clients, and get paid on time. It feels amazing to ,<br /> grow my freelance journey here.</p>
                  <div className="h-10 w-10 mx-auto">
                    <img src="/images/cmt_icon.png" className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
       </section>
    </>
  );
}

export default App;
