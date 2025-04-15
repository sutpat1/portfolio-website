"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "For this project, I used React, Next.js, TypeScript, and Tailwind CSS to build a responsive, SEO-friendly portfolio website. I leveraged React for dynamic content rendering and Next.js for optimized server-side rendering. The design features a clean, user-friendly interface styled with Tailwind CSS. I also implemented a functional contact form using the Resend email API with secure environment variables for API key management, demonstrating both third-party API integration and security best practices.",
    image: "/images/SquareBinder.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sutpat1/my-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Fast Food AI Chatbot Application",
    description: "I led a 4-member team to develop a full-stack AI-powered fast food chatbot for In-N-Out using Flask and spaCy, managing project planning and team coordination via Jira and Confluence. We used a Kanban board to ensure timely feature delivery. I applied ML-based NLP techniques with spaCy to process customer inquiries, enabling understanding of menu items, prices, and orders. I also built a dynamic menu system from a CSV file and designed a user-friendly web interface for seamless front-end and back-end integration.",
    image: "/images/In-n-out.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sutpat1/CapstoneChatBot",
    previewUrl: "https://innoutchatbox.onrender.com/",
  },
  {
    id: 3,
    title: "Growin' Buds Application",
    description: "I collaborated with a team of four developers to design and implement the user interface for a social media application for gardening. Using JavaScript and React Native, we built a dynamic, cross-platform mobile app that ensured a responsive and intuitive user experience. My focus was on frontend development, UI/UX design, and ensuring seamless integration across devices. We also uploaded the app to Expo, enabling easy deployment, testing, and distribution for both iOS and Android platforms.",
    image: "/images/Plant.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sutpat1/Growin-Buds",
    previewUrl: "https://github.com/sutpat1/growin-buds?tab=readme-ov-file#-live-demo",
  },
  {
    id: 4,
    title: "Connect 4 Application",
    description: "I collaborated with a team of three peers to develop a Connect Four game in MIPS assembly, deepening my knowledge of software and computer architecture. I gained experience with low-level instructions, memory management, and processor operations while implementing a UI/UX-focused graphical interface with bitmap graphics, optimizing software for graphics rendering within MIPS constraints.",
    image: "/images/Connect4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sutpat1/Connect4Project",
    previewUrl: "https://github.com/sutpat1/connect-4-project/blob/main/README.md#-getting-started",
  },

]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  }

const filteredProjects = projectsData.filter((project) => 
  project.tag.includes(tag)
);

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

  return (
    <section id="projects" className="my-12 md:my-12 py-24 relative">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Projects
      </h2>
      
      <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-950 shadow-lg relative">
        
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 z-10 relative font-bold">
          <ProjectTag onClick={handleTagChange} 
          name="All"
          isSelected={tag == "All"}
          />
          <ProjectTag onClick={handleTagChange} 
          name="Web"
          isSelected={tag == "Web"}
          />
          <ProjectTag onClick={handleTagChange} 
          name="Mobile"
          isSelected={tag == "Mobile"}
          />
        </div>

        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 z-10 relative">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
      </div>
    </section>
  )
}

export default ProjectsSection