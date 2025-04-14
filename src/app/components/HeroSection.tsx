"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Sharv Utpat',
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

          <p className="text-[#ADB7BE] text-base text-lg mb-6 lg:text-xl">
            {/* Optional: Add a short bio here */}
          </p>

          <div className="mt-6">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <button
              onClick={() => window.open("/documents/April2025CVSharvUtpat.pdf", "_blank")}
              className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <div className="col-span-4 flex justify-center items-center mt-10 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex justify-center items-center">
            <Image
              src="/images/SharvWhiteBackground.png"
              alt="hero image"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
