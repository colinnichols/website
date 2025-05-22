import Education from "./Education";
import FreelanceProjects from "./FreelanceProjects";
import WorkHistory from "./WorkHistory";
import "./styles.css";

const Resume = () => {
  return (
    <>
      <header className="page-header resume-header mb-5">
        <span
          className="placeholder-contact-information"
          aria-hidden="true"
        ></span>
        <h1 className="page-title">Professional Resume</h1>
        <div className="contact">
          <h2 className="h4 contact-name">Colin Nichols</h2>
          <img
            className="fa contact-icon"
            src="/images/envelope.svg"
            aria-hidden="true"
          />
          <a className="contact-detail" href="mailto:me@colinnichols.com">
            me@colinnichols.com
          </a>
        </div>
      </header>
      <p>
        Parent of two children, cyclist and snowboard enthusiast. Engineering
        leader with a passion for quality design and production. Open to both
        leadership and individual contributor roles, working with driven teams
        to build technology solutions that drive business outcomes. Skill sets
        include:
      </p>
      <ul>
        <li>web design, development & implementation</li>
        <li>user experience, responsive design & browser consistency</li>
        <li>
          engineering leadership, strong communication & relationship management
        </li>
      </ul>
      <h2 className="section-header">
        <span className="section-header-title">Skills & Tools</span>
      </h2>
      <ul>
        <li>
          <strong>Languages & Frameworks:</strong> JavaScript, TypeScript,
          HTML5, CSS3, React, Preact, Next.js, Node.js, GraphQL, D3, Sass,
          Tailwind CSS
        </li>
        <li>
          <strong>Design & UI Systems:</strong> Figma, Storybook, Adobe XD,
          Sketch, Photoshop
        </li>
        <li>
          <strong>Testing & QA:</strong> React Testing Library, Jest, Cypress,
          Playwright, BrowserStack, Percy
        </li>
        <li>
          <strong>Analytics & A/B Testing:</strong> Google Analytics, GTM,
          FullStory, Eloqua, LaunchDarkly, Optimizely, Custom A/B Testing
        </li>
        <li>
          <strong>DevOps & Deployment:</strong> AWS, Vercel, Serverless, CI/CD,
          GitHub Actions, Snyk, PagerDuty
        </li>
        <li>
          <strong>CMS & APIs:</strong> Contentful, Siteleaf, REST, GraphQL,
          Kafka
        </li>
        <li>
          <strong>Compliance & Accessibility:</strong> GDPR, CCPA, OneTrust,
          Section 508, Lighthouse, Axe, WAVE
        </li>
        <li>
          <strong>Collaboration & Project Management:</strong> Jira, Confluence,
          Slack, Git, GitHub, GitLab
        </li>
      </ul>
      <h2 className="section-header">
        <span className="section-header-title">Leadership & Team Skills</span>
      </h2>
      <p>
        Empathic Management, Team Building & Coaching, 1:1 Mentorship,
        Engineering OKRs, Cross-Functional Collaboration, Project Planning &
        Prioritization, Performance Reviews, Inclusive Communication, Technical
        Strategy, Remote & Distributed Team Management, Hiring & Promotion
        Advocacy, Agile & Scrum Practice
      </p>
      <WorkHistory />
      <FreelanceProjects />
      <Education />
    </>
  );
};
export default Resume;
