import React from "react";

export default function Skills() {

  return (
    <div>
      <div className="flex flex-col justify-center items-center lg:py-24 py-16 bg-gray-light-default dark:bg-gray-dark-default w-full">
        <h2 className="py-1 px-5 text-[14px] font-medium bg-gray-light-200 dark:bg-gray-dark-200 dark:text-gray-dark-600 rounded-xl mb-4">
          Skills
        </h2>
        <p className="text-[20px] text-gray-light-600 dark:text-gray-dark-600 font-normal text-center">
          This skils, Tools and technologies I am realy good at:
        </p>
        <div className="w-full lg:flex grid grid-cols-3 gap-8 justify-between mt-12">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 mb-2 hover:scale-110 transition-transform duration-500 ease-in-out"
              src="./images/icon-html.png"
              alt="html"
            />
            <p className="text-[18px] dark:text-gray-dark-600 text-gray-light-600">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 mb-2 hover:scale-110 transition-transform duration-500 ease-in-out"
              src="./images/css-icon.png"
              alt="css"
            />
            <p className="text-[18px] dark:text-gray-dark-600 text-gray-light-600">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 mb-2 hover:scale-110 transition-transform duration-500 ease-in-out"
              src="./images/icon-javscript.png"
              alt="JS"
            />
            <p className="text-[18px] dark:text-gray-dark-600 text-gray-light-600">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 mb-2 hover:scale-110 transition-transform duration-500 ease-in-out"
              src="./images/icon-react.png"
              alt="react"
            />
            <p className="text-[18px] dark:text-gray-dark-600 text-gray-light-600">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 mb-2 hover:scale-110 transition-transform duration-500 ease-in-out"
              src="./images/icon-tailwindcss.png"
              alt="tailwindcss"
            />
            <p className="text-[18px] dark:text-gray-dark-600 text-gray-light-600">Tailwindcss</p>
          </div>
        </div>
      </div>
    </div>
  );
}
