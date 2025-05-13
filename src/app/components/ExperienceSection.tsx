"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "usaa",
    role: "Software Engineering Intern",
    company: "USAA",
    duration: "May 2024 - August 2024",
    description: [
      "From May to August 2024, I worked as a Full Stack Software Engineering Intern in the Payments Technology Department at USAA. During my internship, I contributed towards enhancing an internal customer service tool that enabled developers and other USAA employees to view and manage members' connected bank accounts. I improved the user interface using React.js and implemented backend REST API calls with Java and Spring Boot. Additionally, I built a search component to retrieve bank account details using member IDs and integrated CI/CD pipelines, OpenShift deployments, and automation tools to support a successful product launch. Outside of my core responsibilities, I also participated in the AWS Game Day Hackathon hosted at the company."
    ],
    skills: ["Java", "React.js", "Spring Boot", "REST APIs", "Javascript", "Git", "CI/CD Pipelines"]
  },
];

const ExperienceSection: React.FC = () => {
    const [activeExperience, setActiveExperience] = useState<string>("usaa");
  
    const handleExperienceClick = (id: string) => {
      setActiveExperience(id);
    };
    
    return (
      <section id="experience" className="text-white py-16">
        <h2 className="text-center text-4xl font-bold text-white mb-8">
          My Experience
        </h2>
        <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-950 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Experience Navigation */}
            <div className="lg:w-1/3">
              <div className="flex flex-row lg:flex-col justify-start">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="mb-4 mr-4 lg:mr-0 w-full">
                    <button
                      onClick={() => handleExperienceClick(exp.id)}
                      className={`px-4 py-2 text-lg text-left transition-all duration-300 rounded hover:bg-blue-900 w-full flex items-center gap-3${
                        activeExperience === exp.id
                          ? " text-white"
                          : " text-[#ADB7BE] hover:text-white"
                      }`}
                    >
                      {/* Add logo for USAA in the button */}
                      {exp.id === "usaa" && (
                        <div className="w-12 h-12 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white mr-3" style={{ minWidth: '48px', minHeight: '48px' }}>
                          <img
                            src="/images/USAANoBG.jpg"
                            alt="USAA Logo"
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold">{exp.role}</div>
                        <div className={`font-semibold ${activeExperience === exp.id ? "text-green-400" : "text-rose-400"}`}>
                          {exp.company}
                        </div>
                      </div>
                    </button>
                    <div
                      className={`h-1 bg-green-600 mt-2 transition-all duration-300 ${
                        activeExperience === exp.id ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Experience Details */}
            <div className="lg:w-2/3">
              {EXPERIENCE_DATA.map((exp) => (
                <motion.div
                  key={exp.id}
                  className={`${
                    activeExperience === exp.id ? "block" : "hidden"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4">
                    <div className="flex items-start gap-4">
                      {exp.id === "usaa" && (
                        <div className="w-24 h-24 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white" style={{ minWidth: '96px', minHeight: '96px' }} >
                          <img 
                            src="/images/USAANoBG.jpg" 
                            alt="USAA Logo" 
                            width={96}
                            height={96}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <h4 className="text-xl text-green-400 font-semibold">{exp.company}</h4>
                        <p className="text-gray-400 mb-4">{exp.duration}</p>
                      </div>
                    </div>
                  </div>
  
                  <ul className="list-disc pl-5 mb-6">
                    {exp.description.map((item, index) => (
                      <li key={index} className="mb-2 text-xl">
                        {item}
                      </li>
                    ))}
                  </ul>
  
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Skills Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-800 text-white px-3 py-1 rounded-full font-bold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;