"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-5">
                <li>Java</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>Python</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Spring Boot</li>
                <li>Git</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-5">
                <li>Bachelor of Science in Computer Science - University of Texas at Dallas</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-5">
                <li>AWS Certified AI Practitioner</li>
                <li>AWS Certified Cloud Practitioner</li>
                <li>JPMC Software Engineering Virtual Experience</li>
                <li>React.js Essential Training</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white min-h-screen flex items-center">
            <div className="py-8 px-4 sm:py-16 xl:px-16 w-full">
                {/* Combined container with border */}
                <div className="border-2 border-gray-600 rounded-lg p-6 bg-gray-900 shadow-lg">
                    <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
                        {/* Image Section */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/about-image.png"
                                width={500}
                                height={500}
                                alt="Image of Computer"
                                className="object-cover rounded-md" // Added rounded corners to the image
                            />
                        </div>

                        {/* About Me Section */}
                        <div className="mt-6 md:mt-0 text-left flex flex-col justify-start">
                            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                            <p className="text-base lg:text-lg">
                                I am deeply passionate about full stack software engineering. This past summer of 2024,
                                I completed a Software Engineering Internship at USAA where I expanded my work experience by building a payments technology 
                                web tool. I have experience working with Java, JavaScript, C++, Python, React.js, Next.js, Node.js, SQL, HTML, CSS, Springboot, and Git.
                                I am also heavily interested AI and ML, specifically with regards to LLMs with regard to how they can be used to build tools to enhance business
                                and personal productivity. I enjoy working in collaborative environments where I can discuss and work with qualified professionals 
                                to build important and relevant applications.
                            </p>
                        </div>
                    </div>

                    {/* Tab Buttons - Moved outside the grid but still inside the border */}
                    <div className="mt-8">
                        <div className="flex flex-row justify-start">
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                Skills
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                Education
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("certifications")}
                                active={tab === "certifications"}
                            >
                                Certifications
                            </TabButton>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-6">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;