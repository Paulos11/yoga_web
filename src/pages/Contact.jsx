import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          alt="Team"
          className="mb-6 rounded-lg shadow-lg"
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
        />
        <div className="max-w-xl text-center">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">Contact</h1>
          <p className="text-gray-700 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg  ">
            <NavLink to="/">Home </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
