import React, { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { IoIosMenu } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Swal from "sweetalert2";
export default function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const listItem = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold p-1 text-[16px] hover:text-violet-600 ${
            isActive ? "text-violet-600" : "dark:text-white"
          }`
        }
      >
        Home
      </NavLink>
  
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          `font-semibold p-1 text-[16px] hover:text-violet-600 ${
            isActive ? "text-violet-600" : "dark:text-white"
          }`
        }
      >
        All Reviews
      </NavLink>
  
      {user && (
        <NavLink
          to="/addReview"
          className={({ isActive }) =>
            `font-semibold p-1 text-[16px] hover:text-violet-600 ${
              isActive ? "text-violet-600" : "dark:text-white"
            }`
          }
        >
          Add Reviews
        </NavLink>
      )}
  
      {user && (<NavLink
        to="/myReviews"
        className={({ isActive }) =>
          `font-semibold p-1 text-[16px] hover:text-violet-600 ${
            isActive ? "text-violet-600" : "dark:text-white"
          }`
        }
      >
        My Reviews
      </NavLink>)}
  
     {user && ( <NavLink
        to="/myWatchlist"
        className={({ isActive }) =>
          `font-semibold p-1 text-[16px] hover:text-violet-600 ${
            isActive ? "text-violet-600" : "dark:text-white"
          }`
        }
      >
        Watchlist
      </NavLink>)}
    </>
  );
  
  // Theme Controller
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("theme");
    console.log(savedData);
    if (savedData === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setDark(true);
      console.log(dark);
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      setDark(false);
      console.log(dark);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.body.classList.toggle("dark", newDark);
    document.body.classList.toggle("light", !newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };


  
  return (
   <div className="bg-white sticky top-0 z-50 dark:bg-slate-800 shadow-md">
     <div className="navbar container mx-auto">

<div className="navbar-start">
  <div className="dropdown">
    <div
      tabIndex={0}
      role="button"
      className="bg-white dark:bg-gray-300 mr-2 rounded-sm p-1 lg:hidden"
    >
      <IoIosMenu className="text-black " />
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 dark:bg-black"
    >
      {listItem}
    </ul>
  </div>
  <a className="text-xl dark:text-white w-max pmd hidden sm:block">
    {/* <img className="w-28 object-fill h-4" src={Logo} alt="Logo" /> */}
    <h3 className="font-semibold ">GameSphere</h3>
  </a>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 gap-3">{listItem}</ul>
</div>

<div className="navbar-end gap-5 items-center">
  {/* <input
    type="checkbox"
    value="synthwave"
    onChange={toggleTheme}
    className="toggle theme-controller"
  /> */}

  <div className="p-1 dark:bg-gray-300 rounded-full">
    {" "}
    {dark ? (
      <CiLight className="text-gray-500 text-3xl" onClick={toggleTheme} />
    ) : (
      <MdDarkMode
        className="text-gray-500 text-3xl"
        onClick={toggleTheme}
      />
    )}
  </div>

  {user ? (
    <div className="flex items-center justify-center gap-3  z-50">
      <img
        data-tooltip-id="my-tooltip"
        data-tooltip-content={user.displayName}
        data-tooltip-place="top"
        className="w-10 h-10 object-cover rounded-full ring-2 ring-blue-400"
        src={user?.photoURL}
        alt="user"
        referrerPolicy="no-referrer"
      />
      <Tooltip id="my-tooltip" className="z-50" />
      <button
        onClick={() => {
          logOut();
          navigate("/");
           Swal.fire({
                      title: "Successfully Logout",
                      text: " ",
                      icon: "success",
                    });
        }}
      className="text-sm  bg-blue-500 px-4 py-3 rounded-md text-white font-semibold"
      
        
      >
        LogOut
      </button>
    </div>
  ) : (
    <div className="flex gap-5 items-center justify-center">
      <NavLink
        to="/auth/login"
        className={({ isActive }) =>
          ` font-medium dark:text-white ${
            isActive
              ? " bg-blue-500 px-4 py-2 rounded-md text-white font-semibold"
              : ""
          }`}
      >
        Login
      </NavLink>
      <NavLink
        to="/auth/registration"
        className={({ isActive }) =>
          ` font-medium dark:text-white ${
            isActive
              ? " bg-blue-500 px-4 py-2 rounded-md text-white font-semibold"
              : ""
          }`}
      >
        Registration
      </NavLink>
    </div>
  )}
</div>
</div>
   </div>
  );
}
