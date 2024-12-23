import React from 'react';
import Sidebar from "./Components/Sidebar";
import { Outlet } from 'react-router-dom';
import Headderhome from "../pages/Components/Headderhome";
const SidebarLayout = () => {
  return (
   <>
   
    <div className='flex'>
      <div className="w-[14rem] fixed min-h-screen  max-lg:hidden">
      <Sidebar />
      </div>
      
    <div className="bg-zinc-50 w-full lg:p-4 rounded-md divide-y lg:ml-[14rem] ml-0 max-sm:p-0">
     <div className="bg-white border border-neutral-200 rounded-lg max-lg:pt-4">
     <Headderhome/>
     <Outlet />
     </div>
    </div>
  </div>
    </>
     );
};

export default SidebarLayout;