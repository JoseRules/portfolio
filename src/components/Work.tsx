import ACIImage from "../assets/aci.png";
import ArtemImage from "../assets/artem.png";
import CandlelandiaImage from "../assets/candlelandia.png";
import { ReactIcon, TypeScriptIcon, NextIcon, JavascriptIcon, GitHubIcon, JestIcon, JavaIcon, SpringbootIcon } from "../assets/icons";

export function Work() {
  return (
    <>
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-600">Work Experience</h2>
        <div className="space-y-8">
          <div id="work-1" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web developer</h3>
                <p className="text-fuchsia-600 font-medium">Tata Consultancy Services</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2020 - Jun 2024</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Information Section */}
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Worked for American Century Investments in the main end user application of the company.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Built new features and resolved defects</li>
                  <li>• Frontend development using ReactJS and NextJS</li>
                  <li>• Backend development using Mulesoft and Springboot</li>
                  <li>• Test driven development using Jest and MUnit</li>
                  <li>• CI/CD pipelines using Openshift</li>
                  <li>• Worked in Agile/Scrum methodology</li>
                </ul>
              </div>
              
              {/* Image Section */}
              <div id="work-image-1" className="flex-shrink-0 md:w-80">
                <a 
                  href="https://www.americancentury.com/home/" 
                  className="block group transition-transform duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={ACIImage}
                      alt="ACI Project showcase"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Helpdesk Analyst (Tech Support)</h3>
                <p className="text-fuchsia-600 font-medium">NTT Data Services</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jul 2016 - Jan 2020</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tech support for hospital personnel.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Assist users by diagnosing issues and providing resolutions for technical services or care issues over the phone by remoting into the end user computers.</li>
              <li>• Use troubleshooting techniques and tools to identify products that are defective and follow guidelines in issuing service calls/contacts.</li>
              <li>• Review and update information for the team's knowledge base to ensure being up to date with the information from all 2nd and 3rd level teams.</li>
            </ul>
          </div>

        </div>
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-600 mt-12">Education</h2>
        <div className="space-y-8">
          <div id="work-1" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Java Full-Stack Developer Bootcamp</h3>
                <p className="text-fuchsia-600 font-medium">Generation Mexico</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2020 - Apr 2020</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Information Section */}
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Bootcamp to learn Java Full-Stack development, technical english and soft skills.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Front-end (JS, HTML, CSS, ReactJS)</li>
                  <li>• Back-end (Java, Springboot)</li>
                  <li>• Database (MySQL)</li>
                  <li>• Agile and Scrum methodology</li>
                  <li>• Soft skills (Technical English, Communication, Teamwork, Problem Solving)</li>
                  <li>• Final project creation: Artem</li>
                </ul>
              </div>
              
              {/* Image Section */}
              <div id="work-image-1" className="flex-shrink-0 md:w-80">
                <a 
                  href="" 
                  className="block group transition-transform duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={ArtemImage}
                      alt="Artem Project showcase"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Biomedical Engineering</h3>
                <p className="text-fuchsia-600 font-medium">Universidad de Guadalajara (CUCEI)</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2015 - Jun 2020</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Designs medical technology to improve diagnosis and treatment.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>Anatomy Knowledge:</strong> Study of human anatomy to understand how medical devices interact with the body.</li>
              <li>• <strong>Biomaterials:</strong> -Materials compatible with biological tissues for implants and devices.</li>
              <li>• <strong>Prosthetics:</strong> Design and development of functional artificial limbs and assistive devices.</li>
              <li>• <strong>Electronics:</strong> Circuits, sensors, and instrumentation used in medical equipment.</li>
              <li>• <strong>Embedded Programming:</strong> Programming is focused on embedded systems for medical device control and monitoring.</li>
            </ul>
          </div>

         </div>
       </div>
     </section>

     {/* Projects Section */}
     <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
       <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-600">Projects</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Project 1 */}
         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
           <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Candlelandia</h3>
               <p className="text-fuchsia-600 font-medium">Personal Project</p>
             </div>
             <span className="text-sm text-gray-500 dark:text-gray-400">Sep 2025 - Present</span>
           </div>
           <p className="text-gray-600 dark:text-gray-300 mb-4">
             Basic e-commerce website for a candle store.
           </p>
           
           {/* Tech Icons */}
           <div className="flex flex-wrap gap-2 mb-4">
             <ReactIcon className="w-6 h-6" size={24} color="#61DAFB" />
             <TypeScriptIcon className="w-6 h-6" size={24} color="#3178C6" />
             <NextIcon className="w-7 h-7" size={24} color="#000000" />
           </div>

          {/* Project Image and GitHub Link */}
          <div className="flex gap-4">
            <div className="flex-1">
              <a 
                href="https://candlelandia.vercel.app/" 
                className="block group transition-transform duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={CandlelandiaImage}
                    alt="Candlelandia Project showcase"
                    className="w-full h-80"
                  />
                  <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
             <div className="flex items-center">
               <a 
                 href="https://github.com/JoseRules/candlelandia" 
                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <GitHubIcon className="w-6 h-6" size={24} color="#333" />
               </a>
             </div>
           </div>
         </div>

         {/* Project 2 */}
         <div className="hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
           <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Task Management App</h3>
               <p className="text-fuchsia-600 font-medium">Team Project</p>
             </div>
             <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2024 - Feb 2024</span>
           </div>
           <p className="text-gray-600 dark:text-gray-300 mb-4">
             A collaborative task management application with real-time updates and team collaboration features.
           </p>
           
           {/* Tech Icons */}
           <div className="flex flex-wrap gap-2 mb-4">
             <NextIcon className="w-6 h-6" size={24} color="#000000" />
             <TypeScriptIcon className="w-6 h-6" size={24} color="#3178C6" />
             <JavascriptIcon className="w-6 h-6" size={24} color="#F7DF1E" />
           </div>

           {/* Project Image and GitHub Link */}
           <div className="flex gap-4">
             <div className="flex-1">
               <a 
                 href="https://taskmanager-demo.com" 
                 className="block group transition-transform duration-300 hover:scale-105"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-purple-500 to-pink-600">
                   <div className="w-full h-32 flex items-center justify-center text-white text-lg font-semibold">
                     Task Manager
                   </div>
                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                     </div>
                   </div>
                 </div>
               </a>
             </div>
             <div className="flex items-center">
               <a 
                 href="https://github.com/username/task-manager" 
                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <GitHubIcon className="w-6 h-6" size={24} color="#333" />
               </a>
             </div>
           </div>
         </div>

         {/* Project 3 */}
         <div className="hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
           <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Weather Dashboard</h3>
               <p className="text-fuchsia-600 font-medium">Personal Project</p>
             </div>
             <span className="text-sm text-gray-500 dark:text-gray-400">Nov 2023 - Dec 2023</span>
           </div>
           <p className="text-gray-600 dark:text-gray-300 mb-4">
             A responsive weather dashboard with location-based forecasts and interactive charts.
           </p>
           
           {/* Tech Icons */}
           <div className="flex flex-wrap gap-2 mb-4">
             <ReactIcon className="w-6 h-6" size={24} color="#61DAFB" />
             <JavascriptIcon className="w-6 h-6" size={24} color="#F7DF1E" />
             <JestIcon className="w-6 h-6" size={24} color="#C21325" />
           </div>

           {/* Project Image and GitHub Link */}
           <div className="flex gap-4">
             <div className="flex-1">
               <a 
                 href="https://weather-dashboard-demo.com" 
                 className="block group transition-transform duration-300 hover:scale-105"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-cyan-600">
                   <div className="w-full h-32 flex items-center justify-center text-white text-lg font-semibold">
                     Weather App
                   </div>
                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                     </div>
                   </div>
                 </div>
               </a>
             </div>
             <div className="flex items-center">
               <a 
                 href="https://github.com/username/weather-dashboard" 
                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <GitHubIcon className="w-6 h-6" size={24} color="#333" />
               </a>
             </div>
           </div>
         </div>

         {/* Project 4 */}
         <div className="hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
           <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Blog Platform</h3>
               <p className="text-fuchsia-600 font-medium">Open Source</p>
             </div>
             <span className="text-sm text-gray-500 dark:text-gray-400">Sep 2023 - Oct 2023</span>
           </div>
           <p className="text-gray-600 dark:text-gray-300 mb-4">
             A modern blog platform with markdown support, comments, and admin dashboard.
           </p>
           
           {/* Tech Icons */}
           <div className="flex flex-wrap gap-2 mb-4">
             <JavaIcon className="w-6 h-6" size={24} color="#ED8B00" />
             <SpringbootIcon className="w-6 h-6" size={24} color="#6DB33F" />
             <ReactIcon className="w-6 h-6" size={24} color="#61DAFB" />
             <TypeScriptIcon className="w-6 h-6" size={24} color="#3178C6" />
           </div>

           {/* Project Image and GitHub Link */}
           <div className="flex gap-4">
             <div className="flex-1">
               <a 
                 href="https://blog-platform-demo.com" 
                 className="block group transition-transform duration-300 hover:scale-105"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-orange-500 to-red-600">
                   <div className="w-full h-32 flex items-center justify-center text-white text-lg font-semibold">
                     Blog Platform
                   </div>
                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                     </div>
                   </div>
                 </div>
               </a>
             </div>
             <div className="flex items-center">
               <a 
                 href="https://github.com/username/blog-platform" 
                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <GitHubIcon className="w-6 h-6" size={24} color="#333" />
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
     </section>
    </>
   )
 }
