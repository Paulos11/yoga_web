import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center bg-gray-100 sm:pb-10 sm:text-center">
      <div className="w-[400px]">
        <dotlottie-player
          src="https://lottie.host/e11fc5c1-6fb9-4dc5-b2b2-611a486184bb/9pqPqLI4CN.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="max-w-[500px] px-6">
        <h1 className="text-3xl text-slate-700 pb-2">
          Hi, I am{" "}
          <span className="font-bold text-yellow-600">Paul Lakandri</span>
        </h1>
        <p className="font-light text-amber-900 pb-2">
          Some Dev, Freelance, Rounder
        </p>
        <p className="font-medium pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          voluptates consectetur perferendis praesentium vero deleniti nihil!
          Officiis illo nobis adipisci.
        </p>
        <NavLink to="/about">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg">
            About Us
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
