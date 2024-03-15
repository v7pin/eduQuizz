import React from "react";

const FeaturesSection = () => {
  return (
    <div>
      <div className="py-1 px-6  font-mukta w-full text-center bg-blue-100  ">
        <h3
          className="text-6xl font-passion text-white tracking-wider "
          style={{ WebkitTextStroke: "2px  #000000" }}
        >
          EDUQUIZ'S FEATURES
        </h3>
      </div>
      <div className="cropCard flex flex-row gap-10 items-center justify-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 ">
        {/* Crop Prediction Card */}

        <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-20">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-full object-cover"
              src="inn.jpeg"
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Interactive Quizzes
              </h5>
            </a>
            <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
              Engage in interactive quizzes on various subjects to enhance your
              learning experience.
            </p>
          </div>
        </div>

        {/* Fertilizer Prediction Card */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-20">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-full object-cover"
              src="crr.jpeg"
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Collaborative Learning
              </h5>
            </a>
            <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
              Enhance your learning experience by collaborating with others in
              group study sessions.
            </p>
          </div>
        </div>

        {/* Plant Disease Prediction Card */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-20">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-full object-cover"
              src="fb.jpeg"
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Real-Time Feedback
              </h5>
            </a>
            <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
              Receive instant feedback on your quiz performance to improve your
              understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="cropCard flex flex-row gap-10 items-center justify-center bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100  ">
        {/* Crop Prediction Card */}

        <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-20">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-full object-cover"
              src="lb.jpeg"
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Leaderboard Rankings
              </h5>
            </a>
            <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
              Compete with others and see where you stand on the leaderboard.
            </p>
          </div>
        </div>

        {/* Fertilizer Prediction Card */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-20">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-full object-cover"
              src="en.jpeg"
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Share and Engage
              </h5>
            </a>
            <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
              Enhance your learning experience by collaborating with others in
              group study sessions.
            </p>
          </div>
        </div>

        {/* Plant Disease Prediction Card */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-20">
          <a href="#">
            <img
              className="rounded-t-lg h-64 w-full object-cover"
              src="gd.jpeg"
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Group Study Sessions
              </h5>
            </a>
            <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
              Collaborate with peers in live group study sessions for better
              understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
