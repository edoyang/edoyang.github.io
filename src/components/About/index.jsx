import techStacksData from "../../assets/techStacks.json";

const techLabels = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  vue: "Vue",
  redux: "Redux",
  flutter: "Flutter",
  nextjs: "Next.js",
  unity: "Unity",
  python: "Python",
  php: "PHP",
  dotnet: ".NET",
  express: "Express",
  mongodb: "MongoDB",
  mysql: "MySQL",
  github: "GitHub",
  wordpress: "WordPress",
};

const About = () => {
  return (
    <div className="tech-stacks">
      {Object.entries(techStacksData).map(([category, techs]) => (
        <div key={category} className="stacks">
          <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          <div className="stacks-icon">
            {techs.map((tech, index) => (
              <img
                key={index}
                src={`/tech-stacks/${tech}.svg`}
                alt={techLabels[tech] || tech}
                title={techLabels[tech] || tech}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
