import React from "react";

const InteractivePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="grid grid-cols-3 gap-4">
       
        <div className="relative flex items-center justify-center w-40 h-40 border border-black">
          <div className="inner-box flex items-center justify-center bg-black text-white">
            Hello
          </div>
        </div>

       
        <div className="relative flex justify-center w-40 h-40 border border-black">
          <div className="inner-box absolute top-0 bg-black text-white flex items-center justify-center">
            Hello
          </div>
        </div>

       
        <div className="relative w-40 h-40 border border-black">
          <div className="inner-box absolute top-0 right-0 bg-black text-white flex items-center justify-center">
            Hello
          </div>
        </div>

        
        <div className="relative w-40 h-40 border border-black">
          <div className="inner-box absolute top-0 left-0 bg-black text-white flex items-center justify-center">
            Hello
          </div>
        </div>

        
        <div className="relative flex justify-center items-end w-40 h-40 border border-black">
          <div className="inner-box bg-black text-white flex items-center justify-center">
            Hello
          </div>
        </div>

        
        <div className="relative w-40 h-40 border border-black">
          <div className="inner-box absolute bottom-0 right-0 bg-black text-white flex items-center justify-center">
            Hello
          </div>
        </div>

        
        <div className="relative w-40 h-40 border border-black">
          <div className="inner-box absolute bottom-0 left-0 bg-black text-white flex items-center justify-center">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePage;