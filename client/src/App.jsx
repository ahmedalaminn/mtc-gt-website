
import About from './components/About.jsx';
import Calendar from './components/Calendar.jsx';
import Contact from './components/Contact.jsx';
import Donate from './components/Donate.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';

function App() {
  return (
    <div className = "bg-gray-900">
      <Header/>

      <section id = "landing">
        <Landing/>
      </section>

      <section id = "about">
        <About/>
      </section>

      <section id = "calendar">
        <Calendar/>
      </section>

      <section id = "donate">
        <Donate/>
      </section>

      <section id = "contact">
        <Contact/>
      </section>

      <Footer/>
    </div>
  )
}

export default App