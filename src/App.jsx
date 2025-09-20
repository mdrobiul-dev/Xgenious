import { IoIosArrowDown } from "react-icons/io";
function App() {


  return (
    <section className="bg-[#E2FFF6]/20 ">
      <div className="px-28 flex justify-between items-center py-5 border-b-[1px] border-[#ECEDEF]">
        <div className="w-[157px] h-[30px]">
          <a href="#">
            <img src="/images/logo.png" className="w-full h-full align-middle"/>
          </a>
        </div>
        <nav>
          <ul className="flex gap-10 font-poppins font-normal text-base leading-6">
            <li>
              <div className="flex gap-1.5 items-center font-poppins font-normal text-base leading-6">
                <a>Home</a>
                <IoIosArrowDown className="pt-[2px]"/>
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
                 <IoIosArrowDown className="pt-[2px]"/>
              </div>
            </li>
             <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <a className="font-poppins font-medium text-base leading-6 text-[#242B36] px-4.5 py-2.5 border-[1px] border-[#417D6E] rounded-full cursor-pointer">Community</a>
          <a className="font-poppins font-medium text-base leading-6 text-[#ECEDEF] px-4.5 py-2.5 bg-[#007456] rounded-full cursor-pointer">Sign Up</a>
        </div>
      </div>
      {/* hero section */}
      <div>
       <div></div>
      </div>
    </section>
    
  )
}

export default App
