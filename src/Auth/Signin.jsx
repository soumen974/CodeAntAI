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

  return (
    <div className="min-h-screen bg-white flex">
      
      <div className="w-1/2 border-r border relative hidden lg:block">
        {/* Background Logo */}
        <div className="absolute bottom-0 left-0 ">
          <img src={LogoTobeusedInSignINLeft} height={250} width={250} className="" alt="" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={mainlogo} 
                alt="CodeAnt Icon"
                className="w-6 h-6"
              />
              <span className="text-sm font-medium">AI to Detect & Autofix Bad Code</span>
            </div>

            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="font-bold text-lg">30+</div>
                <div className="text-xs text-gray-500">Language Support</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">10K+</div>
                <div className="text-xs text-gray-500">Developers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">100K+</div>
                <div className="text-xs text-gray-500">Hours Saved</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 w-48 relative left-12">
            <div className="flex items-start justify-between mb-1">
              <div className="">
                <img src={piechart}  alt="piechart" />
              </div>
              <div className="flex items-center text-blue-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 15l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-xs ml-1">14%</div>
              </div>
            </div>
            <div>
                <div className="text-xs text-gray-500 mb-1">Issues Fixed</div>
                <div className="text-2xl font-bold">500K+</div>
              </div>
            <div className="text-xs text-gray-500">This week</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FAFAFA] lg:w-1/2 flex items-center justify-center p-4 md:p-12">
        <div className="w-full max-w-xl">
          <div className="bg-white h-[67vh]  rounded-xl border border-gray-200 ">
              
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
                  <button className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                    <img src={github} alt="GitHub" className="w-5 h-5" />
                    Sign in with Github
                  </button>
                  <button className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                    <img src={bitbucket} alt="Bitbucket" className="w-5 h-5" />
                    Sign in with Bitbucket
                  </button>
                  <button className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                    <img src={azure} alt="Azure DevOps" className="w-5 h-5" />
                    Sign in with Azure Devops
                  </button>
                  <button className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                    <img src={gitlab} alt="GitLab" className="w-5 h-5" />
                    Sign in with GitLab
                  </button>
                </div>
                
                <div className={` space-y-3 ${selectedOption === 'Self Hosted'? 'block': 'hidden'}`}>
                  <button className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                      <img src={gitlab} alt="GitLab" className="w-5 h-5" />
                      Self Hosted GitLab
                  </button>
                  <button className="w-full font-semibold flex items-center justify-center gap-3 py-3 px-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
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