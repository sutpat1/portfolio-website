"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import EmailSection from "./EmailSection";



const HeroSection= () => {
    return (
        <section className="lg:py-16"> 

        <div className = "grid grid-cols-1 lg:grid-cols-12">
            
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Hello, I am {""}
                </span>
                <br></br>
                <TypeAnimation
            sequence={[
            // Same substring at the start will only be typed out once, initially
            'Sharv Utpat',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'UT Dallas Graduate',
            1000,
            'Software Engineer',
            1000,
            'AI/ML Enthusiast',
            1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                 </h1>
                
                <p className="text-[#ADB7BE] text-base text-lg mb-6 lg:text-xl ">
                </p>
                <div className="mt-6">
                    <button 
                     //onClick={() => <EmailSection/>}
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 hover:bg-slate-200 text-white border border-white mt-3">
                        Hire Me
                    </button>
                    <button  
                     onClick={() => window.open("/documents/March2025CVSharvUtpat.pdf", "_blank")}
                    className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500 hover:bg-slate-800 text-white  mt-3">
                      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>  
                    </button>
                </div>
            </div>
            <div className="col-span-5 flex justify-center items-center">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg: w-[400px] lg: h-[400px] relative flex justify-center items-center">
                <Image 
                src="/images/SharvWhiteBackground.png" 
                alt="hero image" 
                className="rounded-full"
                width={375} 
                height={375} // Required for Next.js Image component
                />
                </div>
            </div>
        </div>
        </section>
    )
}
export default HeroSection;