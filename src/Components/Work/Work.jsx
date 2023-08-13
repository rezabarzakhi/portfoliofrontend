import React from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";

export default function Work() {
  return (
    <div className="w-full container">
      <div
        id="work"
        className="flex flex-col justify-center items-center lg:py-24 py-16 bg-gray-light-default dark:bg-gray-dark-default w-full px-4">
        <h2 className="py-1 px-5 text-[14px] font-medium bg-gray-light-200 dark:bg-gray-dark-200 dark:text-gray-dark-600 rounded-xl mb-4">
          Work
        </h2>
        <p className="text-[20px] text-gray-light-600 dark:text-gray-dark-600 font-normal text-center">
          Some of the noteworthy projects I have built:
        </p>
        {/*start  first card */}
        <div className="flex  flex-col lg:flex-row rounded-xl overflow-hidden  shadow-md mt-12">
          <div className="flex flex-1 max-w-[480px]  bg-gray-light-50 dark:bg-gray-dark-200 lg:p-12 p-8 ">
            <img
              className="rounded-xl w-[100%] h-[192px] lg:w-[480px] lg:h-[320px] object-cover lg:hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-lg"
              src="./images/me.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col gap-6 max-w-[480px] p-12 bg-gray-light-default dark:bg-gray-dark-100">
            <h3 className=" text-[20px] font-semibold text-gray-light-900 dark:text-gray-dark-900">Fiskil</h3>
            <p className="text-[16px] font-normal  text-gray-light-600 dark:text-gray-dark-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex gap-2 flex-wrap">
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                React
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                HTML
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                Tailwindcss
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                Git
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                JavaScript
              </p>
            </div>
            <div className="flex text-gray-light-600  gap-2">
              <LuExternalLink className="lg:w-[44px] lg:h-[44px] w-[36px] h-[36px] rounded-md cursor-pointer hover:bg-gray-light-100 dark:hover:bg-gray-dark-50 p-1.5" />
              <LuGithub className="lg:w-[44px] lg:h-[44px] w-[36px] h-[36px] rounded-md cursor-pointer hover:bg-gray-light-100 dark:hover:bg-gray-dark-50 p-1.5" />
            </div>
          </div>
        </div>
        {/*start  second card */}
        <div className="flex  flex-col lg:flex-row rounded-xl overflow-hidden  shadow-md mt-12">
          <div className="flex flex-1 flex-col max-w-[480px] lg:order-1 order-2 gap-6  w-full p-12 bg-gray-light-default dark:bg-gray-dark-100">
            <h3 className=" text-[20px] font-semibold text-gray-light-900 dark:text-gray-dark-900">Fiskil</h3>
            <p className="text-[16px] font-normal  text-gray-light-600 dark:text-gray-dark-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex gap-2 flex-wrap">
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                React
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                HTML
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                Tailwindcss
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                Git
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                JavaScript
              </p>
            </div>
            <div className="flex text-gray-light-600  gap-2">
              <LuExternalLink className="lg:w-[44px] lg:h-[44px] w-[36px] h-[36px] rounded-md cursor-pointer hover:bg-gray-light-100 dark:hover:bg-gray-dark-50 p-1.5" />
              <LuGithub className="lg:w-[44px] lg:h-[44px] w-[36px] h-[36px] rounded-md cursor-pointer hover:bg-gray-light-100 dark:hover:bg-gray-dark-50 p-1.5" />
            </div>
          </div>
          <div className="flex flex-1 max-w-[480px] order-1 lg:order-2 bg-gray-light-50 dark:bg-gray-dark-200 lg:p-12 p-8">
            <img
              className="rounded-xl w-[100%] h-[192px] lg:w-[480px] lg:h-[320px] object-cover lg:hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-lg"
              src="./images/me.jpg"
              alt=""
            />
          </div>
        </div>
        {/*start  third card */}
        <div className="flex  flex-col lg:flex-row rounded-xl overflow-hidden  shadow-md mt-12">
          <div className="flex flex-1  max-w-[480px] bg-gray-light-50 dark:bg-gray-dark-200 lg:p-12 p-8">
            <img
              className="rounded-xl w-[100%] h-[192px] lg:w-[480px] lg:h-[320px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-lg"
              src="./images/me.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col gap-6 max-w-[480px] w-full p-12 bg-gray-light-default dark:bg-gray-dark-100">
            <h3 className=" text-[20px] font-semibold text-gray-light-900 dark:text-gray-dark-900">Fiskil</h3>
            <p className="text-[16px] font-normal  text-gray-light-600 dark:text-gray-dark-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex gap-2 flex-wrap">
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                React
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                HTML
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                Tailwindcss
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                Git
              </p>
              <p className="px-5 py-1 bg-gray-light-200 dark:bg-gray-dark-200 rounded-xl text-gray-light-600 dark:text-gray-dark-600 text-[14px] font-medium">
                JavaScript
              </p>
            </div>
            <div className="flex text-gray-light-600  gap-2">
              <LuExternalLink className="lg:w-[44px] lg:h-[44px] w-[36px] h-[36px] rounded-md cursor-pointer hover:bg-gray-light-100 dark:hover:bg-gray-dark-50 p-1.5" />
              <LuGithub className="lg:w-[44px] lg:h-[44px] w-[36px] h-[36px] rounded-md cursor-pointer hover:bg-gray-light-100 dark:hover:bg-gray-dark-50 p-1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
