import React from "react";

export default function Testimonials() {
  return (
    <div className="w-full flex justify-center  bg-gray-light-50 dark:bg-gray-dark-50 ">
      <div
        id="testimonials"
        className="container flex flex-col justify-center items-center lg:py-24 py-16 w-full">
        <h2 className="py-1 px-5 text-[14px] font-medium bg-gray-light-200 dark:bg-gray-dark-200 dark:text-gray-dark-600 rounded-xl mb-4">
          Testimonials
        </h2>
        <p className="text-[20px] text-gray-light-600 dark:text-gray-dark-600 font-normal ">
          Nice things people have said about me:
        </p>
        <div className="grid lg:grid-cols-3 gap-12 mt-12 p-4">
          <div className="flex flex-col lg:min-w-[300px] justify-center items-center flex-1 p-12 bg-gray-light-default dark:bg-gray-dark-100 rounded-xl">
            <img
              src="./images/me.jpg"
              className="w-16 h-16 rounded-full"
              alt=""
            />
            <p className="text-[16px] text-gray-light-600 dark:text-gray-dark-600 font-normal my-6">
              “Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and
              will rehire in the future for Frontend development.”
            </p>
            <h4 className="text-[20px] font-semibold text-gray-light-900 dark:text-gray-dark-900">John Doe</h4>
            <p className="text-[14px] text-gray-light-600 dark:text-gray-dark-600 font-normal">Founder - xyz.com</p>
          </div>
          <div className="flex flex-col min-w-[300px] justify-center items-center flex-1 p-12 bg-gray-light-default dark:bg-gray-dark-100 rounded-xl">
            <img
              src="./images/me.jpg"
              className="w-16 h-16 rounded-full"
              alt=""
            />
            <p className="text-[16px] text-gray-light-600 dark:text-gray-dark-600 font-normal my-6">
              “Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and
              will rehire in the future for Frontend development.”
            </p>
            <h4 className="text-[20px] font-semibold text-gray-light-900 dark:text-gray-dark-900">John Doe</h4>
            <p className="text-[14px] text-gray-light-600 dark:text-gray-dark-600 font-normal">Founder - xyz.com</p>
          </div>
          <div className="flex flex-col min-w-[300px] justify-center items-center flex-1 p-12 bg-gray-light-default dark:bg-gray-dark-100 rounded-xl">
            <img
              src="./images/me.jpg"
              className="w-16 h-16 rounded-full"
              alt=""
            />
            <p className="text-[16px] text-gray-light-600 dark:text-gray-dark-600 font-normal my-6">
              “Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and
              will rehire in the future for Frontend development.”
            </p>
            <h4 className="text-[20px] font-semibold text-gray-light-900 dark:text-gray-dark-900">John Doe</h4>
            <p className="text-[14px] text-gray-light-600 dark:text-gray-dark-600 font-normal">Founder - xyz.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
