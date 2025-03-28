import React, { useState } from "react";

const ServiceCard = ({ title, description, color }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className={`w-[380px] max-w-full mx-auto mb-4 ${isModalOpen ? 'filter brightness-75 scale-95 transition-all duration-300' : ''}`}>
        <div className="relative h-68 ml-0 mr-0 sm:mr-10">
          <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${color}-500 rounded-lg`}></span>
          <div className={`relative h-full p-4 bg-white border-2 border-${color}-500 rounded-lg flex flex-col`}>
            {/* Header with logo and menu */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                alt="ChatGPT Logo"
                className="w-8 h-8 rounded-full"
              />
              <h2 className="text-lg font-semibold text-gray-800 flex-grow text-center">{title}</h2>
              {/* <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button> */}
            </div>
            
            {/* Description */}
            <p className="mb-4 text-gray-600 text-sm line-clamp-2">{description}</p>
            
            {/* Button */}
            <div className="mt-auto">
              <div className="flex justify-between items-center w-full mt-3">
                <span className="text-sm text-gray-500">openai</span>
                <span className="text-sm font-medium text-gray-700">gpt-4o</span>
                <button
                  className="px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-lg
                             hover:bg-green-700 active:bg-green-800
                             transition duration-300
                             shadow-md hover:shadow-lg"
                  onClick={() => setModalOpen(false)}
                >
                  USE IT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-40 ">
          {/* Click outside modal to close */}
          <div className="absolute inset-0" onClick={() => setModalOpen(false)}></div>
          
          {/* Modal Content */}
          <div className="relative bg-gray-200 p-6 py-8 rounded-lg shadow-lg w-[500px] z-50 animate-scale-up border-[0.5px] border-black">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
              onClick={() => setModalOpen(false)}
            >
              USE IT
            </button>
          </div>
        </div>
        
      )}
    </>
  );
};

export default ServiceCard;