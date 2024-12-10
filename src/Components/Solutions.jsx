import React from 'react'

const Solutions = () => {
  return (
    <div className='w-full h-full bg-[#2B2B2B] overflow-hidden'>
            <div className='flex justify-center w-full h-full pt-10'>
                <h1 className='text-white text-3xl md:text-4xl xl:text-4xl font-semibold font-open-sans text-center'>
                    Our Sharemarket Solutions
                </h1>
            </div>
        <div className='w-full h-full xl:h-[40rem] flex flex-col-reverse lg:flex-row px-4 md:px-12 lg:px-24 py-6 gap-8 lg:gap-6 xl:gap-36 '>

            <div className='w-full h-full flex flex-col justify-center items-center lg:items-start space-y-8 px-4 lg:px-0 '>
                <h1 className='text-white text-3xl md:text-4xl xl:text-4xl font-semibold font-open-sans leading-tight lg:leading-[3rem] text-center lg:text-left'>
                Real-Time Market Data
                </h1>
                <p className='text-white text-base md:text-lg font-normal font-nunito text-center lg:text-justify'>
                Stay ahead in the competitive trading landscape with instant access to live stock prices, detailed market trends, and comprehensive historical data. Our Share Market Solutions provide seamless integration with trusted financial data providers, ensuring you receive accurate and up-to-the-minute information.<br/>
                With advanced visualization tools like interactive charts and customizable dashboards, you can monitor market fluctuations, identify key trends, and track stock performance with ease. Whether you're analyzing short-term market movements or conducting long-term trend evaluations, our platform equips you with the insights needed to make well-informed trading decisions.
                </p>
                <button className='rounded-md bg-[#29AAE1] text-white lg:px-6 py-2 font-nunito px-4 lg:text-lg hover:bg-[#2090c0] transition-colors'>
                Hire Us To Build Your App
                </button>
            </div>

            <div className='w-full h-full flex justify-center items-center my-auto '>
                <img 
                    src="solution.svg" 
                    alt="Doctor illustration"  
                    className='w-full h-full object-cover'
                />
            </div>


        </div>
    </div>  
  )
}

export default Solutions