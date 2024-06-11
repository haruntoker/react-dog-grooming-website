import dogHeader from "../assets/dog-header.png"
import Lottie from 'lottie-react';
import animationData from "../assets/Animation.json";


export default function Hero() {
  return (
    <section className=" bg-white dark:bg-gray-900 ">
       {/* Lottie animation as background */}
       <div className="absolute mt-20 inset-0 z-0 pointer-events-none">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="grid max-w-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* title */}
        <div className="flex flex-col  items-center justify-center mx-auto lg:col-span-7">
          <h1 className="max-w-4xl mb-4  text-4xl font-extrabold tracking-widest leading-none text-center md:text-6xl xl:text-8xl dark:text-white">
            WE ARE FLUFFU
          </h1>
          <p className="max-w-xl mb-6 font-light tracking-widest text-center text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            One of the key features of Fluffu is an individual approach to each dog. Groomers conduct a preliminary consultation with the owner to understand the characteristics and needs of a particular pet. This allows you to create the most comfortable and safe environment for the dog during the grooming procedure.
          </p>
          <a href="#" className="mb-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 inline-flex items-center justify-center px-9 md:px-28 md:text-2xl tracking-widest py-3 text-base font-medium text-center text-white rounded-lg dark:bg-cyan-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
          </a>
          <a href="#" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 inline-flex items-center justify-center px-5 md:px-28 md:text-2xl tracking-wide py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:bg-slate-600 bg-cyan-500  dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Book A Shower
          </a>
        </div>
        {/* img */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:items-center lg:justify-center">
          <img src={dogHeader} alt="mockup" />
        </div>
      </div>
    </section>
  );
}



