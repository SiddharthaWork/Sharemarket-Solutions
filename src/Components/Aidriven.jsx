"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    { id: 1, title: "AI-Driven Analytics", des: "Empower your decisions with AI-powered insights, predictive analytics, and data visualization tools to identify trends and opportunities.", image: "icon1.svg" },
    { id: 2, title: "Customizable User Interfaces", des: "Enjoy a tailored experience with dashboards that adapt to your preferences, whether you're a novice investor or a seasoned trader.", image: "icon2.svg" },
    { id: 3, title: "Seamless Transaction Management", des: "Execute trades with speed and reliability while ensuring secure payment gateways and encryption for maximum safety.", image: "icon3.svg" },
    { id: 4, title: "Portfolio Optimization Tools", des: "Optimize investments with tools that evaluate risk, returns, and market conditions, enabling balanced and strategic portfolio management.", image: "icon4.svg" },
    { id: 5, title: "Regulatory Compliance & Reporting", des: "Ensure adherence to financial regulations with built-in compliance checks and detailed reporting features for audits and transparency.", image: "icon5.svg" },
];

const pic = [
    { id: 1, image: "logo1.svg" },
    { id: 2, image: "logo2.svg" },
    { id: 3, image: "logo3.svg" },
    { id: 4, image: "logo4.svg" },
    { id: 5, image: "logo5.svg" },
];

const Aidriven = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPicIndex, setCurrentPicIndex] = useState(0);

    useEffect(() => {
        // Sync pic and card rotation times
        const interval = setInterval(() => {
            setCurrentPicIndex((prevIndex) => (prevIndex + 1) % pic.length);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 4000); // Shared interval time

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="w-full h-full lg:h-[42rem] px-24 md:py-20 py-12 bg-white">
                <div className="flex justify-center lg:flex-row flex-col items-center md:mx-24 md:gap-20 lg:gap-32 xl:gap-0">
                    {/* Image rotation */}
                    <div className="w-1/2 h-full flex justify-center items-center flex-col">
                        <div className="md:w-[32rem] md:h-[32rem] w-[15rem] h-[28rem] overflow-hidden relative">
                            <div className="absolute w-full h-full">
                                <img
                                    src={pic[currentPicIndex].image}
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Card animation */}
                    <div className="w-1/2 h-full flex justify-center items-center flex-col gap-4 md:px-0 px-4">
                        <div className="md:w-[32rem] md:h-[20rem] lg:w-[25rem] lg:h-[20rem] xl:w-[32rem] xl:h-[20rem]  w-[18rem] h-[25rem] overflow-hidden relative">
                            <AnimatePresence>
                                <motion.div
                                    key={items[currentIndex].id}
                                    initial={{ y: 400, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -300, opacity: 0 }}
                                    transition={{
                                        duration: 1, // Match animation duration with pic rotation
                                    }}
                                    className="absolute w-full h-full bg-[#BFE5F8] border-[1rem] border-[#1181B8] rounded-3xl flex flex-col justify-start items-center p-6 space-y-4"
                                >
                                    <img
                                        src={items[currentIndex].image}
                                        alt=""
                                        className="w-[4rem] h-[4rem]"
                                    />
                                    <div className="flex justify-center items-center flex-col">
                                        <h1 className="text-2xl font-semibold font-nunito text-black">
                                            {items[currentIndex].title}
                                        </h1>
                                        <p className="text-base font-nunito text-black text-justify">
                                            Empower your decisions with AI-powered insights, predictive analytics, and data visualization tools to identify trends and opportunities.
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aidriven;
