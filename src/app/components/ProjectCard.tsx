import React, { useState, useEffect } from 'react'
import { CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline";
import Link from 'next/link';

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
}

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}: ProjectCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile/touch device
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || 
                           navigator.maxTouchPoints > 0;
      setIsMobile(isTouchDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <div>
        <div 
            className="h-52 md:h-72 rounded-t-xl relative group" 
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            {/* This overlay is visible on hover for desktop, always visible for mobile */}
            <div className={`items-center justify-center absolute top-0 left-0 w-full h-full 
                ${isMobile ? 'flex bg-black/60' : 'hidden group-hover:flex group-hover:bg-black/60'} 
                transition-all duration-500`}
            >
                <Link href={gitUrl} target="_blank"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                </Link>
                <Link href={previewUrl} target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                </Link>
            </div>
        </div>
        
        {/* Alternative mobile links that are always visible */}
        {isMobile && (
          <div className="flex justify-center space-x-4 py-2 bg-[#121212]">
            <Link href={gitUrl} target="_blank" className="flex items-center space-x-1 text-[#ADB7BE] hover:text-white">
              <CodeBracketIcon className="h-5 w-5" />
              <span>Code</span>
            </Link>
            <Link href={previewUrl} target="_blank" className="flex items-center space-x-1 text-[#ADB7BE] hover:text-white">
              <EyeIcon className="h-5 w-5" />
              <span>Demo</span>
            </Link>
          </div>
        )}
        
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard