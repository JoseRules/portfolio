export function Work() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-600">Work Experience</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Senior Full-Stack Developer</h3>
                <p className="text-fuchsia-600 font-medium">TechCorp Solutions</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Led development of scalable web applications using React and Node.js. 
              Implemented CI/CD pipelines and improved team productivity by 40%.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Built responsive React applications serving 100K+ users</li>
              <li>• Designed and implemented RESTful APIs</li>
              <li>• Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend Developer</h3>
                <p className="text-fuchsia-600 font-medium">Digital Innovations Inc.</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">2020 - 2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Developed user interfaces for e-commerce platforms and mobile applications. 
              Collaborated with UX designers to create intuitive user experiences.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Created responsive web applications with React and Vue.js</li>
              <li>• Optimized application performance reducing load times by 50%</li>
              <li>• Implemented automated testing strategies</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Junior Developer</h3>
                <p className="text-fuchsia-600 font-medium">StartupXYZ</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">2019 - 2020</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Started my professional journey building web applications and learning 
              modern development practices in a fast-paced startup environment.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Developed features for web applications using JavaScript and PHP</li>
              <li>• Collaborated with cross-functional teams</li>
              <li>• Participated in agile development processes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
