import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full">
        <body className="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-40 lg:px-8">
          {/* background item */}
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
          className="relative right-1/2 -z-20 aspect-[1155/678] w-[36.125rem] max-w-screen -translate-x-2/2 rotate-[40deg] bg-gradient-to-tr from-[#d662a4] to-[#483de9] opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        <div className="text-center ">
          <h1 className=" text-centre item-centre font-semibold text-cyan-600 md:text-9xl sm:text-5xl text-5xl">404</h1>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white  md:text-8xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-white  md:text-2xl">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md bg-red-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link to="/customer-service" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-lg font-semibold text-gray-900 dark:text-white ">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
           {/* background item */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d662a4] to-[#1507da] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        </div>
      </main>
    </>
  )
}
