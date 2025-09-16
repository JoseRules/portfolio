import { GitHubIcon, JavascriptIcon, NextIcon, NodeIcon, ReactIcon, TypeScriptIcon } from "../assets/icons";
import TechSign from "./TechSign";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-600">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hello, I'm Jose Flores</h3>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating innovative solutions and bringing ideas to life through code.
            </p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              With experience in React, Node.js, and cloud technologies, I enjoy building 
              scalable applications that make a difference in people's lives.
            </p>
            <div className="flex flex-wrap gap-3">
              <TechSign>
                <ReactIcon className="w-6 h-6" size={16} color="#c800de" />
                ReactJS
              </TechSign>
              <TechSign>
                <TypeScriptIcon className="w-6 h-6" size={16} color="#c800de" />
                TypeScript
              </TechSign>
              <TechSign>
                <NodeIcon className="w-6 h-6" size={16} color="#c800de" />
                NodeJS
              </TechSign>
              <TechSign>
                <NextIcon className="w-6 h-6" size={16} color="#c800de" />
                NextJS
              </TechSign>
              <TechSign>
                <JavascriptIcon className="w-6 h-6" size={16} color="#c800de" />
                JavaScript
              </TechSign>
              <TechSign>
                <GitHubIcon className="w-6 h-6" size={16} color="#c800de" />
                GitHub
              </TechSign>
            </div>
          </div>
          <div className="text-center">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
              JF
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
