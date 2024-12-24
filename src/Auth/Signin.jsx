import React, { useState } from 'react';
import mainlogo from "../assets/icons/mainlogo.svg";
import LogoTobeusedInSignINLeft from "../assets/LogoTobeusedInSignINLeft.svg";
import piechart from "../assets/icons/piechart.svg";
import github from "../assets/icons/github.svg";
import bitbucket from "../assets/icons/bitbucket.svg";
import azure from "../assets/icons/azure.svg";
import gitlab from "../assets/icons/gitlab.svg";
import sso from "../assets/icons/sso.svg";

const Signin = () => {
  const [selectedOption, setSelectedOption] = useState('SAAS');

 const AuthButtons =[
    {name:'Github',method:'github',icon:github,text:'Sign in with Github'},
    {name:'Bitbucket',method:'bitbucket',icon:bitbucket,text:'Sign in with Bitbucket'},
    {name:'Azure',method:'azure',icon:azure,text:'Sign in with Azure Devops'},
    {name:'Gitlab',method:'gitlab',icon:gitlab,text:'Sign in with GitLab'}
  ]

  const authLoginMethods = (methods) =>{
    if(methods === 'github'){
      // window.location.href = `https://www.google.com/search?q=github.com`;
      localStorage.setItem("User", 'true');
    }else if(methods === 'bitbucket'){
      // window.location.href = `https://www.google.com/search?q=bitbucket.com`;
      localStorage.setItem("User", 'true');
    }else if(methods === 'Azure'){
      // window.location.href = `https://www.google.com/search?q=azure.com`;
      localStorage.setItem("User", 'true');
    }else if(methods === 'gitlab'){
      // window.location.href = `https://www.google.com/search?q=gitlab.com`;
      localStorage.setItem("User", 'true');
    }else if(methods === 'sso'){
      // window.location.href = `https://www.google.com/search?q=sso`;
      localStorage.setItem("User", 'true');
    }else{
      window.location.href = `/`;
    }

  }

  return (
    <div className="min-h-screen  bg-white flex">
      
      <div className="w-1/2 border-r border relative hidden lg:block">
        {/* Background Logo */}
        <div className="absolute bottom-0 left-0 ">
          <img src={LogoTobeusedInSignINLeft} height={250} width={250} className="" alt="" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-8">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 py-8 items-center w-[26rem]">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src={mainlogo} 
                alt="CodeAnt Icon"
                className="w-6 h-6"
              />
              <span className="text-xl font-bold text-[#081735]">AI to Detect & Autofix Bad Code</span>
            </div>

            <div className="flex justify-between ">
              <div className="text-center">
                <div className="font-bold text-[#081735] text-xl">30+</div>
                <div className="text-xs text-[#081735]">Language Support</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#081735] text-xl">10K+</div>
                <div className="text-xs text-[#081735]">Developers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#081735] text-xl">100K+</div>
                <div className="text-xs text-[#081735]">Hours Saved</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 w-[16rem] relative -top-[1.5rem] left-[12rem]">
            <div className="flex items-start justify-between mb-1">
              <div className="">
                <img src={piechart}  alt="piechart" />
              </div>
              <div className="flex items-center font-bold text-[#0049C6]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 15l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-md ml-1">14%</div>
              </div>
            </div>

            <div className='pl-4 pt-2'>
                <div className="text-md text-[#081735] mb-1">Issues Fixed</div>
                <div className="text-3xl font-bold text-[#081735]">500K+</div>
            </div>
            <div className="text-md pl-4 text-[#081735]">This week</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FAFAFA] lg:w-1/2 flex items-center justify-center p-4 md:p-12">
        <div className="w-full max-w-xl ">
          <div className="bg-white min-h-[75vh]  rounded-xl border border-gray-200 ">
              
              <div className="md:p-6 py-6 px-4 border-b border-gray-200">
                <div className="text-center mb-8">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <img 
                      src={mainlogo}
                      alt="CodeAnt AI"
                      className="w-8 h-8"
                    />
                    <span className="text-xl font-medium">CodeAnt AI</span>
                  </div>
                  <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
                </div>

                <div className="bg-gray-50  rounded-lg border  flex gap-2 mb-8">
                  <button
                    onClick={() => setSelectedOption('SAAS')}
                    className={`flex-1 py-3 px-5 font-semibold rounded-md transition-colors ${
                      selectedOption === 'SAAS'
                        ? 'bg-[#1570EF] text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    SAAS
                  </button>
                  <button
                    onClick={() => setSelectedOption('Self Hosted')}
                    className={`flex-1 py-2 px-4 font-semibold rounded-md transition-colors ${
                      selectedOption === 'Self Hosted'
                        ? 'bg-[#1570EF] text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    Self Hosted
                  </button>
                </div>
              </div>

              <div className="w-full md:max-w-md sm:max-w-sm sm:mx-auto max-md:px-3 py-8">
                <div className={` space-y-3 ${selectedOption === 'SAAS'? 'block': 'hidden'}`}>
                  {AuthButtons.map((button) => (
                      <button key={button.name}  onClick={()=>authLoginMethods(button.method)} className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                      <img src={button.icon} alt={button.icon} className="w-5 h-5" />
                      {button.text}
                    </button>
                    ))}
                </div>
                
                <div className={` space-y-3 ${selectedOption === 'Self Hosted'? 'block': 'hidden'}`}>
                  <button onClick={()=>authLoginMethods('gitlab')} className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                      <img src={gitlab} alt="GitLab" className="w-5 h-5" />
                      Self Hosted GitLab
                  </button>
                  <button onClick={()=>authLoginMethods('sso')} className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                      <img src={sso} alt="GitLab" className="w-5 h-5" />
                      Sign in with SSO
                  </button>
                </div>

              </div>
          </div>

          <div className="mt-8 text-center font-lighter text-sm text-gray-600">
            By signing up you agree to the{' '}
            <a href="/" className="text-[#181D27] font-bold text-md hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;