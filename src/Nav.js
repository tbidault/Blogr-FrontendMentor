import "./stylesheets/nav.css";
import React, { useEffect, useState } from "react";
import { Button } from "./Design";

const data = {
  Product: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  Company: ["About", "Team", "Blog", "Careers"],
  Connect: ["Contact", "Newsletter", "LinkedIn"],
};

function Nav() {
  const [onMenu, setMenu] = useState(false);
  return (
    <>
      {onMenu ? (
        <div className="menu-wrapper">
          <Menu />
        </div>
      ) : null}
      <nav id="nav">
        <img
          className="background-img"
          src={"/assets/images/bg-pattern-intro-mobile.svg"}
        />
        <section className="container navLayout">
          <div id="navTop">
            <img className="mobile" src={"/assets/images/logo.svg"} />
            <menu className="desktop">
              <div className="layout">
                <div className="primary">
                  <img className="desktop" src={"/assets/images/logo.svg"} />
                  <SubControl />
                </div>
                <div className="buttons">
                  <Button type={4} content="Login" />
                  <Button type={1} content="Sign Up" />
                </div>
              </div>
            </menu>
            <button
              className="mobile menu-trigger"
              onClick={() => setMenu(!onMenu)}
            >
              <img
                src={`/assets/images/icon-${
                  onMenu ? "close" : "hamburger"
                }.svg`}
              />
            </button>
          </div>
          <div id="navMid">
            <h1 className="title">A modern publishing platform </h1>
            <p className="text">
              Grow your audience and build your online brand
            </p>
          </div>
          <div id="navBot">
            <Button type={1} content="Start for Free" />
            <Button type={2} content="Learn More" />
          </div>
        </section>
      </nav>
    </>
  );
}

const Sub = (props) => {
  const content = data[props.name];
  const maxLength = content.reduce((x, y) => Math.max(x, y.length), 0);
  const boldOffset = 3;
  console.log(maxLength);
  if (props.activation) {
    return (
      <div className="entry">
        <option className="header-link light" onClick={props.handler}>
          {props.name}
        </option>
        <div className="wrapper">
          <div
            className="sub-entries"
            style={{ minWidth: `${maxLength + boldOffset}em` }}
          >
            {content.map((element) => {
              return <a className="menu-link">{element}</a>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="entry">
        <option className="header-link" onClick={props.handler}>
          {props.name}
        </option>
      </div>
    );
  }
};

function SubControl() {
  const [activation, setActivation] = useState(-1);

  const toggle = (origin) => {
    if (origin == activation) {
      // fermeture
      setActivation(-1);
    } else {
      // ouverture ou remplacement
      setActivation(origin);
    }
  };
  return (
    <>
      {["Product", "Company", "Connect"].map((name, i) => (
        <Sub
          name={name}
          activation={activation == i}
          handler={() => toggle(i)}
          key={i}
        />
      ))}
    </>
  );
}

function Menu() {
  return (
    <menu className="mobile container">
      <div className="layout container">
        <SubControl />
        <hr />
        <Button type={4} content="Login" />
        <Button type={3} content="Sign Up" />
      </div>
    </menu>
  );
}

export default Nav;
