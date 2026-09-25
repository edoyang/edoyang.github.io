import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about">
          <h2>About Me</h2>
          <p>
            Software engineer and full stack developer, originally from Bogor
            (West Java) and Pontianak (West Kalimantan) in Indonesia, and
            currently living in Sydney CBD, Australia. Passionate about creating
            modern web applications with clean code and great user experiences.
          </p>
          <About />
        </section>

        <Experiences />

        <section id="projects">
          <h2 className="title">Featured work</h2>
          <p className="description">
            Showcasing some of my projects and technical achievements
          </p>
          <Project />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
