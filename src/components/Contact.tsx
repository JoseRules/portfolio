export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-600">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-fuchsia-100 dark:bg-fuchsia-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-fuchsia-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-300">jose.flores@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-fuchsia-100 dark:bg-fuchsia-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-fuchsia-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-fuchsia-100 dark:bg-fuchsia-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-fuchsia-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Available for freelance work</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
