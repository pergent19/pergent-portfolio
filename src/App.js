import './App.css';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
