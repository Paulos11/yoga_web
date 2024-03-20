import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-gray-900 text-white">
      <div className="text-2xl">
        <NavLink to="/">
          Yoga<span className="font-bold">Web</span>
        </NavLink>
      </div>
      <div className="px-2">
        <NavLink to="/" className="px-4">
          Home
        </NavLink>
        <NavLink to="/about" className="px-4">
          About
        </NavLink>
        <NavLink to="/contact" className="px-4">
          Contact
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
