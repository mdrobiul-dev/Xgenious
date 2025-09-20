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
          <div className="py-2 border-2 border-[#007456] rounded-lg w-full max-w-50 flex justify-center items-center">
            <a
              href="#"
              className="pr-1.5 font-poppins font-medium text-base leading-6 text-[#007456]"
            >
              Design & Creative
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
    </>
  );
}

export default App;            
