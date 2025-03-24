const PhotoContainer = () => {
  return (
    <a
      className="photo-container order-last mt-7.5 mb-7.5 md:mt-0 md:ml-6 md:float-right md:max-w-[25rem]"
      href="https://www.flickr.com/photos/colinnichols/6662613221"
    >
      <picture>
        <source
          media="(min-width:768px)"
          srcset="https://colinnichols.imgix.net/steamboat-springs.jpg?auto=format&w=268"
        ></source>
        <img
          src="https://colinnichols.imgix.net/steamboat-springs.jpg?auto=format&w=703"
          alt="photo I took near Steamboat Springs, Colorado"
        />
      </picture>
      <span className="flickr-link">
        view on Flickr{" "}
        <img className="fa" src="/img/flickr.svg" aria-hidden="true" />
      </span>
    </a>
  );
};

export default PhotoContainer;
