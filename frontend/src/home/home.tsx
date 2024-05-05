import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowRight from "../components/SvgFiles";

const Home: React.FC = () => {
  const navigate = useNavigate();
  function hanldeAuthRedirect() {
    navigate("/accounts");
  }

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className="flex justify-between ml-[10%] mr-[10%] mt-5">
        <h1 className="font-bold text-xl">Taskedi</h1>
        <button className="border-1 border-black p-2 bg-black text-white rounded-sm hover:bg-green-700  hover:border-none hover:text-black ">Get Started</button>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:mt-[10%] mt-[40%] text-center ">
        <h2 className="text-4xl text-light md:text-5xl ">A smarter way to Task</h2>
        <p className="md:mt-1 font-light md:font-normal text-lg mr-[10%] ml-[10%] mt-5 ">Taskedi revolutionizes task management by seamlessly integrating all your tasks into a single, easy-to-use platform.</p>

        <div>
          <button onClick={hanldeAuthRedirect} className=" border-1 border-black pt-4 pl-7 pr-7 pb-4 mt-5  bg-black text-white rounded-full font-medium hover:bg-green-700  hover:border-none hover:text-black ">
            <div className="flex items-center gap-1 hover:gap-3">
              <h2>Get Started</h2>
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
