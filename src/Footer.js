import "./stylesheets/footer.css";

const content = [
  {
    title: "Product",
    txt: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    title: "Company",
    txt: ["About", "Team", "Blog", "Careers"],
  },
  {
    title: "Connect",
    txt: ["Contact", "Newsletter", "Linkedin"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <section className="container footer-layout">
        <img className="footer-logo" src="/assets/images/logo.svg" />
        {content.map((category, index) => (
          <Category title={category.title} txt={category.txt} key={index} />
        ))}
      </section>
    </footer>
  );
}

function Category(props) {
  return (
    <div className="link-category">
      <h4 className="footer-link">{props.title}</h4>
      <div className="link-container">
        {props.txt.map((link, index) => (
          <a className="footer-link" key={index}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
