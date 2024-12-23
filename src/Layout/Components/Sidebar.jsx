import React from 'react'
import { NavLink } from 'react-router-dom'
import PageLogo from "../../assets/PageLogo.svg";
import Home from "../../assets/icons/Home";
import Code from "../../assets/icons/Code";
import Cloud from "../../assets/icons/Cloud";
import Book from "../../assets/icons/Book";
import Settings from "../../assets/icons/Setting";
import Logout from "../../assets/icons/Logout";
import Phone from "../../assets/icons/Phone";


export default function Sidebar() {

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
    }
  ];

  return (
    <div className='bg-green-20 '>
       <aside className="w-[14rem] h-[90vh] bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-left items-center gap-2">
            <img src={PageLogo} alt="PageLogo" className="" />
          </div>
          <select className="mt-3 w-full font-medium text-sm border rounded-md p-2 py-2.2 text-gray-700">
           <option defaultValue >Soumen Bhunia</option>
            <option value="Another Account" >Another Account</option>
          </select>
         
        </div>

        <nav className="p-2 space-y-0.5">
          {Menus.map((menu, i) => (
            <NavLink
              to={menu.link}
              className={({ isActive }) =>
                `flex items-center text-sm gap-3.5 font-medium p-2.5 rounded-md ${
                  menu.margin ? "mt-64" : ""
                } ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-[#414651]"}`
              }
              key={menu.name}
            >
              {menu.icon}
              <h2>{menu.name}</h2>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-[14rem] border-r border-t border-gray-200">
          <NavLink
              to={'/Support'}
              className={({ isActive }) =>
                `flex items-center text-sm gap-3.5 font-medium p-3 rounded ${
                  "" ? "" : ""
                } ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-[#414651]"}`
              }
              
            >
              <Phone />
              <h2>Support </h2>
            </NavLink>

          <NavLink
              to={'/logout'}
              className={({ isActive }) =>
                `flex items-center text-sm gap-3.5 font-medium p-3 rounded ${
                  "" ? "" : ""
                } ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-[#414651]"}`
              }
              
            >
              <Logout />
              <h2>Logout </h2>
            </NavLink>
        </div>
      </aside>
    </div>
  )
}
