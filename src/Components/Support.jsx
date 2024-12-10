import React from 'react'

const item = [
    {
        id: 1,
        title: '24/7 Dedicated Support',
        image: 'sicon1.svg'
    },
    {
        id: 2,
        title: 'Training and Support',
        image: 'sicon1.svg'
    },
    {
        id: 3,
        title: '24/7 Dedicated Support',
        image: 'sicon1.svg'
    }
]

const Support = () => {
    return (
        <div className='w-full h-full bg-[#2B2B2B]'>
            <div className='w-full h-full xl:h-[50rem] xl:px-32 px-8 py-2'>
                <div className='space-y-5'>
                    <h1 className='text-4xl font-nunito text-center text-white '>
                        Unmatched Support and Training
                    </h1>
                    <p className='text-xl font-nunito text-center text-white tracking-wider'>
                        We’re committed to more than just providing you with a product.<br />
                        We’re here to support your success every step of the way. Our team offers:
                    </p>
                </div>

                <div className='w-full h-full flex justify-center items-center flex-col xl:flex-row mt-16 lg:gap-12 xl:gap-0 gap-12'>

                    <div className='xl:w-1/2 w-full h-full flex justify-center items-start'>
                        <div className='grid grid-cols-1 gap-8'>
                            {item.map((item) => (
                                <div className='w-full h-full flex justify-center' key={item.id} > 
                                    <div className='lg:w-[35rem] md:w-[30rem] md:ml-10 md:h-[10rem] w-full h-[18rem] lg:ml-0 ml-4 bg-[#E7E7E7] border-r-[1rem] border-[#1181B8] flex justify-center items-center md:px-0 px-8 py-4 md:relative'>
                                        <div className='flex items-center w-auto h-[5rem] md:h-[10rem] absolute transform -translate-x-[4.5rem] md:-translate-x-[17.7rem] xl:-translate-x-[18.15rem] md:block md:left-[12.7rem] xl:left-[13.2rem] left-20 -translate-y-20 md:-translate-y-0'>
                                            <img src="sicon1.svg" alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='flex flex-col md:justify-start justify-center items-start w-full h-full lg:mx-28 md:mx-16 relative'>
                                            <h1 className='text-2xl font-semibold font-nunito text-[#1181B8] text-center'>
                                                {item.title}
                                            </h1>
                                            <p className='text-base font-nunito'>
                                                Our dedicated support team is available around the clock to resolve any issues and ensure smooth operation.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                // </div>
                            ))}
                        </div>
                    </div>

                    <div className='md:w-1/2 w-[16rem] h-full flex justify-center items-start '>
                        <img src="support.svg" alt="" className='w-[40rem] h-[563px ] object-contain ' />

                    </div>


                </div>

            </div>
            <div className='flex justify-center pb-10 mt-4'>
                <button className='rounded-md bg-[#46B9EA] text-white md:px-6 px-4 py-2 font-open-sans md:text-lg font-semibold hover:bg-white hover:text-[#46B9EA] border-2 border-[#46B9EA]'>
                    Get In Touch With Us
                </button>
            </div>

        </div>
    )
}

export default Support