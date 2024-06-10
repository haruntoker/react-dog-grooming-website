import dogHeaderSub from "../assets/dog-3.png"


export default function Hero() {
    return (
      <section className="bg-white dark:bg-gray-900 sm:mb-20 sm:mt-20 md:mb-8 md:mt-6">
      <div className="grid max-w-screen-4xl px-20 mt-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* image */}
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={dogHeaderSub} alt="mockup"/>
          </div>

        {/* title */}
          <div className="m-auto place-self-center lg:col-span-7">
              <h1 className="max-w-4xl mb-4 text-4xl font-extrabold tracking-widest leading-none md:text-8xl md:text-centre xl:text-8xl sm:text-center dark:text-white">ABOUT US</h1>
              <p className="max-w-2xl mb-6 font-light tracking-widest md:indent-8 text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">Flufful is a brand that specializes in providing professional dog grooming services. They provide the highest quality and care for pets by partnering with experienced
groomers and using innovative techniques and grooming.</p>
              <a href="#" className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg dark:bg-cyan-700  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Speak to Sales
              </a> 
          </div>
                        
      </div>
  </section>
    )
  }
  