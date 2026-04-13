import { GitHubIcon, JavascriptIcon, NextIcon, NodeIcon, ReactIcon, TypeScriptIcon, JestIcon, CypressIcon, JavaIcon, SpringbootIcon } from "../assets/icons";
import TechSign from "./TechSign";
import JFImage from "../assets/perfil.png";

const technologiesList = [
  { name: 'ReactJS', icon: <ReactIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'TypeScript', icon: <TypeScriptIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'NodeJS', icon: <NodeIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'NextJS', icon: <NextIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'JavaScript', icon: <JavascriptIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'GitHub', icon: <GitHubIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'Jest', icon: <JestIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'Cypress', icon: <CypressIcon className="w-6 h-6" size={16} color="#c800de" /> },
  { name: 'Java', icon: <JavaIcon className="w-6 h-6" size={22} color="#c800de" /> },
  { name: 'Springboot', icon: <SpringbootIcon className="w-6 h-6" size={16} color="#c800de" /> },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-600">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <h3 className="text-2xl font-semibold mb-4">Hello, I'm Jose Flores</h3>
            <p className="text-lg mb-6 text-gray-300">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I love creating innovative solutions and bringing ideas to life through code.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              With experience in React, Node.js and more, I enjoy building
              scalable applications that make a difference in people's lives.
            </p>
            <div className="w-full relative py-2" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
              <div id="technologies" className="flex w-max animate-scroll-right pause-on-hover">
                <div className="flex gap-3 pr-3">
                  {technologiesList.map((tech, i) => (
                    <TechSign key={`tech-1-${i}`}>
                      {tech.icon}
                      {tech.name}
                    </TechSign>
                  ))}
                </div>
                <div className="flex gap-3 pr-3" aria-hidden="true">
                  {technologiesList.map((tech, i) => (
                    <TechSign key={`tech-2-${i}`}>
                      {tech.icon}
                      {tech.name}
                    </TechSign>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-75 h-75 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-black to-black p-1 animate-[spin_6s_linear_infinite]"></div>
              <img
                src={JFImage}
                alt="JF"
                className="w-74 h-74 object-cover rounded-full z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
