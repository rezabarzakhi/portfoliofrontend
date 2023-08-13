import React from "react";

export default function About() {
  return (
    <div className="w-full flex justify-center bg-gray-light-50 dark:bg-gray-dark-50 ">
      <div
        id="about"
        className=" container flex flex-col justify-center items-center lg:py-24 py-16 w-full">
        <h2 className="py-1 px-5 text-[14px] font-medium bg-gray-light-200 dark:bg-gray-dark-200 dark:text-gray-dark-600 rounded-xl mb-12">
          About Me
        </h2>
        <div className="flex flex-col  lg:flex-row mt-12 px-8">
          <div className="flex flex-1 justify-center lg:justify-start items-end mb-12 lg:mb-0 lg:ml-8 bg-transparent">
            <div className="flex  justify-center w-[280px] h-[280px] lg:w-[400px] lg:h-[480px] bg-gray-light-200 dark:bg-gray-dark-200 border-solid border-8 border-gray-light-50 dark:border-gray-dark-50">
              <img
                src="./images/me.jpg"
                alt="reza"
                className="w-[240px] h-[280px] bottom-6 lg:w-[400px] lg:h-[480px] relative lg:bottom-14 lg:left-10 border-8 border-gray-light-50 object-cover dark:border-gray-dark-50 "
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="lg:text-[30px] text-[24px] font-semibold tracking-tighter mb-6 text-gray-light-900 dark:text-gray-dark-900">
              Curious about me? Here you have it:
            </h2>
            <p className="text-[16px] text-gray-light-600 dark:text-gray-dark-600">
              I'm a math teacher and frontend developer with experience in HTML, CSS, JavaScript, and React. With a love
              for technology and a keen interest in exploring new developments, I'm eager to grow my skills and
              knowledge in the field. My passion for front-end development has allowed me to create visually appealing
              websites and applications, and I'm always striving to learn more and improve my abilities. While I may not
              be as experienced as some, I am dedicated to my craft and willing to put in the hard work to become a
              skilled and valuable member of any team. When I'm not working on projects or studying, I enjoy playing
              video games, particularly titles such as The Witcher 3 and the Lord of the Rings series. My love for
              gaming and technology is a testament to my interest in all things innovative and cutting-edge. Overall, I
              am a motivated individual with a passion for technology and a desire to improve my skills in front-end
              development. I believe that with dedication and hard work, I can become a valuable asset to any team in
              need of a frontend developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
