import React, { useState } from "react";
import Ant from "../../assets/icons/Ant";
import Bars from "../../assets/icons/Bars";
import Home from "../../assets/icons/Home";
import Code from "../../assets/icons/Code";
import Cloud from "../../assets/icons/Cloud";
import Book from "../../assets/icons/Book";
import Settings from "../../assets/icons/Setting";
import Logout from "../../assets/icons/Logout";
import Phone from "../../assets/icons/Phone";
import { NavLink } from "react-router";
import {X} from "lucide-react"

const Headerhome = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

   const Menus = [
      {
        name: "Repositories",
        link: "/",
        icon: <Home />,
      },
      {
        name: "AI Code Review",
        link: "/aicoder",
        icon: <Code />,
      },
      {
        name: "Cloud Security",
        link: "/cloudsecurity",
        icon: <Cloud />,
      },
      {
        name: "How to Use",
        link: "/how-to-use",
        icon: <Book />,
      },
      {
        name: "Settings",
        link: "/settings",
        icon: <Settings />,
      },
      {
        name: "Logout",
        link: "/logout",
        icon: <Logout />,
        margin: true,
      },
      {
        name: "Support",
        link: "/support",
        icon: <Phone />,
      },
    ];

    const logout = () => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    } 

  return (
    <div className="">
      {/* movbil View */}
      <div className="lg:hidden  border-b pb-2 border-gray-200">
        <div className=" px-6 mt-6">
          <div className="fixed top-0 p-3 border-b left-0 right-0 bg-white z-50">
            <div className="flex  justify-between bg-white z-50">
            <div className="flex gap-3 ">
              <Ant className="size-7" />
              <h1 className="text-black font-Roboto font-light text-2xl tracking-wide">
                CodeAnt AI
              </h1>
            </div>
            <button className="" onClick={()=>setIsNavbarOpen(!isNavbarOpen)} aria-label="Toggle Menu">
             {!isNavbarOpen? <Bars />:  <X />}
            </button>
            </div>
          </div>
         <div className={`z-10  absolute top-16 right-0 w-full h-full p-2 transform
         
         ${isNavbarOpen ? "translate-y-0" : "-translate-y-[130%]"} transition-transform duration-700 
         `}>
           <nav className="flex flex-col gap-3 bg-white border border-gray-300 rounded-lg p-2 ">
           <select className="mt-3 w-full font-medium text-sm border rounded-md p-2 py-2.2 text-gray-700">
              <option defaultValue >Soumen Bhunia</option>
              <option value="Another Account" >Another Account</option>
          </select>
            {Menus.map((menu, _) => (
              <NavLink
                to={menu.link}
                onClick={()=>{menu.link==="/logout" ? logout() : setIsNavbarOpen(!isNavbarOpen);}}
                className={({ isActive }) =>
                  `flex items-center text-sm gap-3.5 font-medium p-2 rounded
                  ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`
                }
                key={menu.name}
              >
                {menu.icon}
                <h2>{menu.name}</h2>
              </NavLink>
            ))}          
          </nav>
         </div>
        </div>
      </div>

     
    </div>
  );
};

export default Headerhome;
        