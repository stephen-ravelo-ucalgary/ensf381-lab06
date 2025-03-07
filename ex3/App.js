import "./App.css";
import EngineeringTopics from "./EngineeringTopics.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

function App() {
  const currentYear = new Date().getFullYear();
  var isLoggedIn = false;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <Home title="Home Page" description="Welcome to our website."/>
      <About title="About Us" description="We are passionate about delivering quality experiences."/>
      <Contact title="Contact Us" description="Feel free to reach out to us via email or phone."/>
      <EngineeringTopics/>
    </div>
  );
}

export default App;
