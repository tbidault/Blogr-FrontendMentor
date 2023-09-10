import "./stylesheets/linear.css";
import React, { useEffect, useState } from "react";

const content = {
  top: [
    {
      title: "Introducing an extensible editor",
      txt: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      title: "Robust content  management",
      txt: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.",
    },
  ],
  bottom: [
    {
      title: "Free, open, simple",
      txt: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    },
    {
      title: "Powerful tooling",
      txt: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ],
};

const ImageComponent = (props) => {
  const type = props.type ? props.type : "editor";
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const imagePath =
        window.innerWidth >= 1000
          ? `/assets/images/illustration-${type}-desktop.svg`
          : `/assets/images/illustration-${type}-mobile.svg`;

      setImageSrc(imagePath);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="image-container">
      <img
        src={imageSrc}
        alt="Image"
        className={`embedded-img linear-img ${type}`}
      />
    </div>
  );
};

function Top() {
  return (
    <div className="linear">
      <section className="container  linear-layout">
        <h3 className="sub heading linear-title">Designed for the future</h3>
        <div className="linear-bottom editor">
          <ImageComponent type="editor" />
          <div className="linear-bottom-content">
            {content.top.map((category, index) => (
              <Category title={category.title} txt={category.txt} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Bottom() {
  return (
    <div className="linear">
      <section className="container  linear-layout">
        <div className="linear-bottom laptop">
          <ImageComponent type="laptop" />
          <div className="linear-bottom-content">
            {content.bottom.map((category, index) => (
              <Category title={category.title} txt={category.txt} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Mid() {
  return (
    <div className="phone-wrapper">
      <div className="phone">
        <div className="phone-pattern">
          <div className="embedded-overflow">
            <img
              className="embedded-img"
              src="/assets/images/bg-pattern-circles.svg"
            />
          </div>
        </div>
        <section className="container phone-layout">
          <div className="phone-img">
            <img
              className="embedded-img"
              src="/assets/images/illustration-phones.svg"
            />
          </div>
          <div className="phone-content">
            <h2 className="heading">State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function Category(props) {
  return (
    <div className=" linear-sub-block linear-block">
      <h3 className="sub linear-title">{props.title}</h3>
      <p className="linear-content">{props.txt}</p>
    </div>
  );
}

export default { Top, Mid, Bottom };
