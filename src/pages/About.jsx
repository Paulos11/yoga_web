import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team"
          className="mb-6 rounded-lg shadow-lg"
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
        />
        <div className="max-w-xl text-center">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg  ">
            <NavLink to="/contact">Contact Us </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
