import React from "react";

const EducationCard = (props) => {
  return (
    <div className=" flex flex-col lg:flex-row py-4">
      
      <div>
      <div className="mt-2">
         
          <p className=" font-semibold mt-2 lg:mt-0">Higher Secondary,2018-2020</p>
        </div>
        
        <p className=" mt-2">
        Bio Maths-NSS Higher Secondary School Varapetty
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
        <div>
        <p className=" font-semibold mt-2 lg:mt-0">Degree ,2020-2023</p>
        <p className=" mt-2">
        B.Voc.Software Development and System Administration-Mahatma Gandhi University
        </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
