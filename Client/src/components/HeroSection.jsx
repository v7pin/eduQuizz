import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section class="bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Welcome to EduQuiz
            </h1>

            <p class="max-w-2xl mb-6 font-madimi text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Enhance your learning through interactive quizzes on various
              subjects!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="heroo.png" alt="hero image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
