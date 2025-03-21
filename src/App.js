import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
