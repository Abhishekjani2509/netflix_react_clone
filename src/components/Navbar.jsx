import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to='/login'> <button className="bg-white-600 px-4 py-2">Sign In</button> </Link>
        <Link to='/signup'><button className="bg-red-600  px-4 py-2">Sign Up</button></Link>
        
      </div>
    </div>
  );
};

export default Navbar;
