import React from 'react'
import GitHubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

export const EmailSection = () => {
  return (
    <section id="contact" 
    className="my-12 md:my-12 py-24 relative">
      <div className="border-2 border-gray-600 rounded-lg p-6 bg-gray-900 shadow-lg">
        <div className="absolute top-5/8 left-0 -translate-x-1/2 translate-y-0">
          <div className="bg-rose-600 opacity-70 h-72 w-72 rounded-full blur-3xl"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="z-10">
            <h5 className="text-4xl font-bold text-white my-2">
              Let's Connect!
            </h5>
            <p className="text-whit mb-4 max-w-md">
              I am currently searching for any new career opportunities related to Full Stack Software Engineering or AI/ML. My inbox is always open.
              Whether you have any questions regarding my work or just want to say hello, I will do my best to respond to you as soon as I can!
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="https://github.com/sutpat1"  target="_blank">
                <Image src={GitHubIcon} alt="Github Icon" />
              </Link>
              <Link href="https://linkedin.com/in/sharvutpat/"  target="_blank">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
          </div>
          
          <div>
            <form className="flex flex-col">
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className="text-white block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="john@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hello"
                />
              </div>
              <div className="mb-6">
                <label 
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-pink-700 hover:bg-pink-600 font-medium py-2.5 px-5 rounded-lg w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailSection;