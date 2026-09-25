const Hero = () => {
  return (
    <section id="hero" className="hero">
      <p className="eyebrow">Software Engineer &amp; Full Stack Web Developer</p>

      <h1>Edoardo (Edo Yang) - Software Engineer in Sydney, Australia</h1>

      <h2>Building Scalable &amp; Engaging Web Experiences</h2>

      <p>
        Hey there! I'm Edoardo, also known as Edo Yang (edoyangz), a software
        engineer and full stack developer from Bogor and Pontianak, Indonesia,
        now based in Sydney CBD, Australia. From crafting beautiful frontends to
        powering robust backends, I bring ideas to life with clean code and
        great design. Let's create something amazing together!
      </p>

      <div className="extras">
        <a href="/resume.pdf" target="_blank" download="Resume.pdf">
          <button className="btn-primary">Download My CV</button>
        </a>
      </div>

      <div className="infos">
        <div className="info">
          <span>2+</span>
          <p>Years of Experience</p>
        </div>

        <div className="info">
          <span>16+</span>
          <p>Projects Completed</p>
        </div>

        <div className="info">
          <span>2+</span>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
