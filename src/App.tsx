import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { useFirstNotification } from './utils/useFirstNotification';

function App() {
  useFirstNotification();
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      
      {/* Main content with top padding to account for fixed navbar */}
      <main className="pt-16">
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App;