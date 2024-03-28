"use client";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
export const LandingFooter = () => {
  const copyrightYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <div className="bg-gradient-to-r flex flex-1 rounded-lg from-indigo-500 via-purple-500 to-pink-500 text-white border-0">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white-800 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get an update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-zinc-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Home
              </p>
              <p className="text-zinc-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Who We Are
              </p>
              <p className="text-zinc-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Our Philosophy
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white dark:text-white">
              AI Services
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-zinc-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Image Generation
              </p>
              <p className="text-zinc-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Video Generation
              </p>
              <p className="text-zinc-400 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Music Generation
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <div className="sm:flex sm:items-center sm:justify-center mb-5">
          {/* <div className="flex flex-1 gap-4 hover:cursor-pointer">
            {/* App Store/ Play Store */}
          {/* <Image
            src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
            width="130"
            height="110"
            alt=""
          /> */}
          {/* <Image
            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
            width="130"
            height="110"
            alt=""
          /> */}
          {/* </div> */}

          {/* icon of social media */}
          <div className="flex gap-4 hover:cursor-pointer ">
            <Image
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <Image
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <Image
              src="https://www.svgrepo.com/show/94698/github.svg"
              className=""
              width="30"
              height="30"
              alt="gt"
            />

            <Image
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
          </div>
        </div>
        <p className=" text-center md:text-center md:text-lg md:p-4">
          © {copyrightYear} You Company Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};
