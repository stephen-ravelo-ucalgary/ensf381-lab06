import logo from './logo.svg';
import './App.css';
import EngineeringTopics from './EngineeringTopics.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function MyComponent(isLoggedIn) {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>
}

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {MyComponent(isLoggedIn)}
      {Home()}
      {About()}
      {Contact()}
      {EngineeringTopics()}
    </div>
  );
}

export default App;
