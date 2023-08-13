import React from "react";
import { LuMapPin, LuInstagram, LuGithub, LuTwitter } from "react-icons/lu";
export default function Hero() {
  return (
    <div className=" container w-full px-4 py-16 lg:px-6 lg:py-24 flex flex-col  justify-between lg:flex-row">
      <div className="w-full flex flex-col justify-center max-w-[780px] lg:pr-8 order-2 lg:order-1">
        <h1 className="text-[36px] lg:text-[60px] font-bold tracking-tight dark:text-gray-dark-900">Hi, I'm reza </h1>
        <p className="font-[16px] font-normal text-gray-light-600 dark:text-gray-dark-600 leading-6 mb-12">
          My name is Reza Barzakhi and I am 28 years old. I am a web developer with some skills in HTML, CSS, and
          JavaScript. I am currently learning React.js and am excited to continue expanding my knowledge in the field of
          web development.
        </p>
        <div className="flex items-center gap-2 mb-2  dark:text-gray-dark-600 text-gray-light-600">
          <LuMapPin className="w-6 h-6" />
          <p>Mashhad, Iran</p>
        </div>
        <div className="flex items-center gap-2 mb-2 dark:text-gray-dark-600 text-gray-light-600">
          <span className="w-6 h-6 flex justify-center items-center">
            <div className="w-2 h-2 bg-green-700 rounded" />
          </span>
          <p> Availble for new projects</p>
        </div>
        <div className="flex gap-4 mt-12 dark:text-gray-dark-600 text-gray-light-600">
          <button className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 [&_svg]:w-8 [&_svg]:h-8">
            <LuTwitter />
          </button>
          <button className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 [&_svg]:w-8 [&_svg]:h-8">
            <LuGithub />
          </button>
          <button className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 [&_svg]:w-8 [&_svg]:h-8">
            <LuInstagram />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-end mb-12 lg:mb-0 lg:ml-8 order-1 lg:order-2 bg-transparent">
        <div className="flex justify-center w-[280px] h-[280px] lg:w-[280px] lg:h-[320px] bg-gray-light-200 dark:bg-gray-dark-200 border-solid border-8 border-gray-light-default dark:border-gray-dark-default">
          <img
            src="./images/me.jpg"
            alt="reza"
            className="w-[240px] h-[280px] bottom-6 lg:w-[280px] lg:h-[320px] relative lg:bottom-14 lg:right-10 border-8 border-gray-light-default object-cover dark:border-gray-dark-default "
          />
        </div>
      </div>
    </div>
  );
}
