import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const{user, logOut}= UserAuth()
  // console.log(user.email)
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="text-white flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link> 
      {user?.email ?(
        <div>
        <Link to='/Account'> <button className="bg-white-600 px-4 py-2">Account</button> </Link>
        <button onClick={handleLogOut} className="bg-red-600  px-4 py-2">Log Out</button>
       
        
      </div>
      ):(
        <div>
        <Link to='/login'> <button className="bg-white-600 px-4 py-2">Sign In</button> </Link>
        <Link to='/signup'><button className="bg-red-600  px-4 py-2">SignUp</button></Link>       
        
      </div>
      )}
    </div>
  );
};

export default Navbar;
