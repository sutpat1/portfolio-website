"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sutpat1/my-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Fast Food AI Chatbot Application",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sutpat1/CapstoneChatBot",
    previewUrl: "https://innoutchatbox.onrender.com/",
  },
  {
    id: 3,
    title: "Growin' Buds Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sutpat1/Growin-Buds",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Connect 4 Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sutpat1/Connect4Project",
    previewUrl: "/",
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
    <>
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
    </>
  )
}

export default ProjectsSection