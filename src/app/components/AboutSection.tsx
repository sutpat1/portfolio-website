"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
    title: string;
    id: string;
    content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
    {
        title: "Education",
        id: "education",
        content: (
            
            <div className="w-full px-4 py-3">
  <div className="flex flex-col md:flex-row items-center text-center md:text-left">
    <div className="mb-4 md:mb-0 md:mr-4 flex justify-center">
      <Image
        src="/images/UTD-logo.png"
        width={144}
        height={144}
        alt="UTD Logo"
        className="rounded-full border-2 border-gray-300"
      />
    </div>
    <div className="flex flex-col items-center md:items-start">
      <h2 className="font-bold text-lg md:text-xl mb-1">B.S. in Computer Science, The University of Texas at Dallas</h2>
      <p className="text-gray-400 mb-3">August 2021 - May 2025</p>
      <ul className="list-none text-center md:text-left">
        <li className="font-bold mb-1">CS^2 Computing Scholars Honors Program</li>
        <li className="font-bold">Collegium V Honors Program</li>
      </ul>
    </div>
  </div>
</div>
            
        ),
    },
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-5 font-bold">
                
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C++</li>
                <li>Python</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Spring Boot</li>
                <li>Git</li>
            </ul>
        ),
    },
   
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li className="flex items-center font-bold">
                <div className="w-16 h-16 mr-2 rounded-full overflow-hidden relative flex-shrink-0 mb-2 border-1 border-gray-300">
                    <Image 
                        src="/images/AWSLogoDark.png" 
                        alt="AWS Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                    AWS Certified AI Practitioner
                </li>
                <li className="flex items-center font-bold ">
                <div className="w-16 h-16 mr-2 rounded-full overflow-hidden relative flex-shrink-0 mb-2 border-1 border-gray-300">
                    <Image 
                        src="/images/AWSLogoDark.png" 
                        alt="AWS Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                    AWS Certified Cloud Practitioner
                </li>
                <li className="flex flex-row items-center font-bold mb-4">
  <div className="w-16 h-16 mr-3 rounded-full overflow-hidden relative flex-shrink-0 border border-gray-300">
    <Image
      src="/images/JPMCLogo.png"
      alt="JPMC Logo"
      fill
      className="object-contain scale-130 transform"
    />
  </div>
  <span className="self-center">JPMorgan Chase & Co. Software Engineering Virtual Experience</span>
</li>

                    <li className="flex flex-row items-center font-bold mb-4">
                        <div className="w-16 h-16 mr-3 rounded-full overflow-hidden relative flex-shrink-0 border border-gray-300">
                            <Image
                            src="/images/LinkedInIcon.png"
                            alt="LinkedIn Logo"
                            fill
                            className="object-contain"
                            />
                        </div>
                        <span className="self-center">React.js Essential Training</span>
                    </li>
            </ul>
        ),
    },
];

const AboutSection: React.FC = () => {
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="py-8 px-4 sm:py-16 xl:px-16 w-full">
            <h2 className="text-4xl font-bold text-white mb-4 text-center w-full mb-8">About Me</h2>
                <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-950 shadow-lg">
                    
                    <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/about-image.png"
                                width={600}
                                height={600}
                                alt="Image of Computer"
                                className="object-cover rounded-md"
                            />
                        </div>

                        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                            <p className="text-base lg:text-lg">
                                I am deeply passionate about full stack software engineering. This past summer of 2024,
                                I completed a Software Engineering Internship at USAA where I expanded my work experience by building a payments technology 
                                web tool. I have experience working with Java, JavaScript, C++, Python, React.js, Next.js, Node.js, SQL, HTML, CSS, Springboot, and Git.
                                I am also heavily interested in AI and ML, specifically with regards to LLMs with regard to how they can be used to build tools to enhance business
                                and personal productivity. I enjoy working in collaborative environments where I can discuss and work with qualified professionals 
                                to build important and relevant applications.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-lg">
                        <div className="flex flex-row justify-start">
                            
                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                Education
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                Skills
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("certifications")}
                                active={tab === "certifications"}
                            >
                                Certifications
                            </TabButton>
                        </div>

                        <div className="mt-8 text-lg">
                            {TAB_DATA.find((t) => t.id === tab)?.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
