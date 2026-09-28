import experiencesData from "../../assets/experiences.json";

// A role that is still running gets the pulsing marker.
const isCurrent = (experience) => /present/i.test(experience.duration);

const Experiences = () => {
  return (
    <section id="experiences">
      {experiencesData.map((experience) => (
        <div
          key={experience.id}
          className={`experience${isCurrent(experience) ? " current" : ""}`}>
          <div className="dot" aria-hidden="true">
            <span className="orb"></span>
          </div>
          <div className="details">
            <div className="company">
              <div className="image-logo-office">
                <img src="/icons/office.svg" alt="office icon" />
              </div>
              <div className="company-name">
                <h3>{experience.company.name}</h3>
                <h4>{experience.company.location}</h4>
              </div>
            </div>
            <div className="role-details">
              <h2>{experience.role}</h2>
              <p>
                <img src="/icons/calendar.svg" alt="calendar icon" />
                {experience.duration}
                {isCurrent(experience) && (
                  <span className="current-badge">Current</span>
                )}
              </p>
              <ul>
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="experience start">
        <div className="dot" aria-hidden="true">
          <span className="orb"></span>
        </div>
        <div className="details">
          <h3>Start</h3>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
