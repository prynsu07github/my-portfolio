import Navbar from './components/navbar'
import './App.css'
import Home from './Pages/home'
import About from './Pages/about'
import Projects from './Pages/project'
import Contact from './Pages/contact'
import Footer from './components/footer'

function App() {
    return (
    <div className='App overflow-hidden scroll-smooth'>
    <Navbar />
    <Home/>
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
