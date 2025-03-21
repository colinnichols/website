const About = () => {
  return (
    <>
      <h1>About</h1>
      <div
        className="flickr-photo photo-container float-right max-w-[25rem] hidden md:block"
        aria-hidden="true"
      >
        <a href="https://www.flickr.com/photos/colinnichols/6662613221">
          <picture>
            <source srcSet="/img/steamboat-springs.avif" />
            <source srcSet="/img/steamboat-springs.webp" />
            <img
              src="/img/steamboat-springs.jpg"
              alt="photo I took near Steamboat Springs, Colorado"
            />
          </picture>
          <span className="flickr-link">
            view on Flickr{" "}
            <img className="fa" src="/img/flickr.svg" aria-hidden="true" />
          </span>
        </a>
      </div>
      <p>
        Welcome to my site, my name is Colin Nichols. I am a Engineering Leader
        with over 20 years of experience in web design and development for
        business promotion. Throughout my career I've specialized in web design,
        responsive design, accessibility, development and optimization. More
        recently I've engaged in leadership roles working with high performing
        teams to deliver some amazing projects and results. I've worked with
        top-tier brands including Gartner, USAID, Verizon, Autodesk, and Oracle.
      </p>
      <h2>Let's work together</h2>
      <p>
        I might not always be available for a project but I am always looking to
        expand my network. If you'd like to talk to me about a project, feel
        free to <a href="mailto:me@colinnichols.com">contact me</a>.
      </p>
      <div className="flickr-photo photo-container md:hidden">
        <a href="https://www.flickr.com/photos/colinnichols/6662613221">
          <picture>
            <source srcSet="/img/steamboat-springs.avif" />
            <source srcSet="/img/steamboat-springs.webp" />
            <img
              src="/img/steamboat-springs.jpg"
              alt="photo I took near Steamboat Springs, Colorado"
            />
          </picture>
          <span className="flickr-link">
            view on Flickr{" "}
            <img className="fa" src="/img/flickr.svg" aria-hidden="true" />
          </span>
        </a>
      </div>
    </>
  );
};

export default About;
