import dogImg from '../assets/dog-5.png'


export default function AboutUs() {
  return (
    <div>
      <div className="max-w-screen dark:text-white relative flex items-center justify-center overflow-hidden">
        <div className="relative mx-auto h-full px-4 sm:max-w-xl md:max-w-full max-w-screen-4xl md:px-24 lg:px-8">
        <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
          <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className="relative">
              <div className="absolute top-0 -left-48 z-0 opacity-50">
                {/* <img src={dogImg} className="w-36 z-0 h-full object-fill fill-y text-y"/> */}
              </div>
              <div className="lg:max-w-4xl lg:pr-5 relative md:ml-24">
                <p className="flex text-xl font-bold uppercase ">About Us</p>
                <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                  Professional Care for Your
                  <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-g4 animate__animated animate__flash">Beloved Pets</span>
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 ">
                  Welcome to our dog washing service! Our team of skilled groomers is passionate about providing the best care for your furry friends. We ensure a stress-free and enjoyable grooming experience for every dog.
                </p>
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <a href="/" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  mb-3 inline-flex h-12 w-full items-center justify-center rounded-xl bg-cyan-600 px-6 font-medium tracking-wide text-white shadow-md  hover:bg-cyan-700 focus:outline-none md:mr-4 md:mb-0 md:w-auto ">
                    View More
                  </a>
                  <a href="/" aria-label="" className="group inline-flex items-center hover:underline font-semibold text-g1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    Watch how it works
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <div className="max-h-screen-4xl mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                <img src={dogImg} alt="Dog being washed"/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:text-9xl sm:text-wrap sm:text-center absolute top-8 left-1/3  text-g/10 ">About Us</div>
      </div>
    </div>
  );
}
