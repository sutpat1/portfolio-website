"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "For this project, I used React, Next.js, JavaScript, and Tailwind CSS to build a personal portfolio website. By leveraging React for dynamic content rendering and Next.js for server-side rendering and optimization, I created a fast, responsive, and SEO-friendly website. I focused on building a clean, user-friendly interface with Tailwind CSS to enhance styling and responsiveness, ensuring seamless navigation and a polished user experience",
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
    description: "I collaborated with a team of four developers to design and implement the user interface for a gardening application. Using JavaScript and React Native, we built a dynamic, cross-platform mobile app that ensured a responsive and intuitive user experience. My focus was on frontend development, UI/UX design, and ensuring seamless integration across devices. We also uploaded the app to Expo, enabling easy deployment, testing, and distribution for both iOS and Android platforms.",
    image: "/images/Plant.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sutpat1/Growin-Buds",
    previewUrl: "https://github.com/sutpat1/Growin-Buds",
  },
  {
    id: 4,
    title: "Connect 4 Application",
    description: "I collaborated with a team of three peers to develop a Connect Four game in MIPS assembly, deepening my knowledge of software and computer architecture. I gained experience with low-level instructions, memory management, and processor operations while implementing a UI/UX-focused graphical interface with bitmap graphics, optimizing software for graphics rendering within MIPS constraints.",
    image: "/images/Connect4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sutpat1/Connect4Project",
    previewUrl: "https://github.com/sutpat1/Connect4Project",
  },

]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

const filteredProjects = projectsData.filter((project) => 
  project.tag.includes(tag)
);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>

    <div className="text-white flex flex-row jusitfy-center items-center gap-2 py-6">
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


    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
    {filteredProjects.map((project) => (
    <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image} 
      tags={project.tag}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
      />
    ))}
    </div>
    </section>
  )
}

export default ProjectsSection