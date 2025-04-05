import React from 'react'
import GitHubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'


export const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-4xl font-bold text-white my-2">
                Let's Connect!
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {""}
                I am currently searching for any new career opportunities related to Full Stack Software Engineering or AI/ML. My inbox is always open.
                Whether you have any questions regarding my work or just want to say hello, I will do my best to respond to you as soon as I can!


            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="github.com">
                    <Image src={GitHubIcon} alt="Github Icon" />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>


            </div>
        </div>
        <div>
            <form className="flex flex-col gap-4">
                <label htmlFor="email" className="text-white">Your email</label>
                <input type="email" 
                id="email" 
                required placeholder="jacob@gmail.com"
                className="p-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </form>
        </div>
        
    </section>
  )
}

export default EmailSection;