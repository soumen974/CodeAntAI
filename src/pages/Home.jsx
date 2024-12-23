import React ,{useState} from 'react'
import repositoryData from "../Data/Data.json";
import Database from "../assets/icons/Database";
import Plus from "../assets/icons/Plus";
import Refresh from "../assets/icons/Refresh";
import Search from "../assets/icons/Search";

export default function Home() {
  const { repositories } = repositoryData;
  const [searchQuery, setSearchQuery] = useState('');

  const filterRepos = (repositories) => {
    return repositories.filter(repo => 
      (!searchQuery || 
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.lang.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };
  const totalRepos = repositories.length;
  return (
    <div>
      <div className="  ">
      <div className=" p-3 md:p-6 ">
        <div className="flex justify-between max-sm:flex-col ">
          <div className="">
            <h1 className="text-2xl text-[#181D27] font-inter font-bold">Repositories</h1>
            <h5 className="text-sm text-[#414651] ">{totalRepos} total repositories</h5>
          </div>
          {/* <div className="drop-shadow-sm flex gap-3.5 text-sm max-sm:mt-4"> */}
          <div className="flex gap-3.5 text-sm max-sm:mt-4">
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-inter font-medium rounded-lg text-xs px-5 pr-6 py-2.5 me-2 mb-2 "
            >
              <Refresh />
              Refresh
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium font-inter rounded-lg text-xs px-5 pr-6 py-2.5  mb-2 "
            >
              <Plus />
              Add Repository
            </button>
          </div>
        </div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <Search  />
            </div>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e)=>{setSearchQuery(e.target.value)}}
              className="block py-2 ps-10 text-sm mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-96 max-sm:w-full"
              placeholder="Search Repositories"
              required
            />
          </div>

      </div>

      <div className="">
      {filterRepos(repositories).map((repo , _) => (
        <div key={repo.name} className="lg:pl-6 pl-3 font-inter py-4 border-t-2 hover:bg-[#F5F5F5]">
          <div className="flex items-center gap-5 mb-3">
            <h1 className="md:text-lg text-md font-medium text-[#181D27]">
              {repo.name}
            </h1>
            <span className=" bg-[#EFF8FF]  items-center border border-[#B2DDFF] text-blue-600 text-[0.7rem] md:text-xs font-medium px-2.5 py-0.5 rounded-full">
              {repo.type}
            </span>
          </div>
          <div className="flex gap-10 max-sm:gap-5 text-sm font-normal">
            <span className="inline-flex justify-center gap-1 items-center ">

              <span className='text-[#181D27] max-md:text-xs'>{repo.lang}</span>
              <span className="p-[0.2rem] bg-[#1570EF] rounded-full"></span>
            </span>
            <div className="inline-flex items-center max-md:text-xs text-[#181D27] gap-2">
              <Database />
              {repo.size}
            </div>
            <span className="text-[#181D27] max-md:text-xs">{repo.updated}</span>
          </div>
        </div>
        ))}
      </div>
      
      </div>
    </div>
  )
}
