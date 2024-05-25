import React from "react";
import { Link } from "react-router-dom";
import SideImg from '../assets/images/SideImg.png'

const SideBox = () => {
  return (
    <div className="backdrop-blur-md py-4 px-5 flex h-full w-full bg-[rgba(0,0,0,0.7)] min-w-[300px]">
      <div className="flex flex-col items-center w-full justify-center ">
        <h1 className="text-3xl  font-mono text-neutral-200">
          Welcome To Student Panel Portal
        </h1>
        <img src={SideImg} alt="Image" className="w-[400px] max-[600px]:w-[300px]"/>
        <span className="text-yellow-800 text-xl font-bold max-[961px]:hidden">&larr; Submit Your Details Here</span>
        <span className="text-yellow-800 text-xl font-bold min-[961px]:hidden"> Submit Your Details Below</span>
        <Link to={"/studentlist"} className="text-green-500">View The List</Link>
      </div>
    </div>
  );
};

export default SideBox;
