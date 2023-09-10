function Design() {
  return (
    <div className="container">
      <div style={{ backgroundColor: "black" }}>
        <h1 className="title">A modern publishing platform</h1>
      </div>
      <h2 className="heading">State of the Art Infrastructure</h2>
      <h3 className="sub">Free, Open, simple</h3>
      <p>
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format, or flow. With this functionality, you’re in full
        control.
      </p>
      <nav>
        <a className="header-link">header link</a>
        <a className="menu-link">menu link</a>
        <div style={{ backgroundColor: "black" }}>
          <h4 className="footer-link">footer link</h4>
          <a className="footer-link">footer link</a>
          <Button type={1} content="Start for Free" handler={console.log("Button 1")} />
          <Button type={2} content="Learn More" handler={console.log("Button 2")} />
          <Button type={3} content="Sign Up" handler={console.log("Button 3")} />
          

        </div>
        <Button type={4} content="Login" handler={console.log("Button 4")} />
      </nav>
    </div>
  );
}

function Button(props) {
  let className = "";
  if (props.type == 1) {
    className = "button-bg button-1";
  } else if (props.type == 2) {
    className = "button-bg button-2";
  } else if (props.type == 3) {
    className = "button-bg button-3";
  } else if (props.type == 4) {
     className = "button-4";
  }
  return <button className={"artefact " + className}>{props.content}</button>;
}

export { Design, Button };
