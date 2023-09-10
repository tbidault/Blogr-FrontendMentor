import logo from "./logo.svg";
import "./stylesheets/index.css";
import "./stylesheets/design.css";
import { Button, Design } from "./Design";
import Footer from "./Footer";
import Linear from "./Linear";
import Nav from "./Nav";

function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
      <Nav /> 
      <Linear.Top />
      <Linear.Mid />
      <Linear.Bottom />
      <Footer />
    </div>
  );
}

export default App;
