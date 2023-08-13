import React from "react";

export default function Experience() {
  return (
    <div className="w-full flex justify-center  bg-gray-light-50 dark:bg-gray-dark-50 ">
      <div className="container flex flex-col justify-center items-center lg:py-24 py-16 w-full">
        <h2 className="py-1 px-5 text-[14px] font-medium bg-gray-light-200 dark:bg-gray-dark-200 dark:text-gray-dark-600 rounded-xl mb-4">
          Experience
        </h2>
        <p className="text-[20px] text-gray-light-600 dark:text-gray-dark-600 font-normal text-center">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className="w-full flex justify-center mt-12">
          <div className="w-[80%] flex justify-center p-8 bg-gray-light-100 dark:bg-gray-dark-100 font-normal ">
            <p className="text-[20px] text-gray-light-600 dark:text-gray-dark-600 font-normal">Comming soon ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
