import React from 'react'

const items = [
    {
        id: 1,
        title: 'Healthcare',
        image: 'i1.svg',
    },
    {
        id: 2,
        title: 'eCommerce',
        image: 'i1.svg',
    },
    {
        id: 3,
        title: 'eLearning',
        image: 'i1.svg',
    },
    {
        id: 4,
        title: 'Tourism',
        image: 'i1.svg',
    },
    {
        id: 5,
        title: 'Banking',
        image: 'i1.svg',
    },
    {
        id: 6,
        title: 'Technology',
        image: 'i1.svg',
    },
    {
        id: 7,
        title: 'Sports',
        image: 'i1.svg',
    },
    {
        id: 8,
        title: 'Real Estate',
        image: 'i1.svg',
    },
    {
        id: 9,
        title: 'Automotive',
        image: 'i1.svg',
    },
    {
        id: 10,
        title: 'Hospitality',
        image: 'i1.svg',
    },
    {
        id: 11,
        title: 'Logistics',
        image: 'i1.svg',
    },
    {
        id: 12,
        title: 'Transportation',
        image: 'i1.svg',
    },
]
const Industry = () => {
  return (
    <div className='w-full h-auto lg:h-full md:h-full xl:h-[42rem] bg-[#2B2B2B] pt-12 relative pb-12'>
        <div className='max-w-8xl'>
        <h1 className='text-white text-center text-2xl md:text-4xl font-nunito font-bold mb-10'>
        Industries We Serve
        </h1>
        <div className='xl:-space-y-40 space-y-4'>
        <div className='grid grid-rows-2 justify-center place-items-center md:grid-cols-2 xl:grid-cols-6 gap-4 md:gap-4 lg:px-32  '>
            {items.filter((item, index) => index < 6).map((item) => (
                <div key={item.id} className='w-[11rem] h-[12rem] rounded-lg bg-white space-y-6'>
                    <div className='w-[90px] h-[90px] rounded-full bg-white mx-auto mt-5'>
                        <img src={item.image} alt="industry" className='w-full h-full object-cover' />
                    </div>

                    <div className='text-[#2B2B2B] font-nunito font-bold text-center text-lg'>
                        <h1>{item.title}</h1>
                    </div>  
                </div>
            ))}
        </div>
        <div className='xl:ml-[18rem]'>
        <div className='grid grid-rows-2 justify-center place-items-center md:grid-cols-2 xl:grid-cols-6 gap-4 md:gap-4 lg:px-32 xl:px-0'>
                        {items.filter((item, index=7) => index > 6).map((item) => (
                <div key={item.id} className='w-[11rem] h-[12rem] rounded-lg bg-white space-y-6'>
                    <div className='w-[90px] h-[90px] rounded-full bg-white mx-auto mt-5'>
                        <img src={item.image} alt="industry" className='w-full h-full object-cover' />
                    </div>

                    <div className='text-[#2B2B2B] font-nunito font-bold text-center text-lg'>
                        <h1>{item.title}</h1>
                    </div>  
                </div>
            ))}
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Industry;