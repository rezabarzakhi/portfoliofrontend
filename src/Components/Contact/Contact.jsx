import React from "react";
import { LuCopy, LuMail, LuPhone, LuInstagram, LuGithub, LuTwitter } from "react-icons/lu";

export default function Contact() {
  async function copyToClipbord(text) {
    await navigator.clipboard.writeText(text);
    // alert("text-coped");
  }
  return (
    <div className=" container">
      <div
        id="contact"
        className="flex flex-col justify-center items-center lg:py-24 py-16 bg-gray-light-default dark:bg-gray-dark-default w-full px-4">
        <h2 className="py-1 px-5 text-[14px] font-medium bg-gray-light-200 dark:bg-gray-dark-200 dark:text-gray-dark-600 rounded-xl mb-4">
          Get in touch
        </h2>
        <p className="lg:text-[20px] text-lg text-gray-light-600 dark:text-gray-dark-600 font-normal lg:w-[60%] text-center">
          What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to
          connect.
        </p>
        <div className="flex items-center gap-4 md:gap-5 lg:mt-12 mt-6">
          <LuMail className="h-6 w-6 md:h-8 md:w-8 text-gray-light-500 dark:text-gray-dark-500" />
          <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-light-900 dark:text-gray-dark-900">
            reza.brzkhi@gmail.com
          </h2>
          <button
            onClick={() => copyToClipbord("reza.brzkhi@gmail.com")}
            className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 lg:[&_svg]:w-8 lg:[&_svg]:h-8 [&_svg]:w-6 [&_svg]:h-6">
            <LuCopy />
          </button>
        </div>
        <div className="flex items-center gap-4 md:gap-5  lg:mt-5 mt-1">
          <LuPhone className="h-6 w-6 md:h-8 md:w-8 text-gray-light-500 dark:text-gray-dark-500" />
          <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-light-900 dark:text-gray-dark-900">
            +98 9159106742
          </h2>
          <button
            onClick={() => copyToClipbord("+989159106742")}
            className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 lg:[&_svg]:w-8 lg:[&_svg]:h-8 [&_svg]:w-6 [&_svg]:h-6">
            <LuCopy />
          </button>
        </div>
        <p className="mt-12 text-base font-normal text-gray-light-600 dark:text-gray-dark-600">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-4 mt-2 dark:text-gray-dark-600 text-gray-light-600">
          <button className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 lg:[&_svg]:w-8 lg:[&_svg]:h-8 [&_svg]:w-6 [&_svg]:h-6">
            <LuTwitter />
          </button>
          <button className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 lg:[&_svg]:w-8 lg:[&_svg]:h-8 [&_svg]:w-6 [&_svg]:h-6">
            <LuGithub />
          </button>
          <button className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-dark-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600  [&_svg]:dark:stroke-gray-dark-600 [&_svg]:hover:stroke-gray-700  [&_svg]:dark:hover:stroke-gray-dark-700 lg:[&_svg]:w-8 lg:[&_svg]:h-8 [&_svg]:w-6 [&_svg]:h-6">
            <LuInstagram />
          </button>
        </div>
      </div>
    </div>
  );
}
