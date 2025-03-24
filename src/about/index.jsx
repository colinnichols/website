import PhotoContainer from "./PhotoContainer";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:block">
        <h1>About</h1>
        <PhotoContainer />
        <p>
          Welcome to my site, my name is Colin Nichols. I am a Engineering
          Leader with over 20 years of experience in web design and development
          for business promotion. Throughout my career I've specialized in web
          design, responsive design, accessibility, development and
          optimization. More recently I've engaged in leadership roles working
          with high performing teams to deliver some amazing projects and
          results. I've worked with top-tier brands including Gartner, USAID,
          Verizon, Autodesk, and Oracle.
        </p>
        <h2>Let's work together</h2>
        <p>
          I might not always be available for a project but I am always looking
          to expand my network. If you'd like to talk to me about a project,
          feel free to <a href="mailto:me@colinnichols.com">contact me</a>.
        </p>
      </div>
    </>
  );
};

export default About;
