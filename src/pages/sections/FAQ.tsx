import React from "react";

function FAQ() {
  return (
    <div className="pb-[50px] pt-[58px] lg:pb-[100px] px-7 flex flex-col lg:flex-row gap-10 lg:gap-[58px] justify-center text-primary dark:text-white">
      <div className="w-[126px]">
        <p className="text-3xl font-commonsDemiBold lg:text-5xl">FAQ</p>
      </div>
      <div>
        <div className="relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              How is Stakemint Earn different from Smart Yield?
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
            <p className="pt-2 mr-6 text-lg font-commonsRegular">
              While Smart Yield is a great product, its main challenge is that
              it’s a one-size-fits-all approach. Every investor has access to
              the same level of risk and the same level of yield, regardless of
              their risk profile and investing preferences.
              <br />
              With Stakemint Earn, instead of being offered one yielding option
              per asset, you will be able to choose from multiple strategies
              based on their risk level and projected yield.
            </p>
          </div>
        </div>
        <div className="my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
        <div className="relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              How will I know the risk level of different strategies?
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-60">
            <p className="pt-2 mr-6 text-lg font-commonsRegular">
              There will be a Cyborg mood score for every strategy, with ratings
              ranging from Core (low risk) to Brave (high risk). These risk
              ratings are based on both the crypto asset you are investing in as
              well as the protocol the strategy you choose will give access to.
            </p>
          </div>
        </div>
        <div className="my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
        <div className="relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              Where can I learn more about different yielding strategies?
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-60">
            <p className="pt-2 mr-6 text-lg font-commonsRegular">
              Each strategy has a ‘Learn more’ section where you can learn more
              about the protocol generating your yield.
            </p>
          </div>
        </div>
        <div className="my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
        <div className="relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              Are the low-risk yielding strategies safe?
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-60">
            <p className="pt-2 mr-6 text-lg font-commonsRegular">
              Every investment involves risk, and this should be taken into
              consideration before investing any funds. However, the Cyborg mood
              ratings indicate the level of risk compared to other strategies
              for generating crypto yields.
            </p>
          </div>
        </div>
        <div className="my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
        <div className="relative w-full lg:w-[600px] overflow-hidden">
          <input
            type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
          />
          <div className="flex items-center w-full ">
            <p className="mr-5 text-lg font-semibold lg:mr-0 font-commonsDemiBold">
              Is there a minimum investment period?
            </p>
          </div>
          <div className="absolute top-0 right-0 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-60">
            <p className="pt-2 mr-6 text-lg font-commonsRegular">
              Most strategies only have a 24-hour lock-in period. Certain
              strategies might require you to lock your crypto for a longer
              period of time, though. If this is the case, it will be indicated
              in the app.
            </p>
          </div>
        </div>
        <div className="my-5 w-full lg:w-[600px] h-[1px] bg-gray-400" />
      </div>
    </div>
  );
}

export default FAQ;
