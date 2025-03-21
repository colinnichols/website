import Education from "./Education";
import FreelanceProjects from "./FreelanceProjects";
import WorkHistory from "./WorkHistory";

const Resume = () => {
  return (
    <>
      <header className="page-header resume-header">
        <span
          className="placeholder-contact-information"
          aria-hidden="true"
        ></span>
        <h1 className="page-title">Professional Resume</h1>
        <div className="contact">
          <h2 className="h4 contact-name">Colin Nichols</h2>
          <img
            className="fa contact-icon"
            src="/img/envelope.svg"
            aria-hidden="true"
          />
          <a className="contact-detail" href="mailto:me@colinnichols.com">
            me@colinnichols.com
          </a>
        </div>
      </header>
      <p>
        Engineering leader with a passion for quality design and production.
        Interested in leadership opportunities working with driven individuals
        to build technology solutions for business promotion. Skill sets
        include:
      </p>
      <ul>
        <li>
          web design, development & implementation user experience, responsive
        </li>
        <li>design & browser consistency engineering leadership, strong</li>
        <li>communication & relationship management</li>
      </ul>
      <WorkHistory />
      <FreelanceProjects />
      <Education />
    </>
  );
};
export default Resume;
