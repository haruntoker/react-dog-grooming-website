

export default function CustomerService() {
  return (
    <div>
    
<section className=" py-8 antialiased  md:py-16">
  <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0">
    <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
      <h2 className="shrink-0 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:text-5xl">Frequently Asked Questions</h2>

      <form className="mt-4 w-full gap-6 sm:flex sm:items-center sm:justify-end lg:mt-0 md:text-lg">
        <label for="simple-search" className="sr-only">Search</label>
        <div className="relative w-full flex-1 lg:max-w-sm ">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search Questions & Answers" required />
        </div>

        <button type="button" data-modal-target="question-modal" data-modal-toggle="question-modal" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 w-full shrink-0 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-medium hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 sm:mt-0 sm:w-auto md:text-lg dark:text-white text-black">Ask a question</button>
      </form>
    </div>
      {/* background item */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
        <div className="space-y-4 py-6 md:py-8">
          <div className="grid gap-4">
            <div>
              <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 3 answers </span>
            </div>

            <a href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white md:text-3xl">“What is the best way to bathe my dog at home?”</a>
          </div>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 md:text-xl">Use lukewarm water and dog-specific shampoo. Be gentle around the ears and eyes, and rinse thoroughly to avoid any soap residue.</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-lg">
            Answered 1 day ago by
            <a href="#" className="text-gray-900 hover:underline dark:text-white md:text-lg"> Sarah Johnson</a>
          </p>
        </div>

        <div className="space-y-4 py-6 md:py-8">
          <div className="grid gap-4">
            <div>
              <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 1 answer </span>
            </div>

            <a href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white md:text-3xl">“How often should I get my dog professionally groomed?”</a>
          </div>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 md:text-xl">It depends on the breed and coat type, but generally every 4-6 weeks is a good rule of thumb.</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-lg">
            Answered 2 days ago by
            <a href="#" className="text-gray-900 hover:underline dark:text-white md:text-lg"> Michael Lee</a>
          </p>
        </div>

        <div className="space-y-4 py-6 md:py-8">
          <div className="grid gap-4">
            <div>
              <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 7 answers </span>
            </div>
            <a href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white md:text-3xl">“What should I do if my dog is afraid of grooming?”</a>
          </div>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 md:text-xl">Gradually get your dog used to the grooming process. Start with short sessions and use treats to create a positive association.</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-lg">
            Answered 3 days ago by
            <a href="#" className="text-gray-900 hover:underline dark:text-white md:text-lg"> Emily Davis</a>
          </p>
        </div>

        <div className="space-y-4 py-6 md:py-8">
          <div className="grid gap-4">
            <div>
              <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 4 answers </span>
            </div>

            <a href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white md:text-3xl">“What products do you use for grooming?”</a>
          </div>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 md:text-xl">We use high-quality, hypoallergenic shampoos and conditioners tailored to your dog's specific coat type and skin condition.</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-lg">
            Answered 1 week ago by
            <a href="#" className="text-gray-900 hover:underline dark:text-white md:text-lg"> Amanda Brown</a>
          </p>
        </div>

        <div className="space-y-4 py-6 md:py-8">
          <div className="grid gap-4">
            <div>
              <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 2 answers </span>
            </div>

            <a href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white md:text-3xl">“Do you offer any specialized treatments?”</a>
          </div>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 md:text-xl">Yes, we offer treatments like flea baths, medicated baths, and deep conditioning for dry coats.</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-lg">
            Answered 5 days ago by
            <a href="#" className="text-gray-900 hover:underline dark:text-white md:text-lg"> James Wilson</a>
          </p>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-center lg:justify-start">
      <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  w-full rounded-lg border border-gray-200 bg-cyan-500 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-cyan-600 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-cyan-600 dark:text-gray-200 dark:hover:bg-cyan-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View more questions</button>
    </div>
  </div>
</section>


</div>
  )
}
