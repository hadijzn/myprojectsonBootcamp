

import React from "react";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-[rgba(43,43,43,255)] h-36 w-72 rounded-lg mt-4 flex mr-3 overflow-hidden">
      <div className="bg-[rgba(221,2,2,255)] rounded-full w-16 h-16 flex justify-center items-center ml-4 mt-4">
        <img src={imgSrc} className="w-7 h-7" alt={title} />
      </div>
      <div className="mt-6 ml-3">
        <p className="text-lg">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const RecommendationCard = ({ title, content, fileName, fileIcon }) => {
  return (
    <div className="bg-[rgba(43,43,43,255)] h-44 w-72 rounded-lg mt-4 flex mr-3">
      <div className="mt-6">
        <div className="w-60 h-24 mx-6 rounded-xl shadow-sm shadow-slate-100">
          <h1 className="font-bold ml-2 mb-2">{title}</h1>
          <p className="text-xs ml-2">{content}</p>
        </div>
        <div className="h-10 w-72 shadow-sm shadow-slate-100 mt-2 flex rounded-full">
          <img width={25} height={10} className="ml-2" src={fileIcon} alt={fileName} />
          <p className="font-bold mt-2 ml-2">{fileName}</p>
        </div>
      </div>
    </div>
  );
};



export default function Main() {
  return (
    <div className="flex flex-col mt-6  mx-1 ">

      <div>
        <h1 className="text-2xl">Cost Overview</h1>
        <div className="flex">
          <Card imgSrc="/chart-pie-solid.svg" title="Expanses" description="Total Items" />
          <Card imgSrc="/video-solid.svg" title="Statistics" description="Total Items" />
          <Card imgSrc="/headphones-solid.svg" title="Settings" description="Total Items" />
          <Card imgSrc="/file-solid.svg" title="Reports" description="Total Items" />
        </div>
      </div>

      <div className="mt-14">
        <h1 className="text-2xl">Recommendations</h1>
        <div className="flex">
          <RecommendationCard
            title="Cost Track usage tips"
            content="Learn how to manage your Expanses effectively. Follow the tips for successful budgeting!"            fileName="Usage-tips.docx"
            fileIcon="/file-lines-regular (1).svg"
          />
          <RecommendationCard
            title="Cost Track usage tips"
            content="Learn how to manage your Expanses effectively. Follow the tips for successful budgeting!"
            fileName="Usage-tips.docx"
            fileIcon="/file-lines-regular (1).svg"
          />
          <RecommendationCard
            title="Cost Track usage tips"
            content="Learn how to manage your Expanses effectively. Follow the tips for successful budgeting!"
            fileName="Usage-tips.docx"
            fileIcon="/file-lines-regular (1).svg"
          />
          <RecommendationCard 
            title="Cost Track usage tips"
            content="Learn how to manage your Expanses effectively. Follow the tips for successful budgeting!"
            fileName="Usage-tips.docx"
            fileIcon="/file-lines-regular (1).svg"
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl">Expense overview</h1>
        <div className="flex flex-row justify-between">
      <div className="flex flex-col mt-2">
        <div className="flex">
        <img width={25} height={25} src="/square-check-solid.svg"></img>

        <h1 className="mb-4 text-xl ml-4">Category</h1>
        </div>
        <div className="flex ">
          <img width={25} height={25} src="/square-check-solid.svg"></img>
          <img width={25} height={25} className="ml-3" src="/circle-plus-solid.svg"></img>
          <p className="ml-2 text-sm">FOOD EXPENSES</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-4">
         <img width={25} height={25} src="/square-check-solid.svg"></img>

          <img width={25} height={25} className="ml-3" src="/chart-pie-solid.svg"></img>
          <p className="ml-2 text-sm">Transportation costs</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-4">
         <img width={25} height={25} src="/square-check-solid.svg"></img>

          <img width={25} height={25} className="ml-3" src="/gear-solid.svg"></img>
          <p className="ml-2 text-sm">Utilities bill</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-4">
         <img width={25} height={25} src="/square-check-solid.svg"></img>
          <img width={25} height={25} className="ml-3" src="/chart-simple-solid (3).svg"></img>
          <p className="ml-2 text-sm">Monthly Budget</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-4">
         <img width={25}  height={25} src="/square-check-solid.svg"></img>
          <img width={25} height={25} className="ml-3" src="/camera-solid.svg"></img>
          <p className="ml-2 text-sm">Entertainment Video</p>
         </div>

      </div>
      <div className=" mt-3">
            <p className="mb-2">Amount</p>
            <p className="mt-3">5.75 USD</p>
            <p className="mt-6">3.50 USD</p>
            <p className="mt-6">2.75 USD</p>
            <p className="mt-4">4.99 USD</p>
            <p className="mt-5">1.25 USD</p>
        

          </div>
          <div>
            <h1 className="mr-32 mt-3">Type</h1>
            <div className="flex justify-between flex-col mt-2">

        <div className="flex">
          
          <img width={20} height={20} className="ml-3" src="/lock-solid.svg"></img>
          <p className="ml-2 text-sm">Private</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-7">
          <img width={25} height={25} className="ml-3" src="/people-group-solid.svg"></img>
          <p className="ml-2 text-sm">Team View</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-7">

          <img width={25} height={25} className="ml-3" src="/gear-solid.svg"></img>
          <p className="ml-2 text-sm">Settings</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-4">
          <img width={20} height={20} className="ml-3" src="/thumbtack-solid.svg"></img>
          <p className="ml-2 text-sm">Personal Expenses</p>
          <div>
            
            <p></p>
          </div>
         </div>
         <div className="flex mt-4">
          <img width={25} height={25} className="ml-3" src="/people-group-solid.svg"></img>
          <p className="ml-2 text-sm">Family Gathering</p>
         </div>

      </div>
          </div>
          <div className="mr-22 flex flex-col justify-between">
            <h1>Date</h1>
            <p>24/08/2024 8:42AM</p>
            <p>24/08/2024 12:56AM</p>
            <p>23/08/2024 2:20PM</p>
            <p>23/08/2024 4:50PM</p>
            <p className="mb-3">23/08/2024 9:30AM</p>
          </div>
          <div className="mr-4 flex flex-col justify-between">
            <h1>Add</h1>
            
            <img  width={25} height={25} src="/share-solid.svg"></img>
            <img width={25} height={25} src="/share-solid.svg"></img>
            <img width={25} height={25} src="/share-solid.svg"></img>
            <img  width={25} height={25} src="/share-solid.svg"></img>
            <img className="mb-2" width={25} height={25} src="/share-solid.svg"></img>
            
          </div>
    </div>
      </div>
    </div>
  );
}
